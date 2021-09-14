import React from "react";
import {
  Modal,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { BiX } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

import PropTypes from "prop-types";
import mainstyle from "./HeaderStyle";
import "../../Styles/Header.css";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, showChange: false };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
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

  handleOpen = () => {
    this.setState({
      showChange: true,
    });
  };

  handleSecClose = () => {
    this.setState({
      showChange: false,
    });
  };

  render() {
    const { showModal, showChange } = this.state;
    const { description } = this.props;

    return (
      <>
        <Button
          style={mainstyle.location}
          variant='light'
          onClick={this.handleShow}>
          Location
        </Button>
        <Modal
          show={showModal}
          onHide={this.handleClose}
          backdrop='static'
          keyboard={false}
          style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Modal.Header>
            <BiX
              size='35px'
              style={{ color: "black" }}
              onClick={this.handleClose}
            />
          </Modal.Header>
          <Modal.Body>
            <Modal.Title
              style={{
                fontSize: "36px",
                fontFamily: "UberMove, sans-serif",
                marginBottom: "20px",
              }}>
              Delivery Details
            </Modal.Title>
            <Row style={{ display: "flex" }}>
              <Row style={{ display: "flex", paddingBottom: "0px" }}>
                <Col style={{ flex: "6" }}>
                  <MdLocationOn size='35px' />
                </Col>
                {description}
                <Col>
                  <Button
                    variant='secondary'
                    onClick={this.handleOpen}
                    style={{
                      fontSize: "18px",
                      fontFamily: "UberMove, sans-serif",
                      borderRadius: "30px",
                      width: "85px",
                    }}>
                    Change
                  </Button>
                </Col>
              </Row>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='dark'
              onClick={this.handleAddToCart}
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                fontFamily: "UberMove, sans-serif",
              }}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showChange}
          onHide={this.handleSecClose}
          backdrop='static'
          keyboard={false}
          style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Modal.Header>
            <BiX
              size='35px'
              style={{ color: "black" }}
              onClick={this.handleSecClose}
            />
          </Modal.Header>
          <Modal.Body>
            <Modal.Title
              style={{
                fontSize: "36px",
                fontFamily: "UberMove, sans-serif",
                marginBottom: "20px",
              }}>
              Delivery Details
            </Modal.Title>
            <Row style={{ display: "flex" }}>
              <InputGroup className='mb-3'>
                <InputGroup.Text
                  id='basic-addon1'
                  style={{ background: "none" }}>
                  <MdLocationOn size='35px' />
                </InputGroup.Text>
                <FormControl
                  placeholder='Enter delivery address'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
              </InputGroup>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='dark'
              onClick={this.handleAddToCart}
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                fontFamily: "UberMove, sans-serif",
              }}>
              Done
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

Location.propTypes = {
  description: PropTypes.string.isRequired,
};
export default Location;
