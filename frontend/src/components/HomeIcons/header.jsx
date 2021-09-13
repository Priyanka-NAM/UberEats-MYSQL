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
import UberELogo from "./logo";
import mainstyle from "./HeaderStyle";
import ProfileCanvas from "./ProfileCanvas";
import "../Styles/Header.css";

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
                xs='6'
                size='22px'
                color='black'
                onClick={this.handleShow}
              />
            </Nav.Item>

            <Nav.Item style={mainstyle.paddingLeft}>
              <img
                style={mainstyle.paddingLeft}
                src={UberELogo.UberEBLogo.src}
                alt={UberELogo.UberEBLogo.alt}
              />
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <ButtonGroup style={mainstyle.DeliveryPickupgroup}>
                <Button style={mainstyle.DPButton} variant='light'>
                  Delivery
                </Button>
                <Button style={mainstyle.DPButton} variant='light'>
                  Pickup
                </Button>
              </ButtonGroup>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <Button style={mainstyle.location} variant='light'>
                Location
              </Button>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <InputGroup style={{ width: "70rem", height: "3rem" }}>
                <Button variant='light'>
                  <FaSearch />
                </Button>
                <FormControl placeholder='What are you Craving for?' />
              </InputGroup>
            </Nav.Item>
            <Nav.Item style={mainstyle.paddingLeft}>
              <Button style={mainstyle.cart} variant='light'>
                <FaShoppingCart style={{ paddingRight: "3px" }} />
                Cart .{0}
              </Button>
            </Nav.Item>
          </Nav>
        </Row>
        <ProfileCanvas handleClose={this.handleClose} showModal={showModal} />
      </Container>
    );
  }
}

export default Header;
