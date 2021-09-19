import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Col,
  Form,
  Row,
  Button,
  ButtonGroup,
} from "react-bootstrap";

class OwnerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>HELLO WORLd</h1>
        </Row>
      </Container>
    );
  }
}

export default OwnerProfile;
