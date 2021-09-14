import React from "react";

import {
  Nav,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
  Row,
  Container,
} from "react-bootstrap";

import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import Location from "./Location";
import UberELogo from "./logo";
import mainstyle from "./HeaderStyle";
import ProfileCanvas from "./ProfileCanvas";
import "../../Styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
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
      // let className='DPButton';
      // if(this.props.isActive)
      //   className
      <Container fluid='true' style={{ marginBottom: "2%" }}>
        <Row fluid='true'>
          <Nav style={mainstyle.headerRow}>
            <Nav.Item>
              <FaBars
                style={{ height: "50px" }}
                xs='6'
                size='24px'
                color='black'
                onClick={this.handleShow}
              />
            </Nav.Item>

            <Nav.Item style={mainstyle.paddingLeft}>
              <img
                style={{ paddingLeft: "15px", height: "50px" }}
                src={UberELogo.UberEBLogo.src}
                alt={UberELogo.UberEBLogo.alt}
              />
            </Nav.Item>
            <Nav.Item style={{ paddingLeft: "40px" }}>
              <ButtonGroup style={mainstyle.DeliveryPickupgroup}>
                <Button style={mainstyle.DPButton} variant='light'>
                  Delivery
                </Button>
                <Button style={mainstyle.DPButton} variant='light'>
                  Pickup
                </Button>
              </ButtonGroup>
            </Nav.Item>
            <Nav.Item style={{ paddingLeft: "20px", paddingRight: "40px" }}>
              {/* <Button style={mainstyle.location} variant='light'>
                Location
              </Button> */}
              <Location />
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <InputGroup style={{ width: "70rem", height: "3.5rem" }}>
                <Button variant='light'>
                  <FaSearch />
                </Button>
                <FormControl placeholder='What are you craving?' />
              </InputGroup>
            </Nav.Item>
            <Nav.Item align='center' style={mainstyle.paddingLeft}>
              {/* <Button style={mainstyle.cart} variant='light'>
                <FaShoppingCart style={{ paddingRight: "3px" }} />
                Cart .{0}
              </Button> */}
              <Cart
                title='Hello'
                description='Nasheville startbird'
                quantity='2'
              />
            </Nav.Item>
          </Nav>
        </Row>
        <ProfileCanvas handleClose={this.handleClose} showModal={showModal} />
      </Container>
    );
  }
}

export default Header;
