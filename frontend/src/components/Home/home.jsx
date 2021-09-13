import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";

import Header from "./HomeIcons/Header";
import RestaurantCarousel from "./HomeIcons/RestaurarntCarousel";
import SideBar from "./HomeIcons/SideBar";
import "../Styles/Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Container fluid className='home-container'>
          <Col md='3'>
            <SideBar />
          </Col>
          <RestaurantCarousel />
        </Container>
      </div>
    );
  }
}

export default HomePage;
