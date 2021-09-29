/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { Col, Dropdown, Button, Row } from "react-bootstrap";
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
            {/* <OrderCard bccolor='#05944F' onClick={this.handleDisplay} /> */}
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
              {/* <Row
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                }}>
                <Col>
                  1<span style={{ paddingLeft: "5%" }}>Pearl Milk Tea</span>
                </Col>
                <Col xs={3} style={{ textAlign: "end" }}>
                  $20
                </Col>
              </Row>
              <hr style={{ border: "1px soild black" }} />
              <Row
                style={{
                  fontSize: "18px",
                  fontFamily: "sans-serif",
                  fontWeight: "550",
                }}>
                <Col>
                  1<span style={{ paddingLeft: "5%" }}>Pearl Milk Tea</span>
                </Col>
                <Col xs={3} style={{ textAlign: "end" }}>
                  $20
                </Col>
              </Row>
              <hr style={{ border: "1px soild black" }} /> */}

              {/* <div style={{ display: "flex", alignContent: "left" }}> */}
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
                }}>
                <Col style={{ textAlign: "end", paddingTop: "50px" }}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant='success'
                      id='dropdown-basic'
                      style={{
                        width: "40%",
                        height: "3.5rem",
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "550",
                        backgroundColor: "#05944F",
                      }}>
                      Order Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        width: "40%",
                        height: "3.5rem",
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                        fontWeight: "550",
                      }}>
                      <Dropdown.Item href='#/action-2'>
                        Order Received
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Preparing</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Cancel</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        On the way
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Delivered</Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>
                        Pick up Ready
                      </Dropdown.Item>
                      <Dropdown.Item href='#/action-3'>Picked up</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>

              <Row style={{ marginTop: "5%" }}>
                <Button
                  style={{
                    marginLeft: "70%",
                    marginTop: "0%",
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
