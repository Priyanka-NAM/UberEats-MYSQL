import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Form,
  Col,
  Container,
  Navbar,
  Nav,
  Card,
  Dropdown,
  Row,
} from "react-bootstrap";
import OrderCard from "./OrderCard";
import OwnerHome from "../../Home/OwnerHome";
import OrdersNav from "./OrdersNav";

class OwnerOrders extends Component {
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
              New Orders
            </h4>
            <br />
            <OrderCard bccolor='#05944F' />
          </Col>
          <Col xs={5} style={{ padding: "3%" }}>
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
                  Karen
                </h4>
                <h4
                  style={{
                    fontSize: "28px",
                    fontFamily: "sans-serif",
                    paddingTop: "0%",
                    marginTop: "0%",
                    paddingBottom: "0%",
                  }}>
                  7120S
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
            <hr style={{ border: "1px soild black" }} />

            {/* <div style={{ display: "flex", alignContent: "left" }}> */}
            <Row
              style={{
                fontSize: "18px",
                fontFamily: "sans-serif",
                fontWeight: "550",
              }}>
              <Col style={{ textAlign: "end" }}>
                Subtotal<span style={{ paddingLeft: "20px" }}>$112</span>
              </Col>
            </Row>
            <Row
              style={{
                fontSize: "18px",
                fontFamily: "sans-serif",
                fontWeight: "550",
              }}>
              <Col style={{ textAlign: "end" }}>
                Tax<span style={{ paddingLeft: "20px" }}>$2</span>
              </Col>
            </Row>
            <Row
              style={{
                fontSize: "20px",
                fontFamily: "sans-serif",
                fontWeight: "550",
              }}>
              <Col style={{ textAlign: "end" }}>
                Total<span style={{ paddingLeft: "20px" }}>$2</span>
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
                    <Dropdown.Item href='#/action-3'>On the way</Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>Delivered</Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>
                      Pick up Ready
                    </Dropdown.Item>
                    <Dropdown.Item href='#/action-3'>Picked up</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default OwnerOrders;
