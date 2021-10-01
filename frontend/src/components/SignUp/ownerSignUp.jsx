/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { addOwner } from "../../Actions/OwnerActions";
import SignInUpNAV from "./SignInUpNavBar";
import { isOwnerSignedIn, isUserSignedIn } from "../Service/authService";

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
    const { owner } = this.props;
    if (isOwnerSignedIn || isUserSignedIn) {
      return <Redirect to='/home' />;
    }
    let errorMessage = "";
    const currentOwner = JSON.parse(localStorage.getItem("user"));
    if (currentOwner) {
      if (currentOwner.is_owner === 1 && owner.status === "RESTAURANT_ADDED") {
        return <Redirect to='/owner/home' />;
      }
    } else if (owner.status === "RESTAURANT_ALREADY_EXISTS") {
      errorMessage = "Opps! Email id already exists";
    }

    return (
      <>
        <SignInUpNAV />
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
                  required
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
                  required
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
                  pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$"
                  title='Please enter valid email id'
                  required
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
                  required
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
              {errorMessage && (
                // <p
                //   style={{
                //     width: "100%",
                //     marginTop: "15px",
                //     fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
                //   }}
                //   className='alert alert-danger'>
                <Alert variant='danger'>{errorMessage}</Alert>
                // </p>
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
  owner: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  owner: state.owner.ownerDetails,
});
export default connect(mapStateToProps, { addOwner })(OwnerSignUp);
