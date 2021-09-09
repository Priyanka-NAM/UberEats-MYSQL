import React from "react";
import { Button } from "@material-ui/core";

import "../Styles/SideBar.css";

const SidebarButton = {
  borderRadius: 20,
  backgroundColor: "#eeeeee",
  color: "black",
  padding: "14px 18px",
  fontSize: "14px",
  textTransform: "none",
  height: "40px",
};

const SideBar = () => (
  <div className='side-bar'>
    <div className='barcontents'>
      <h4>Dietery</h4>
      <div className='allbuttons'>
        <Button style={SidebarButton}>Vegan</Button>
        <Button style={SidebarButton}>Vegetarian</Button>
        <Button style={SidebarButton}>Non-Vegetarian</Button>
      </div>
    </div>
  </div>
);

export default SideBar;
