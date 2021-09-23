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
    const { custosignup, isRegistered, errMsg } = this.props;
    // const { status, userid } = custosignup;
    // let redirectpage = null;
    // let errorMessage = "";
    // if (!custosignup && userid) {
    //   localStorage.setItem("userid", userid);
    //   redirectpage = <Redirect to='/home' />;
    // } else if (status === "Authentication Failed") {
    //   errorMessage = "user already already exists";
    // }
    let errorMessage = "";
    if (isRegistered || localStorage.getItem("user_id")) {
      return <Redirect to='/home' />;
    }
    if (errMsg) {
      errorMessage = errMsg;
      console.log(errorMessage);
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
  isRegistered: PropTypes.bool.isRequired,
  custosignup: PropTypes.object.isRequired,
  errMsg: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  isRegistered: state.customersignup.isRegistered,
  custosignup: state.customersignup.user,
  errMsg: state.customersignup.errMsg,
});
export default connect(mapStateToProps, { addCustomer })(CustomerSignUp);
