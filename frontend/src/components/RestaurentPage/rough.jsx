/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/jsx-curly-brace-presence */

import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

export default class App extends Component {
  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    });
  }

  handleClick = () => {
    // toggles the menu opened state
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  };

  render() {
    return (
      <OffCanvas
        style={{ backgroundColor: "black" }}
        transitionDuration={300}
        effect={"parallax"}
        // eslint-disable-next-line react/destructuring-assignment
        isMenuOpened={this.state.isMenuOpened}
        position={"left"}>
        <OffCanvasBody style={{ fontSize: "30px" }}>
          <p>This is the main body container.</p>
          <p>
            <a href='#' onClick={this.handleClick.bind(this)}>
              Click here
            </a>{" "}
            to toggle the menu.
          </p>
        </OffCanvasBody>
        <OffCanvasMenu style={{ backgroundColor: "black", height: "100%" }}>
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>
              <a href='#' onClick={this.handleClick.bind(this)}>
                Toggle Menu
              </a>
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}
