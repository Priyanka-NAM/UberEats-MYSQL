// // import React, { Component } from "react";
// // import { connect } from "react-redux";
// // import { Link } from "react-router-dom";
// // import { Redirect } from "react-router";
// // import PropTypes from "prop-types";
// // import axios from "axios";
// // import { Container, Col, Row, Form, Button } from "react-bootstrap";
// // import { userSignin } from "../../Actions/signinAction";
// // import "bootstrap/dist/css/bootstrap.css";
// // // import SignInUp from "../Styles/SignInUp";
// // import UberELogo from "../Home/HomeIcons/logo";

// // class SignIn extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       signinStatus: "",
// //     };
// //   }

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //     const { email, password } = this.state;

// //     // if (user && user_id) {
// //     //   localStorage.setItem("email_id", this.props.user.email_id);
// //     //   localStorage.setItem("is_owner", this.props.user.is_owner);
// //     //   localStorage.setItem("user_id", this.props.user.user_id);
// //     //   localStorage.setItem("name", this.props.user.name);

// //     // } else if (this.props.user === "NO_USER" && this.state.loginFlag) {
// //     //   message = "No user with this email id";
// //     // } else if (
// //     //   this.props.user === "INCORRECT_PASSWORD" &&
// //     //   this.state.loginFlag
// //     // ) {
// //     //   message = "Incorrect Password";
// //     // }

// //     const details = {
// //       email,
// //       password,
// //     };
// //     console.log(details);
// //     userSignin(details);
// //     // axios.defaults.withCredentials = true;
// //     // axios
// //     //   .post(`http://localhost:5000/ubereats/signin`, details)
// //     //   .then((response) => {
// //     //     console.log(response.data);
// //     //     this.setState({
// //     //       signinStatus: response.data.status,
// //     //     });
// //     //   })
// //     //   .catch(() => {
// //     //     console.log("Axios Post Error");
// //     //     this.setState({
// //     //       signinStatus: "Server not reachable",
// //     //     });
// //     //   });
// //   };

// //   handleChange = (e) => {
// //     console.log(this.state);

// //     this.setState({
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   render() {
// //     const { signinStatus } = this.state;

// //     // const { user, user_id } = this.props;
// //     let redirectpage = null;
// //     // let error = "";
// //     if (signinStatus) {
// //       redirectpage = <Redirect to='/home' />;
// //     }

// //     return (
// //       <Container>
// //         {redirectpage}
// //         <Row align='center' style={{ marginTop: "100px" }}>
// //           <img
// //             style={{ paddingLeft: "0" }}
// //             src={UberELogo.UberEBLogo.src}
// //             alt={UberELogo.UberEBLogo.alt}
// //           />
// //         </Row>
// //         <Row>
// //           <Form onSubmit={this.handleSubmit}>
// //             <Row
// //               style={{
// //                 marginTop: "60px",
// //                 paddingLeft: "28%",
// //               }}>
// //               <h2
// //                 style={{
// //                   fontSize: "30px",
// //                   fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                   fontWeight: "400",
// //                 }}>
// //                 Welcome back
// //               </h2>
// //               <h6
// //                 style={{
// //                   marginTop: "30px",
// //                   marginBottom: "10px",
// //                   fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                   fontSize: "16px",
// //                   letterSpacing: ".02em",
// //                   fontWeight: "400",
// //                   color: "#262626",
// //                 }}>
// //                 Sign in with your email address or mobile number.
// //               </h6>
// //               <div
// //                 style={{
// //                   width: "60%",
// //                   height: "100%",
// //                   fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                 }}>
// //                 <Form.Control
// //                   size='lg'
// //                   type='email'
// //                   name='email'
// //                   placeholder='Enter email'
// //                   onChange={this.handleChange}
// //                 />
// //                 <Form.Control
// //                   style={{
// //                     marginTop: "20px",
// //                   }}
// //                   size='lg'
// //                   type='password'
// //                   name='password'
// //                   placeholder='Enter password'
// //                   onChange={this.handleChange}
// //                 />
// //                 {signinStatus && (
// //                   <p
// //                     style={{
// //                       width: "100%",
// //                       height: "40%",
// //                       marginTop: "15px",
// //                       fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                     }}
// //                     className='alert alert-danger'>
// //                     {signinStatus}
// //                   </p>
// //                 )}
// //                 <Button
// //                   size='lg'
// //                   style={{
// //                     width: "100%",
// //                     height: "60%",
// //                     marginTop: "25px",
// //                     fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                   }}
// //                   variant='dark'
// //                   type='submit'>
// //                   Next
// //                 </Button>
// //               </div>
// //               <Row
// //                 style={{
// //                   width: "60%",
// //                   marginTop: "20px",
// //                   fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
// //                   fontSize: "16px",
// //                 }}>
// //                 <Col
// //                   align='right'
// //                   style={{
// //                     paddingRight: "0px",
// //                   }}>
// //                   <Form.Label>New to Uber?</Form.Label>
// //                 </Col>
// //                 <Col>
// //                   <Link
// //                     style={{
// //                       color: "green",
// //                     }}
// //                     to='/signup'>
// //                     Create an account
// //                   </Link>
// //                 </Col>
// //               </Row>
// //             </Row>
// //           </Form>
// //         </Row>
// //       </Container>
// //     );
// //   }
// // }

// // SignIn.propTypes = {
// //   userSignin: PropTypes.func.isRequired,
// // };
// // const mapStateToProps = (state) => ({
// //   signinuser: state.signin.user,
// // });
// // export default connect(mapStateToProps, { userSignin })(SignIn);
// {
// //   /* <RestoCard
// //               src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
// //               title='Apna Bazar'
// //               address='246 Drivers dr'
// //               description='Unique ac, led by a world of hosts.'
// //             />
// //             <RestoCard
// //               src='https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg 240w,https://d1ralsognjng37.cloudfront.net/467edb0b-cfe7-47dd-a9ac-ef851ffbbea8.jpeg 550w,https://d1ralsognjng37.cloudfront.net/0139e103-ee35-4d32-8b2f-e67cc34e1c15.jpeg 640w,https://d1ralsognjng37.cloudfront.net/247e7502-e549-4b08-b235-ce8b542e914d.jpeg 750w,https://d1ralsognjng37.cloudfront.net/5176bfe7-d608-4d6b-ad58-ba34d58bf573.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/30c3d0ca-f45c-450c-9050-2fdbdaa38b49.jpeg 2880w'
// //               title='Online Experiences'
// //               address='246 Drivers dr'
// //               description='Unique acr, led by a world of hosts.'
// //             />
// //             <RestoCard
// //               src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
// //               title='Apna Bazar'
// //               address='246 Drivers dr'
// //               description='Unique ac, led by a world of hosts.'
// //             />
// //             <RestoCard
// //               src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
// //               title='Online Experiences'
// //               address='246 Drivers dr'
// //               description='Unique act world of hosts.'
// //             /> */
// // }

// // {/* <RestoCard
// //               src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kZmNmNDY4Mi0xZDM0LTQ5MjUtOGNjYS00MmY0NDVlMTM3NjkuanBlZw=='
// //               title='Online Experiences'
// //               address='246 Drivers dr'
// //               description='Unique actied by a world of hosts.'
// //             />
// //             <RestoCard
// //               src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
// //               title='Online Experiences'
// //               address='246 Drivers dr'
// //               description='Unique act world of hosts.'
// //             />
// //             <RestoCard
// //               src='https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg 240w,https://d1ralsognjng37.cloudfront.net/467edb0b-cfe7-47dd-a9ac-ef851ffbbea8.jpeg 550w,https://d1ralsognjng37.cloudfront.net/0139e103-ee35-4d32-8b2f-e67cc34e1c15.jpeg 640w,https://d1ralsognjng37.cloudfront.net/247e7502-e549-4b08-b235-ce8b542e914d.jpeg 750w,https://d1ralsognjng37.cloudfront.net/5176bfe7-d608-4d6b-ad58-ba34d58bf573.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/30c3d0ca-f45c-450c-9050-2fdbdaa38b49.jpeg 2880w'
// //               title='Online Experiences'
// //               address='246 Drivers dr'
// //               description='Unique acr, led by a world of hosts.'
// //             /> */}
