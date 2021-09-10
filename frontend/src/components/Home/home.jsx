import React, { Component } from "react";

import Header from "../HomeIcons/header";
import RestaurantCarousel from "../HomeIcons/restaurarntcarousel";
import SideBar from "../HomeIcons/SideBar";
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
