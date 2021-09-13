import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import UberELogo from "../Home/HomeIcons/logo";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row align='center' style={{ marginTop: "100px" }}>
          <img
            style={{ paddingLeft: "0" }}
            src={UberELogo.UberEBLogo.src}
            alt={UberELogo.UberEBLogo.alt}
          />
        </Row>
        <Row>
          <Form>
            <Row
              style={{
                marginTop: "60px",
                paddingLeft: "28%",
              }}>
              <h2
                style={{
                  fontSize: "30px",
                  fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  fontWeight: "400",
                }}>
                Welcome back
              </h2>
              <h6
                style={{
                  marginTop: "30px",
                  marginBottom: "10px",
                  fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  fontSize: "16px",
                  letterSpacing: ".02em",
                  fontWeight: "400",
                  color: "#262626",
                }}>
                Sign in with your email address or mobile number.
              </h6>
              <div
                style={{
                  width: "60%",
                  height: "100%",
                  fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                }}>
                <Form.Control
                  size='lg'
                  type='email'
                  placeholder='Enter email'
                />
                <Form.Control
                  style={{
                    marginTop: "20px",
                  }}
                  size='lg'
                  type='password'
                  placeholder='Enter password'
                />
                <Button
                  size='lg'
                  style={{
                    width: "100%",
                    height: "60%",
                    marginTop: "25px",
                    fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  }}
                  variant='dark'>
                  Next
                </Button>
              </div>
              <Row
                style={{
                  width: "60%",
                  marginTop: "20px",
                  fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  fontSize: "16px",
                }}>
                <Col
                  align='right'
                  style={{
                    paddingRight: "0px",
                  }}>
                  <Form.Label>New to Uber?</Form.Label>
                </Col>
                <Col>
                  <Link
                    style={{
                      color: "green",
                    }}
                    to='/'>
                    Create an account
                  </Link>
                </Col>
              </Row>
            </Row>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
