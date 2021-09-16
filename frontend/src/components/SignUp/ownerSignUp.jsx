/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Nav, Container, Navbar, Form } from "react-bootstrap";
import UberELogo from "../Home/HomeIcons/logo";
import { addOwner } from "../../Actions/OwnerActions";

class OwnerSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, location } = this.state;
    const details = {
      name,
      email,
      password,
      location,
    };
    this.props.addOwner(details);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { ownersignup } = this.props;
    const { status, userid } = ownersignup;
    let redirectpage = null;
    let errorMessage = "";
    if (!ownersignup && userid) {
      localStorage.setItem("userid", userid);
      redirectpage = <Redirect to='/home' />;
    } else if (status === "Authentication Failed") {
      errorMessage = "user already already exists";
    }

    return (
      <>
        {redirectpage}
        <Navbar bg='dark' variant='dark'>
          <Container
            align='right'
            style={{
              padding: "0px",
              margin: "0px",
            }}>
            <Navbar.Brand href='#home'>
              <Nav>
                <Nav.Item
                  style={{
                    marginLeft: "50px",
                    width: "100%",
                  }}>
                  <img
                    style={{ height: "60px", marginRight: "100px" }}
                    src={UberELogo.UberEWLogo.src}
                    alt={UberELogo.UberEWLogo.alt}
                  />
                </Nav.Item>
                <Nav.Item
                  style={{
                    marginLeft: "250%",
                    marginRight: "0",
                    paddingRight: "10px",
                  }}>
                  <Button variant='dark' type='submit'>
                    Sign In
                  </Button>
                </Nav.Item>
                <Nav.Item>
                  <Button active='true' variant='dark' type='submit'>
                    Sign Up
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container
          align='right'
          style={{
            width: "80%",
            height: "80vh",
            backgroundImage: `url("https://www.ubereats.com/restaurant/_static/b32d6f597129133d883c48c0b95c97f5.jpg")`,
          }}>
          <Container
            align='right'
            style={{
              backgroundColor: "white",
              margin: "0",
              width: "30%",
            }}>
            <Form
              align='center'
              style={{
                height: "80vh",
                width: "100%",
                fontfamily: "UberMoveText",
              }}
              onSubmit={this.handleSubmit}>
              <h2
                style={{
                  paddingTop: "50px",
                  paddingBottom: "33px",
                  fontfamily: "Book",
                  fontSize: "25px",
                }}>
                Getting Started
              </h2>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='name'
                  placeholder='Restaurant Name'
                  name='name'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='Location'
                  name='location'
                  placeholder='Restaurant Location'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='email'
                  name='email'
                  placeholder='Enter email'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#43A422",
                  color: "white",
                  height: "50px",
                }}
                variant='light'
                type='submit'>
                Submit
              </Button>
              {status && (
                <p
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                  }}
                  className='alert alert-danger'>
                  {errorMessage}
                </p>
              )}
            </Form>
          </Container>
        </Container>
      </>
    );
  }
}

OwnerSignUp.propTypes = {
  addOwner: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  ownersignup: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  ownersignup: state.ownersignup.user,
});
export default connect(mapStateToProps, { addOwner })(OwnerSignUp);
