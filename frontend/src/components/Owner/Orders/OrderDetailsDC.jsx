import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Col, Row } from "react-bootstrap";
import { PropTypes } from "prop-types";
import delivered from "../../Svg/delivered.jpg";
import cancelled from "../../Svg/cancelled.jpg";

class OrderDetailsDC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      IsDeliveredimage,
      orderId,
      name,
      subTotal,
      orderTotal,
      tax,
      dishes,
      displayDetails,
    } = this.props;

    return (
      <div
        show={displayDetails}
        style={{ display: displayDetails ? "block" : "none" }}>
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
            Subtotal<span style={{ paddingLeft: "20px" }}>${orderTotal}</span>
          </Col>
        </Row>
        <Row
          style={{
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: "550",
          }}>
          <Col style={{ textAlign: "end" }}>
            Tax<span style={{ paddingLeft: "20px" }}>${tax}</span>
          </Col>
        </Row>
        <Row
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            fontWeight: "550",
          }}>
          <Col style={{ textAlign: "end" }}>
            Total<span style={{ paddingLeft: "20px" }}>${subTotal}</span>
          </Col>
        </Row>
        <Row style={{ paddingTop: "20%", marginLeft: "30%" }}>
          <img
            style={{ width: "40%", height: "40%" }}
            src={IsDeliveredimage ? delivered : cancelled}
            alt=''
          />
        </Row>
      </div>
    );
  }
}

export default OrderDetailsDC;

OrderDetailsDC.propTypes = {
  IsDeliveredimage: PropTypes.bool.isRequired,
  orderId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  subTotal: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  displayDetails: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dishes: PropTypes.object.isRequired,
};
