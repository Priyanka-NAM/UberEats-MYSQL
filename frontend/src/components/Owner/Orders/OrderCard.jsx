import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Button, Col, Row, Card } from "react-bootstrap";
import { PropTypes } from "prop-types";
import delivered from "../../Svg/delivered.jpg";

class OrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { bccolor } = this.props;
   
    return (
      <Row style={{ paddingBottom: "30px" }}>
        <Card style={{ width: "35rem", backgroundColor: bccolor }}>
          <Card.Body
            style={{
              padding: "25px",
              fontSize: "18px",
              fontFamily: "sans-serif",
            }}>
            <Row>
              <Col>
                <Card.Title style={{ fontWeight: "550" }}>
                  Name - <span style={{ fontWeight: "normal" }}>Karen</span>
                </Card.Title>
                <Card.Title style={{ fontWeight: "550", paddingTop: "20px" }}>
                  Order Id - <span style={{ fontWeight: "normal" }}>785D5</span>
                </Card.Title>
              </Col>
              <Col>
                <Card.Title style={{ fontWeight: "550" }}>
                  Bill Amount -{" "}
                  <span style={{ fontWeight: "normal" }}>$785</span>
                </Card.Title>
                <Card.Title style={{ fontWeight: "550", paddingTop: "20px" }}>
                  Total Items - <span style={{ fontWeight: "normal" }}>2</span>
                </Card.Title>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    );
  }
}
OrderCard.propTypes = {
  bccolor: PropTypes.string.isRequired,
};
export default OrderCard;
