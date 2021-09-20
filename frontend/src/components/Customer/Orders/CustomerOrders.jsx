import React, { Component } from "react";
import { Container, Col, Button, Card, Row } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../Home/HomeIcons/Header";

class CustomerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
      </div>
    );
  }
}

export default CustomerOrders;
