/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { addCustomer } from "../../Actions/CustomerActions";
import SignInUpNAV from "./SignInUpNavBar";
import { isOwnerSignedIn, isUserSignedIn } from "../Service/authService";

class CustomerSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = this.state;
    const details = {
      name,
      email,
      password,
    };
    this.props.addCustomer(details);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { user } = this.props;
    // if (isOwnerSignedIn || isUserSignedIn) {
    //   return <Redirect to='/home' />;
    // }
    console.log("User from props ", user);
    let errorMessage = "";

    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (currentUser) {
      if (currentUser.is_owner === 0 && user.status === "USER_ADDED") {
        return <Redirect to='/customer/home' />;
      }
    } else if (user.status === "USER_EXISTS") {
      errorMessage = "Opps! Email id already exists";
    }

    return (
      <>
        <SignInUpNAV />
        <Container
          align='right'
          style={{
            marginTop: "20px",
            width: "80%",
            height: "74vh",
            backgroundImage: `url("https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/32159993_1629239100531581_6053773609350987776_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=9267fe&_nc_ohc=-ptS4LsPLfAAX9iFS41&_nc_ht=scontent-sjc3-1.xx&oh=b9db10453a7f6df28e19e6c0c4fb8ef6&oe=61644213")`,
          }}>
          <Container
            align='right'
            style={{
              backgroundColor: "#212529",
              margin: "0",
              width: "30%",
            }}>
            <Form
              align='center'
              style={{
                height: "74vh",
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
                  color: "white",
                }}>
                Sign Up to Order
              </h2>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='name'
                  name='name'
                  required
                  placeholder='Name'
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
                Next
              </Button>
              {errorMessage && (
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

CustomerSignUp.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.customer.user,
});
export default connect(mapStateToProps, { addCustomer })(CustomerSignUp);
