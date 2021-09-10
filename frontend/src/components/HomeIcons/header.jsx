/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import UberELogo from "./logo";

const Cartbutton = {
  backgroundColor: "black",
  color: "white",
  fontSize: "14px",
  textTransform: "none",
  borderRadius: "30px",
  height: "40px",
};

const Header = () => (
  <div className='header'>
    <div className='header-lefttab'>
      <MenuIcon />
      <UberELogo className='header-icon' />
      <div className='button-box'>
        <button type='button' className='toggle-btn '>
          Delivery
        </button>
        <button type='button' className='toggle-btn'>
          Pickup
        </button>
      </div>
      <div className='button-box'>
        <button type='button' className='toggle-btn'>
          Address
        </button>
      </div>
    </div>
    <div className='header-center'>
      <SearchIcon />
      <input type='text' placeholder='What are you craving for?' />
    </div>
    <div className='header-righttab'>
      <button type='button' className='toggle-btn cart-btn'>
        Cart
      </button>
      {/* <Button
        startIcon={<ShoppingCartIcon style={{ backgroundColor: "white" }} />}
        className='toggle-btn cart-btn'
        style={Cartbutton}>
        Cart
      </Button> */}
      <button type='button' className='toggle-btn signin-btn'>
        Sign in
      </button>
    </div>
  </div>
);

export default Header;
