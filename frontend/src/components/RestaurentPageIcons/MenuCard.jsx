import React, { Component } from "react";

import { FaMinusCircle, FaPlusCircle, FaRegWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";
import "../Styles/SideBar.css";
import { Card, Modal, Button, Col, Row } from "react-bootstrap";

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleClose = (e) => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { showModal } = this.state;
    const { title, description, price, src, quantity } = this.props;
    return (
      <>
        <Card
          bg='white'
          style={{ width: "35rem", margin: "1%" }}
          onClick={this.handleShow}>
          <Row>
            <Col align='left' style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <p>{description}</p>
                </Card.Text>
                <Card.Text>${price}</Card.Text>
              </Card.Body>
            </Col>
            <Col style={{ width: "12rem", height: "9rem" }}>
              <Card.Img src={src} />
            </Col>
          </Row>
        </Card>
        <Modal
          show={showModal}
          onHide={this.handleClose}
          backdrop='static'
          keyboard={false}
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          centered>
          <Modal.Header>
            {" "}
            <FaRegWindowClose
              size='30px'
              style={{ color: "grey" }}
              onClick={this.handleClose}
            />
          </Modal.Header>
          <Modal.Body>
            <img
              src={src}
              alt=''
              style={{
                objectFit: "cover",
                position: "relative",
                width: "100%",
                height: "19rem",
              }}
            />
            <Modal.Title>{title}</Modal.Title>
            <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <FaMinusCircle
              size='30px'
              style={{ color: "grey" }}
              onClick={this.handleClose}
            />
            <p>12</p>
            <FaPlusCircle
              size='30px'
              style={{ color: "grey" }}
              onClick={this.handleClose}
            />
            <Button
              variant='primary'
              onClick={this.handleClose}
              style={{ width: "75%" }}>
              Add {quantity} to order ${price}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
MenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default MenuCard;
