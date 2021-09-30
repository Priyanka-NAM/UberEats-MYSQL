/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Col, Dropdown, Form, Button, Row } from "react-bootstrap";
import OrderCard from "./OrderCard";
import OwnerHome from "../../Home/OwnerHome";
import OrdersNav from "./OrdersNav";
import backendServer from "../../../backEndConfig";
import { getToken } from "../../Service/authService";

class OwnerOrders extends Component {
  hasMounted = false;

  constructor(props) {
    super(props);
    this.state = { showEdit: false };
  }

  componentDidMount() {
    this.hasMounted = true;

    const { restaurant_id: restaurantId } = JSON.parse(
      localStorage.getItem("user")
    );

    console.log(" restaurantId: ", restaurantId);
    if (!restaurantId) return;
    axios.defaults.headers.common.authorization = getToken();
    axios
      // .get(
      //   `http://localhost:5000/ubereats/orders/neworders/restaurant/${restaurantId}`
      // )
      .get(`http://localhost:5000/ubereats/orders/neworders/restaurant/2`)
      .then((response) => {
        console.log("Response: ", JSON.stringify(response.data));

        if (response.data.status === "NEW_ORDERS") {
          if (this.hasMounted) {
            this.setState({
              newOrders: response.data.orders,
            });
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this.setState({
            errormessage: "Orders Could not be Fetched",
          });
        }
      });
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleDisplay = (index) => {
    const { newOrders } = this.state;
    this.setState({
      showEdit: true,
      currentOrder: newOrders[index],
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: false,
    });
  };

  render() {
    const { showEdit, errormessage, newOrders, currentOrder } = this.state;
    let orderId = null;
    let name = null;
    let subTotal = null;
    let orderTotal = null;
    let tax = null;
    let orderComps = null;
    let dishes = null;
    if (!newOrders || newOrders.length === 0) {
      orderComps = <h1>Orders are empty</h1>;
    } else {
      orderComps = newOrders.map((order, index) => (
        <OrderCard
          bccolor='#05944F'
          key={index}
          orderIndex={index}
          name={order.nick_name}
          orderId={order.order_id}
          billamount={order.sub_total}
          totalitems={order.dishes.length}
          handleDisplay={this.handleDisplay}
        />
      ));
    }

    if (currentOrder) {
      orderId = currentOrder.order_id;
      name = currentOrder.nick_name;
      subTotal = currentOrder.sub_total;
      orderTotal = currentOrder.order_total;
      tax = currentOrder.tax;

      dishes = currentOrder.dishes.map((dish, index) => (
        <>
          <Row
            style={{
              fontSize: "18px",
              fontFamily: "sans-serif",
              fontWeight: "550",
            }}>
            <Col>
              {dish.quantity}
              <span style={{ paddingLeft: "5%" }}>{dish.name}</span>
            </Col>
            <Col xs={3} style={{ textAlign: "end" }}>
              ${dish.price}
            </Col>
          </Row>
          <hr style={{ border: "1px soild black" }} />
        </>
      ));
    }

    const pageContent = (
      <Col style={{ padding: "0px" }} align='left'>
        <OrdersNav />
        <Row style={{ marginRight: "0%" }}>
          <Col
            style={{
              paddingLeft: "5%",
              paddingTop: "4%",
              borderRight: "1px solid black",
              height: "84vh",
            }}>
            <h4 style={{ fontSize: "35px", fontFamily: "sans-serif" }}>
              New Orders
            </h4>
            <br />
            {orderComps}
            {errormessage}
          </Col>
          <Col xs={5} style={{ padding: "3%" }}>
            <div
              show={showEdit}
              style={{ display: showEdit ? "block" : "none" }}>
              <Row
                style={{
                  paddingBottom: "0%",
                  height: "5rem",
                }}>
                <Col>
                  <h4
                    style={{
                      fontSize: "28px",
                      fontFamily: "sans-serif",
                      paddingBottom: "0%",
                      marginBottom: "2%",
                    }}>
                    {name}
                  </h4>
                  <h4
                    style={{
                      fontSize: "28px",
                      fontFamily: "sans-serif",
                      paddingTop: "0%",
                      marginTop: "0%",
                      paddingBottom: "0%",
                    }}>
                    {orderId}
                  </h4>
                </Col>
                <Col xs={3}>
                  <h4
                    style={{
                      fontSize: "24px",
                      fontFamily: "sans-serif",
                      width: "32%",
                      color: "#05944F",
                    }}>
                    Delivery
                  </h4>
                </Col>
              </Row>
              <hr style={{ border: "1px soild black" }} />
              {dishes}
              <Row
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                }}>
                <Col style={{ textAlign: "end" }}>
                  Subtotal
                  <span style={{ paddingLeft: "20px" }}>${orderTotal}</span>
                </Col>
              </Row>
              <Row
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                }}>
                <Col style={{ textAlign: "end" }}>
                  Tax
                  <span style={{ paddingLeft: "20px" }}>${tax}</span>
                </Col>
              </Row>
              <Row
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                }}>
                <Col style={{ textAlign: "end" }}>
                  Total
                  <span style={{ paddingLeft: "20px" }}>${subTotal}</span>
                </Col>
              </Row>
              <Row
                style={{
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                  marginTop: "15%",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <Form.Select
                  name='dishcategory'
                  style={{
                    width: "40%",
                    height: "3.5rem",
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "550",
                  }}
                  onChange={this.handleChange}
                  required>
                  <option>Order Status</option>
                  <option value='1'> Order Received</option>
                  <option value='2'>Preparing</option>
                  <option value='3'>On the way</option>
                  <option value='5'>Delivered</option>
                  <option value='4'>Cancel</option>
                  <option value='6'>Pick up Ready</option>
                  <option value='6'>Picked up</option>
                </Form.Select>
                <Button
                  style={{
                    width: "20%",
                    height: "3rem",
                    fontFamily: "sans-serif",
                    fontSize: "18px",
                  }}
                  variant='dark'
                  onClick={this.handleSave}>
                  Save
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default OwnerOrders;
