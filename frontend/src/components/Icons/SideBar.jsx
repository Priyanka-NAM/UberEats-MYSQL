import React from "react";
import { Button } from "@material-ui/core";

import "../Styles/SideBar.css";

const SideBar = () => (
  <div className='side-bar'>
    <div className='barcontents'>
      <h4>Dietery</h4>
      <div className='allbuttons'>
        <Button variant='contained'>Vegan</Button>
        <Button variant='contained'>Vegetarian</Button>
        <Button variant='contained'>Non-Vegetarian</Button>
      </div>
    </div>
  </div>
);

export default SideBar;
