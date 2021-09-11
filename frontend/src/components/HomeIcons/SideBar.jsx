import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { RadioGroup, Radio } from "react-radio-group";
import "../Styles/SideBar.css";

const SidebarButton = {
  borderRadius: 20,
  backgroundColor: "#eeeeee",
  color: "black",
  fontSize: "14px",
  textTransform: "none",
  height: "40px",
};

const SideBar = () => (
  <Container fluid>
    <Col fluid>
      <h4 className='sidebar-heading'>Sort</h4>
      <Row align='left'>
        <RadioGroup name='fruit'>
          <Radio value='Picked for you' className='sidebarText' />
          Picked for you
        </RadioGroup>
      </Row>
    </Col>
    <Col>
      <h4 className='sidebar-heading'>Dietary</h4>
      <div className='allbuttons'>
        <Button variant='light' style={SidebarButton}>
          Vegan
        </Button>

        <Button variant='light' style={SidebarButton}>
          Vegetarian
        </Button>

        <Button variant='light' style={SidebarButton}>
          Non-Vegetarian
        </Button>
      </div>
    </Col>
    <br />
  </Container>
);

export default SideBar;
