import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Container, Navbar, Nav } from "react-bootstrap";

class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar variant='light' style={{ borderBottom: "1px solid black" }}>
        <Container
          fluid='true'
          style={{ paddingLeft: "40px", fontSize: "20px" }}>
          <Nav className='me-auto'>
            <Nav.Link href='/owner/menuupdate' style={{ paddingLeft: "40px" }}>
              Menus
            </Nav.Link>
            <Nav.Link
              href='/owner/updatecategories'
              style={{ paddingLeft: "40px" }}
              active>
              Categories
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default MenuNav;
