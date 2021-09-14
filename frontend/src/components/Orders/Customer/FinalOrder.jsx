import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../Styles/SideBar.css";
import { Button, Col, Row, Container, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import UberELogo from "../../Home/HomeIcons/logo";
import mainstyle from "../../Home/HomeIcons/HeaderStyle";
import ProfileCanvas from "../../Home/HomeIcons/ProfileCanvas";

class FinalOrder extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container fluid='true' style={{ overflow: "hidden" }}>
        <Row
          style={{
            display: "flex",
            marginLeft: "2%",

            height: "100vh",
          }}>
          <Col style={{ flex: "1.5", backgroundColor: "white" }} fluid='true'>
            <Nav style={{ marginTop: "2%" }}>
              <Nav.Item>
                <FaBars
                  style={{ height: "50px" }}
                  xs='6'
                  size='24px'
                  color='black'
                  onClick={this.handleShow}
                />
              </Nav.Item>
              <Nav.Item style={mainstyle.paddingLeft}>
                <img
                  style={{ paddingLeft: "15px", height: "50px" }}
                  src={UberELogo.UberEBLogo.src}
                  alt={UberELogo.UberEBLogo.alt}
                />
              </Nav.Item>
            </Nav>
            <Row style={{ marginTop: "4%" }}>
              <h1>Hello World</h1>
            </Row>
            <Row
              style={{
                marginTop: "4%",
              }}>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  fontSize: "25px",
                }}>
                Delivery Address
              </h4>
            </Row>
            <Row
              style={{
                marginTop: "4%",
              }}>
              <h4
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                  fontSize: "25px",
                }}>
                Your items
              </h4>
            </Row>
          </Col>
          <Col
            style={{ backgroundColor: "#F6F6F6" }}
            align='center'
            fluid='true'>
            <Row style={{ paddingTop: "50px", width: "80%" }}>
              <Button
                style={{
                  marginTop: "10%",
                  height: "60px",
                  backgroundColor: "#05934F",
                  color: "white",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                  fontWeight: "500",
                }}
                variant='light'>
                Place Order
              </Button>
            </Row>
          </Col>
        </Row>
        <ProfileCanvas handleClose={this.handleClose} showModal={showModal} />
      </Container>
    );
  }
}

export default FinalOrder;
