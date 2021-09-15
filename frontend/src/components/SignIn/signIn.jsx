import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import axios from "axios";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import SignInUp from "../Styles/SignInUp";
import UberELogo from "../Home/HomeIcons/logo";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signinStatus: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    // const { userSignIn } = this.props;
    const details = {
      email,
      password,
    };
    console.log(details);
    axios.defaults.withCredentials = true;
    axios
      .post(`http://localhost:5000/ubereats/signin`, details)
      .then((response) => {
        console.log(response.data);
        this.setState({
          signinStatus: response.data.status,
        });
      })
      .catch(() => {
        console.log("Axios Post Error");
        this.setState({
          signinStatus: "Server not reachable",
        });
      });
  };

  handleChange = (e) => {
    console.log(this.state);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { signinStatus } = this.state;

    // const { user, user_id } = this.props;
    let redirectpage = null;
    // let error = "";
    if (signinStatus) {
      redirectpage = <Redirect to='/home' />;
    }


    return (
      <Container>
        {redirectpage}
        <Row align='center' style={{ marginTop: "100px" }}>
          <img
            style={{ paddingLeft: "0" }}
            src={UberELogo.UberEBLogo.src}
            alt={UberELogo.UberEBLogo.alt}
          />
        </Row>
        <Row>
          <Form onSubmit={this.handleSubmit}>
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
                  name='email'
                  placeholder='Enter email'
                  onChange={this.handleChange}
                />
                <Form.Control
                  style={{
                    marginTop: "20px",
                  }}
                  size='lg'
                  type='password'
                  name='password'
                  placeholder='Enter password'
                  onChange={this.handleChange}
                />
                {signinStatus && (
                  <p
                    style={{
                      width: "100%",
                      height: "40%",
                      marginTop: "15px",
                      fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                    }}
                    className='alert alert-danger'>
                    {signinStatus}
                  </p>
                )}
                <Button
                  size='lg'
                  style={{
                    width: "100%",
                    height: "60%",
                    marginTop: "25px",
                    fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  }}
                  variant='dark'
                  type='submit'>
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
                    to='/signup'>
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

// SignIn.propTypes = {
//   userSignIn: PropTypes.func.isRequired,
// };

export default SignIn;
