/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Row, Container, Col } from "react-bootstrap";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import { FaUserCircle, FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";

import "../../Styles/Header.css";

class ProfileCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  render() {
    const { showModal } = this.props;

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
              <Col fluid='true' xs='1'>
                <FaUserCircle
                  size='50px'
                  style={{ color: "#eeeeee", paddingleft: "0" }}
                />
              </Col>
              <Col style={{ width: "10px", marginLeft: "35px" }}>
                <p
                  style={{
                    marginBottom: "0px",
                    fontWeight: "500",
                    fontFamily: "UberMoveText, sans-serif",
                    fontSize: "16px",
                  }}>
                  User Name
                </p>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#05944F",
                    fontWeight: "500",
                    fontFamily: "UberMoveText, sans-serif",
                    fontSize: "14px",
                  }}
                  to='/'>
                  view account
                </Link>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col fluid='true' xs='1'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  viewBox='0 0 24 24'
                  width='20px'
                  height='20px'
                  paddingleft='0'
                  className='c6 c7 c8 c9'>
                  <path d='M4.5 2.833v18.333l4.583-2.5 2.917 2.5 2.917-2.5 4.583 2.5V2.833h-15zM16.167 9.5H7.833V7h8.334v2.5z' />
                </svg>
              </Col>
              <Col style={{ width: "10px", marginLeft: "18px" }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to='/'>
                  Orders
                </Link>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col fluid='true' xs='1'>
                <FaHeart />
              </Col>
              <Col
                style={{
                  width: "10px",
                  marginLeft: "18px",
                }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to='/'>
                  Favorites
                </Link>
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
ProfileCanvas.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default ProfileCanvas;
