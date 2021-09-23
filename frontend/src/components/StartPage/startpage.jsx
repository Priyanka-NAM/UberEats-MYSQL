/* eslint-disable import/no-unresolved */
import React, { Component } from "react";
import { Nav, Button, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import UberELogo from "../Home/HomeIcons/logo";
import mainstyle from "../Home/HomeIcons/HeaderStyle";
import StartPageCanvas from "./StartPageCanvas";
import "../Styles/Header.css";

class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    
  }

  componentDidMount() {
    document.body.style.backgroundSize = "2200px 1200px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundImage = `url("/images/Startpage_bg.PNG")`;
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = ``;
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
      <div className='imgStyle'>
        <Row fluid='true'>
          <Nav style={mainstyle.headerRow}>
            <Nav.Item style={{ paddingLeft: "50px" }}>
              <FaBars
                xs='6'
                size='22px'
                color='black'
                onClick={this.handleShow}
              />
            </Nav.Item>
            <Nav.Item style={{ paddingLeft: "20px" }}>
              <img
                style={mainstyle.paddingLeft}
                src={UberELogo.UberEBLogo.src}
                alt={UberELogo.UberEBLogo.alt}
              />
            </Nav.Item>
            <Nav.Item style={{ paddingLeft: "70%" }}>
              <Link to='/signin'>
                <Button
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    width: "150%",
                    backgroundColor: "white",
                    height: "60px",
                    borderRadius: "40px",
                    fontFamily: "UberMoveText, sans-serif",
                  }}
                  variant='light'>
                  Sign in
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Row>
        <StartPageCanvas handleClose={this.handleClose} showModal={showModal} />
      </div>
    );
  }
}

export default StartPage;
