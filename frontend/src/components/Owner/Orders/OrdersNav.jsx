import React, { Component } from "react";
import "react-times/css/classic/default.css";
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

class OrdersNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar variant='light' style={{ borderBottom: "1px solid black" }}>
        <Container
          fluid='true'
          style={{ paddingLeft: "40px", fontSize: "20px" }}>
          <Nav className='me-auto'>
            <Nav.Link
              href='/owner/orders'
              style={{ paddingLeft: "40px" }}
              active>
              New Orders
            </Nav.Link>
            <Nav.Link
              href='/owner/deliveredorders'
              style={{ paddingLeft: "40px" }}>
              Delivered Orders
            </Nav.Link>
            <Nav.Link
              href='/owner/cancelledorders'
              style={{ paddingLeft: "40px" }}>
              Cancelled Orders
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default OrdersNav;
