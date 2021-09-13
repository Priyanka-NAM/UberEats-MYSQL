import React, { Component } from "react";

import { FaMinusCircle, FaPlusCircle, FaRegWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";
import "../../Styles/SideBar.css";
import { Card, Modal, Button, Col, Row } from "react-bootstrap";

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      Orderquantity: 1,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  handleIncrement = () => {
    this.setState((prevState) => ({
      Orderquantity: prevState.Orderquantity + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      Orderquantity: prevState.Orderquantity - 1,
    }));
  };

  handleAddToCart = () => {};

  render() {
    const { showModal, Orderquantity } = this.state;
    const { title, description, price, src } = this.props;
    return (
      <>
        <Card
          bg='white'
          style={{ width: "35rem", margin: "1%" }}
          onClick={this.handleShow}>
          <Row>
            <Col align='left'>
              <Card.Body style={{ width: "auto" }}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <p>{description}</p>
                </Card.Text>
                <Card.Text>${price}</Card.Text>
              </Card.Body>
            </Col>
            <Col style={{ width: "2%", objectFit: "contain" }}>
              <Card.Img
                style={{ width: "1%", objectFit: "contain" }}
                src={src}
              />
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
              style={{ color: "black" }}
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
              size='35px'
              style={{ color: "grey" }}
              onClick={this.handleDecrement}
            />
            <p>{Orderquantity}</p>
            <FaPlusCircle
              size='35px'
              style={{ color: "grey" }}
              onClick={this.handleIncrement}
            />
            <Button
              variant='dark'
              onClick={this.handleAddToCart}
              style={{ width: "75%" }}>
              Add {Orderquantity} to order{" "}
              <span style={{ paddingLeft: "15px" }}>
                ${Orderquantity * price}
              </span>
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
};

export default MenuCard;
