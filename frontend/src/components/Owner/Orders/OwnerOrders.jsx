/* eslint-disable camelcase */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Col, Alert, Form, Button, Row } from "react-bootstrap";
import OrderCard from "./OrderCard";
import OwnerHome from "../../Home/OwnerHome";
import OrdersNav from "./OrdersNav";
import {
  ownerNewOrders,
  ownerNewOrdersUpdate,
} from "../../../Actions/OwnerActions";

class OwnerOrders extends Component {
  hasMounted = false;

  constructor(props) {
    super(props);
    this.state = { showEdit: false };
  }

  componentDidMount() {
    this.props.ownerNewOrders();
  }

  componentDidUpdate(prevprops) {
    const { newOrders } = this.props;
    if (newOrders !== prevprops.newOrders) {
      this.setState({
        newOrders,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

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
    const { order_id, restaurant_id } = this.state.currentOrder;
    let { order_status } = this.state.currentOrder;
    const { delivery_status } = this.state;
    if (delivery_status === "Picked Up" || delivery_status === "Delivered") {
      order_status = "Completed";
    }
    if (delivery_status === "Cancel") {
      order_status = "Cancelled";
    }
    this.props.ownerNewOrdersUpdate({
      order_id,
      restaurant_id,
      delivery_status,
      order_status,
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
      orderComps = (
        <Alert variant='info' style={{ fontFamily: "sans-serif" }}>
          No new Orders
        </Alert>
      );
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
            {errormessage && <Alert variant='info'>{errormessage}</Alert>}
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
                  name='delivery_status'
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
                  <option value='Order Received'> Order Received</option>
                  <option value='Preparing'>Preparing</option>
                  <option value='On the way'>On the way</option>
                  <option value='Delivered'>Delivered</option>
                  <option value='Cancel'>Cancel</option>
                  <option value='Pick up Ready'>Pick up Ready</option>
                  <option value='Picked up'>Picked up</option>
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

OwnerOrders.propTypes = {
  newOrders: PropTypes.object.isRequired,
  ownerNewOrders: PropTypes.func.isRequired,
  ownerNewOrdersUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newOrders: state.owner.newOrders,
});

export default connect(mapStateToProps, {
  ownerNewOrders,
  ownerNewOrdersUpdate,
})(OwnerOrders);
