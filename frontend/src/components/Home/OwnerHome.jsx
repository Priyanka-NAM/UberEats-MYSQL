import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TimePicker from "react-times";

import "react-times/css/classic/default.css";
import Slider, { Range } from "rc-slider";
import {
  MdHome,
  MdBorderColor,
  MdContactPhone,
  MdRestaurant,
} from "react-icons/md";
import {
  Button,
  Form,
  Nav,
  Container,
  Col,
  Card,
  Row,
  Navbar,
} from "react-bootstrap";
import UberELogo from "./HomeIcons/logo";
import OwnerProfile from "../Profile/OwnerProfile";

class OwnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
                  <Nav.Link style={{ color: "black" }}>
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
                  <Nav.Link eventKey='link-1' style={{ color: "black" }}>
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
                  <Nav.Link eventKey='link-1' style={{ color: "black" }}>
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
                  <Nav.Link eventKey='link-2' style={{ color: "black" }}>
                    <MdBorderColor style={{ marginRight: "18px" }} />
                    Orders
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            {/* <OwnerProfile /> */}
            <Col>
              <Navbar variant='light'>
                <Container>
                  <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
                  <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>Features</Nav.Link>
                    <Nav.Link href='#pricing'>Pricing</Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default OwnerHome;
