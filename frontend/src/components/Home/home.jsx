import React, { Component } from "react";

import Header from "../Icons/header";
import RestaurantCarousel from "../Icons/restaurarntcarousel";
import SideBar from "../Icons/SideBar";
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
        <div className='home-body'>
          <SideBar />
          <RestaurantCarousel />
        </div>
      </div>
    );
  }
}

export default HomePage;
