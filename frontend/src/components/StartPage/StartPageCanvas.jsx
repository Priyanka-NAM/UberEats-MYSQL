/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Row, Container, Col } from "react-bootstrap";
import { OffCanvas, OffCanvasMenu } from "react-offcanvas";
import PropTypes from "prop-types";
import "../Styles/Header.css";

class StartPageCanvas extends Component {
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
            width: "15%",
            height: "100%",
            zIndex: "1000",
          }}>
          <Container align='left' style={{ marginLeft: "15px" }}>
            <Row style={{ marginTop: "40px" }}>
              <Button
                variant='dark'
                style={{
                  width: "80%",
                  height: "60px",
                  fontWeight: "500",
                  fontfamily: "UberMoveText, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.05em",
                }}
                onClick={this.handleClose}>
                Sign In
              </Button>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                  fontfamily: "UberMoveText, sans-serif",
                  fontSize: "18px",
                }}
                to='/'>
                Add your Restaurant
              </Link>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "500",
                  fontfamily: "UberMoveText, sans-serif",
                  fontSize: "18px",
                  letterSpacing: "0.05em",
                }}
                to='/'>
                Sign up
              </Link>
            </Row>
            <Row style={{ marginTop: "30px" }}>
              <Button
                variant='light'
                style={{
                  width: "80%",
                  height: "60px",
                  fontWeight: "500",
                  fontfamily: "UberMoveText, sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.05em",
                }}
                onClick={this.handleClose}>
                Signout
              </Button>
            </Row>
          </Container>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}
StartPageCanvas.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default StartPageCanvas;
