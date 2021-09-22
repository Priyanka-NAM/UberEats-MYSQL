import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../Styles/SideBar.css";
import { Link } from "react-router-dom";

import { Button, Col, Row, Container, Nav, Form } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import UberELogo from "../../Home/HomeIcons/logo";
import mainstyle from "../../Home/HomeIcons/HeaderStyle";
import "../../Styles/SignInUp.css";
import ProfileCanvas from "../../Home/HomeIcons/ProfileCanvas";
import Location from "../../Home/HomeIcons/Location";

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
                <Link to={{ pathname: "/home", state: "" }}>
                  <img
                    style={{ paddingLeft: "15px", height: "50px" }}
                    src={UberELogo.UberEBLogo.src}
                    alt={UberELogo.UberEBLogo.alt}
                  />
                </Link>
              </Nav.Item>
            </Nav>
            <div style={{ width: "85%" }}>
              <Row style={{ marginTop: "4%" }}>
                <h1 className='restaName'>Everest Cuisine</h1>
              </Row>
              <hr style={{ border: "1px", width: "70%" }} />
              <Row style={{ marginTop: "2%" }}>
                <h4 className='subtitle'>Delivery Address</h4>
              </Row>
              <Link
                to={{ pathname: "/order/location", state: "" }}
                className='linkstyle'>
                <Row style={{ textAlign: "left", width: "70%" }}>
                  <Col xs={1} className='locationIcon'>
                    <MdLocationOn size='30px' />
                  </Col>
                  <Col style={{ textAlign: "left" }}>
                    <h5 className='addressdetails'>Shadow brook apartments</h5>
                    <h6 className='detailsadd'>235 Bernado</h6>
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <Button
                      variant='light'
                      style={{
                        borderRadius: "20px",
                        backgroundColor: "#eeeeee",
                      }}>
                      Edit
                    </Button>
                  </Col>
                </Row>
              </Link>
              <hr style={{ border: "1px", width: "70%" }} />
              <Row style={{ marginTop: "2%" }}>
                <h4 className='subtitle'>Payment</h4>

                <Row style={{ paddingBottom: "20px" }}>
                  <Col xs={1} style={{ paddingRight: "0%" }}>
                    <input
                      type='radio'
                      name='radio'
                      value='value'
                      style={{
                        height: "22px",
                        width: "22px",
                        verticalAlign: "middle",
                        backgroundColor: "black",
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Check.Label className='addressdetails'>
                      Cash on Delivery
                    </Form.Check.Label>
                  </Col>
                </Row>
                <hr style={{ border: "1px", width: "70%" }} />
                <Row style={{ paddingBottom: "15px" }}>
                  <Col xs={1}>
                    <input
                      type='radio'
                      name='radio'
                      value='value'
                      style={{
                        height: "22px",
                        width: "22px",
                        verticalAlign: "middle",
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Check.Label className='addressdetails'>
                      Credit Card
                    </Form.Check.Label>
                  </Col>
                </Row>
              </Row>
              <hr style={{ border: "1px", width: "70%" }} />
              <Row style={{ marginTop: "2%" }}>
                <h4 className='subtitle'>Your items</h4>
              </Row>
              <Row style={{ textAlign: "left", width: "70%" }}>
                <Col xs={1} className='locationIcon'>
                  <Button
                    variant='light'
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#eeeeee",
                      width: "3rem",
                    }}>
                    3
                  </Button>
                </Col>
                <Col style={{ textAlign: "left" }}>
                  <h5 className='addressdetails'>Brown Rice</h5>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <h6 className='priceDetails'>$45</h6>
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            style={{ backgroundColor: "#F6F6F6" }}
            align='center'
            fluid='true'>
            <Row style={{ paddingTop: "40px", width: "80%" }}>
              <Button className='placeorderbtn' variant='light'>
                Place Order
              </Button>
            </Row>
            <Row style={{ width: "80%" }}>
              <p>
                If you’re not around when the delivery person arrives, they’ll
                leave your order at the door. By placing your order, you agree
                to take full responsibility for it once it’s delivered.
              </p>
            </Row>
            <hr style={{ border: "1px black" }} />
            <Row
              // className='orderDetailsRow'
              style={{
                width: "80%",
                paddingTop: "40px",
                fontSize: "18px",
                fontFamily: "sans-serif",
                letterSpacing: "0.06em",
              }}>
              <ul className='list-group'>
                <li
                  className=' d-flex justify-content-between align-items-center'
                  style={{ paddingBottom: "10px" }}>
                  Subtotal
                  <span>$4.00</span>
                </li>
                <li
                  className=' d-flex justify-content-between align-items-center'
                  style={{ paddingBottom: "10px" }}>
                  Fees
                  <span>$2.00</span>
                </li>
                <li
                  className='d-flex justify-content-between align-items-center'
                  style={{ paddingBottom: "10px" }}>
                  Delivery Fee
                  <span>$1.00</span>
                </li>
                <li
                  className='d-flex justify-content-between align-items-center'
                  style={{ paddingBottom: "10px" }}>
                  CA Driver Benefits
                  <span>$1.00</span>
                </li>
              </ul>
            </Row>
            <hr style={{ border: "1px black" }} />
            <Row
              style={{
                width: "80%",
                paddingTop: "20px",
                fontSize: "24px",
                fontFamily: "sans-serif",
              }}>
              <ul className='list-group'>
                <li
                  className=' d-flex justify-content-between align-items-center'
                  style={{ paddingBottom: "10px" }}>
                  Total
                  <span>$40.00</span>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
        <ProfileCanvas handleClose={this.handleClose} showModal={showModal} />
      </Container>
    );
  }
}

export default FinalOrder;
