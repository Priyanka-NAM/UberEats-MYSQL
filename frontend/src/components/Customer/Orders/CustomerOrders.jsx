import React, { Component } from "react";
import { Container, Col, Button, Card, Row, Modal } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";

import Header from "../../Home/HomeIcons/Header";

class CustomerOrders extends Component {
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
      <div style={{ marginLeft: "1%", overflow: "hidden" }}>
        <Header />
        <Container style={{ marginLeft: "1%" }} fluid>
          <Row>
            <h1>Past Orders</h1>
          </Row>

          <Row style={{ paddingRight: "10%" }}>
            <Card
              style={{
                width: "22rem",
                paddingLeft: "0px",
              }}>
              <Card.Img
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "11rem",
                }}
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
              />
            </Card>
            <Col
              style={{
                fontFamily: "UberMoveText, sans-serif",
              }}>
              <Col
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                }}>
                Himalayan Kitchen - Mountain View
              </Col>
              <Col>
                {1} item for ${0.0} • Canceled on Sep 13 at 11:29 AM •{" "}
                {/* <Link href='/'>View receipt</Link> */}
              </Col>
              <br />
              <Col
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}>
                {1} Paneer Butter Masala
              </Col>
            </Col>
            <Col align='right'>
              <Button
                variant='dark'
                onClick={this.handleShow}
                style={{
                  width: "40%",
                  height: "30%",
                  fontSize: "18px",
                  fontWeight: "500",
                }}>
                Order Details
              </Button>
            </Col>
          </Row>
          <hr size='3' color='blue' />
        </Container>
        <Modal
          show={showModal}
          onHide={this.handleClose}
          backdrop='static'
          keyboard={false}
          style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <BiX
            size='35px'
            style={{ color: "black" }}
            onClick={this.handleClose}
          />
          <Modal.Header>
            <h5
              style={{
                fontSize: "24px",
                fontFamily: "UberMove, sans-serif",
                marginBottom: "0px",
              }}>
              Receipt
            </h5>
          </Modal.Header>
          <Modal.Body>
            <Modal.Title
              style={{
                fontSize: "25px",
                fontFamily: "UberMove, sans-serif",
                marginBottom: "20px",
              }}>
              Total
              <span
                style={{
                  paddingLeft: "80%",
                }}>
                $5
              </span>
            </Modal.Title>

            <ul
              className='list-group'
              style={{ fontSize: "16px", fontFamily: "UberMove, sans-serif" }}>
              <li
                className=' d-flex justify-content-between align-items-center'
                style={{ padding: "0px 20px 10px 20px" }}>
                <span>
                  <span style={{ marginRight: "20px" }}>4</span>item
                </span>
                <span>$5</span>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default CustomerOrders;
