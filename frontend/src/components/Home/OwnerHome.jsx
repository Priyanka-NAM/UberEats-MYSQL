/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import {
  MdHome,
  MdBorderColor,
  MdRestaurant,
  MdContactPhone,
} from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Nav, Container, Col, Row, Navbar } from "react-bootstrap";
import UberELogo from "./HomeIcons/logo";
import { userSignOut } from "../../Actions/signinAction";

class OwnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignOut = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.userSignOut();
    console.log("inside handlesignout");
  };

  render() {
    const { pageContent } = this.props;
    return (
      <>
        <Navbar
          bg='dark'
          variant='dark'
          style={{
            width: "100%",
          }}>
          <Container
            fluid='true'
            style={{
              height: "60px",
              width: "100%",
              padding: "0px",
              margin: "0px",
            }}>
            <Row>
              <Col>
                <Navbar.Brand href='#home'>
                  <img
                    style={{
                      height: "55px",
                      marginLeft: "30px",
                    }}
                    src={UberELogo.UberEWLogo.src}
                    alt=''
                  />
                </Navbar.Brand>
              </Col>
              <Col xs={2} style={{ paddingTop: "10px" }}>
                <Link to='/' onClick={this.handleSignOut}>
                  <Button
                    active='true'
                    variant='dark'
                    type='submit'
                    style={{
                      width: "40%",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}>
                    Sign Out
                  </Button>{" "}
                </Link>
              </Col>
            </Row>
          </Container>
        </Navbar>

        <Container fluid='true'>
          <Row>
            <Col
              sm={1}
              md={2}
              style={{ padding: "0px", borderRight: "1px solid black" }}>
              <Nav
                style={{
                  height: "90.5vh",
                  overflow: "hidden",
                  paddingTop: "60px",
                  paddingLeft: "60px",
                }}
                align='left'
                className='col-md-12 d-none d-md-block sidebar'
                activeKey='/home'>
                <div className='sidebar-sticky' style={{ color: "black" }} />
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Link to='/owner/home' style={{ color: "black" }}>
                    <MdHome style={{ marginRight: "18px" }} />
                    Home
                  </Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Link
                    to='/owner/profile'
                    eventKey='link-1'
                    style={{ color: "black" }}>
                    <MdContactPhone style={{ marginRight: "18px" }} />
                    Profile
                  </Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Link
                    to='/owner/menuupdate'
                    eventKey='link-1'
                    style={{ color: "black" }}>
                    <MdRestaurant style={{ marginRight: "18px" }} />
                    Menu
                  </Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Link
                    to='/owner/orders'
                    eventKey='link-2'
                    style={{ color: "black" }}>
                    <MdBorderColor style={{ marginRight: "18px" }} />
                    Orders
                  </Link>
                </Nav.Item>
              </Nav>
            </Col>
            {pageContent}
          </Row>
        </Container>
      </>
    );
  }
}

OwnerHome.propTypes = {
  pageContent: PropTypes.object.isRequired,
  userSignOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedin: state.signin.isLoggedin,
});
export default connect(mapStateToProps, { userSignOut })(OwnerHome);
