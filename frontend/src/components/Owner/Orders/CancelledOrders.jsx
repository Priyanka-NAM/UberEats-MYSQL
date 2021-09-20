import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Col, Row } from "react-bootstrap";
import OwnerHome from "../../Home/OwnerHome";
import OrdersNav from "./OrdersNav";
import OrderCard from "./OrderCard";
import OrderDetailsDC from "./OrderDetailsDC";

class CancelledOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              Cancelled Orders
            </h4>
            <br />
            <OrderCard bccolor='#eeeeee' />
          </Col>
          <Col xs={5} style={{ padding: "3%" }}>
            <OrderDetailsDC IsDeliveredimage={false} />
          </Col>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default CancelledOrders;
