/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import {
  MdHome,
  MdBorderColor,
  MdRestaurant,
  MdContactPhone,
} from "react-icons/md";
import PropTypes from "prop-types";

import { Button, Nav, Container, Col, Row, Navbar } from "react-bootstrap";
import UberELogo from "./HomeIcons/logo";

class OwnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { pageContent } = this.props;
    return (
      <>
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
                    style={{ height: "55px", marginRight: "100px" }}
                    src={UberELogo.UberEWLogo.src}
                    alt={UberELogo.UberEWLogo.alt}
                  />
                </Nav.Item>
                <Nav.Item
                  style={{
                    marginLeft: "350%",
                    marginRight: "0",
                    paddingRight: "10px",
                  }}>
                  <Button active='true' variant='dark' type='submit'>
                    Sign Out
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Brand>
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
                  <Nav.Link href='/owner/home' style={{ color: "black" }}>
                    <MdHome style={{ marginRight: "18px" }} />
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link
                    href='/owner/profile'
                    eventKey='link-1'
                    style={{ color: "black" }}>
                    <MdContactPhone style={{ marginRight: "18px" }} />
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link
                    href='/owner/menuupdate'
                    eventKey='link-1'
                    style={{ color: "black" }}>
                    <MdRestaurant style={{ marginRight: "18px" }} />
                    Menu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link
                    href='/owner/orders'
                    eventKey='link-2'
                    style={{ color: "black" }}>
                    <MdBorderColor style={{ marginRight: "18px" }} />
                    Orders
                  </Nav.Link>
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
};

export default OwnerHome;
