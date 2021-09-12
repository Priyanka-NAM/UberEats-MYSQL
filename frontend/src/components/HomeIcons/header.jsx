import React from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaHeart,
} from "react-icons/fa";
import UberELogo from "./logo";
import mainstyle from "./HeaderStyle";
import ProfileCanvas from "./ProfileCanvas";
import "../Styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleShow = this.handleShow.bind(this);
    // this.handleClose = this.handleClose.bind(this);
  }

  // handleShow = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // };

  render() {
    // const { showModal } = this.state;
    return (
      <Container fluid style={{ marginBottom: "2%" }}>
        <Row fluid>
          <Nav style={mainstyle.headerRow}>
            <Nav.Item>
              <FaBars
                xs='6'
                size='22px'
                color='black'
                onClick={this.handleShow}
              />
            </Nav.Item>

            <Nav.Item style={mainstyle.paddingLeft}>
              <UberELogo />
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <ButtonGroup style={mainstyle.DeliveryPickupgroup}>
                <Button style={mainstyle.DPButton} variant='light'>
                  Delivery
                </Button>
                <Button style={mainstyle.DPButton} variant='light'>
                  Pickup
                </Button>
              </ButtonGroup>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <Button style={mainstyle.location} variant='light'>
                Location
              </Button>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <InputGroup style={{ width: "60rem", height: "3rem" }}>
                <Button variant='light'>
                  <FaSearch />
                </Button>
                <FormControl placeholder='What are you Craving for?' />
              </InputGroup>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <Button style={mainstyle.cart} variant='light'>
                <FaShoppingCart style={{ paddingRight: "3px" }} />
                Cart .{0}
              </Button>
            </Nav.Item>
          </Nav>
        </Row>
        <ProfileCanvas />
        {/* <OffCanvas
          style={{ backgroundColor: "black" }}
          transitionDuration={1000}
          effect='parallax'
          isMenuOpened={showModal}
          position='left'>
          <OffCanvasMenu
            style={{
              backgroundColor: "white",
              height: "100%",
              zIndex: "1000",
            }}>
            <Container align='left' style={{ marginLeft: "15px" }}>
              <Row style={{ marginTop: "40px" }}>
                <Col fluid xs='1'>
                  <FaUserCircle
                    size='50px'
                    style={{ color: "#eeeeee", paddingLeft: "0" }}
                  />
                </Col>
                <Col style={{ width: "10px", marginLeft: "35px" }}>
                  <p style={{ marginBottom: "0px" }}>User Name</p>
                  <p>User Name</p>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col fluid xs='1'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    viewBox='0 0 24 24'
                    width='20px'
                    height='20px'
                    paddingLeft='0'
                    className='c6 c7 c8 c9'>
                    <path d='M4.5 2.833v18.333l4.583-2.5 2.917 2.5 2.917-2.5 4.583 2.5V2.833h-15zM16.167 9.5H7.833V7h8.334v2.5z' />
                  </svg>
                </Col>
                <Col style={{ width: "10px", marginLeft: "18px" }}>
                  <Link href='/'>Orders</Link>
                </Col>
              </Row>
              <Row style={{ marginTop: "20px" }}>
                <Col fluid xs='1'>
                  <FaHeart />
                </Col>
                <Col style={{ width: "10px", marginLeft: "18px" }}>
                  <Link href='/'>Favorites</Link>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Button variant='light' onClick={this.handleClose}>
                  Signout
                </Button>
              </Row>
            </Container>
          </OffCanvasMenu>
        </OffCanvas> */}
      </Container>
    );
  }
}

export default Header;
