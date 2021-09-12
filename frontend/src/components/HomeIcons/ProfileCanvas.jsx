import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Row, Container, Col } from "react-bootstrap";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import { FaUserCircle, FaHeart } from "react-icons/fa";

import "../Styles/Header.css";

class ProfileCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <OffCanvas
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
                  style={{ color: "#eeeeee", paddingleft: "0" }}
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
      </OffCanvas>
    );
  }
}

export default ProfileCanvas;
