/* eslint-disable no-shadow */
import React, { Component } from "react";

import { BsFillPlusCircleFill, BsDashCircleFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import PropTypes from "prop-types";
import "../../Styles/SideBar.css";
import { Card, Modal, Button, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "../../../Actions/CartActions";

class MenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showAlert: false,
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
      showAlert: false,
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

  handleAlert = () => {
    const { Orderquantity } = this.state;
    const { title, price, addToCart, currentRestaurantName } = this.props;
    const cartDetails = {
      restaurantName: currentRestaurantName,
      itemDetails: {
        title: title,
        price: price,
        quantity: Orderquantity,
      },
    };
    addToCart(cartDetails);
    this.setState({
      showAlert: false,
    });
    this.handleClose();
  };

  handleAddToCart = () => {
    const { Orderquantity } = this.state;
    const { title, price, addToCart, currentRestaurantName, restaurantName } =
      this.props;
    if (currentRestaurantName !== restaurantName && restaurantName !== "") {
      this.setState({
        showAlert: true,
        showModal: false,
      });
      return;
    }
    const cartDetails = {
      restaurantName: currentRestaurantName,
      itemDetails: {
        title: title,
        price: price * Orderquantity,
        quantity: Orderquantity,
      },
    };
    addToCart(cartDetails);
    this.handleClose();
  };

  render() {
    const { showAlert, showModal, Orderquantity } = this.state;
    const {
      title,
      description,
      price,
      src,
      restaurantName,
      currentRestaurantName,
    } = this.props;
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
          style={{
            width: "100%",
            display: "flex",
            height: "80rem",
            alignItems: "center",
          }}
          centered>
          <Modal.Header>
            {" "}
            <BiX
              size='35px'
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
            <Modal.Title
              style={{
                color: "black",
                fontSize: "35px",
                fontFamily: "UberMove sans-serif",
              }}>
              {title}
            </Modal.Title>
            <p>{description}</p>
          </Modal.Body>
          <Modal.Footer>
            <BsDashCircleFill
              size='35px'
              style={{ color: "lightgrey" }}
              onClick={this.handleDecrement}
            />
            <p>{Orderquantity}</p>
            <BsFillPlusCircleFill
              size='35px'
              style={{ color: "lightgrey" }}
              onClick={this.handleIncrement}
            />
            <Button
              variant='dark'
              onClick={this.handleAddToCart}
              style={{
                width: "75%",
                height: "3.5rem",
                fontSize: "18px",
                fontFamily: "UberMove sans-serif",
              }}>
              Add {Orderquantity} to order
              <span style={{ paddingLeft: "15px" }}>
                ${Orderquantity * price}
              </span>
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showAlert} variant='light'>
          <BiX
            size='35px'
            style={{ color: "black", marginLeft: "20px", marginTop: "20px" }}
            onClick={this.handleClose}
          />
          <Modal.Body style={{ margin: "2%", marginBottom: "0%" }}>
            <h1
              style={{
                fontFamily: "UberMove sans-serif",
                fontWeight: "500",
              }}>
              Create new order?
            </h1>
            <p
              style={{
                paddingTop: "14px",
                paddingBottom: "16px",
                fontSize: "20px",
                fontFamily: "UberMove sans-serif",
              }}>
              Your order contains items from {restaurantName}.Create a new order
              to add items from {currentRestaurantName}.
            </p>
            <div>
              <Button
                onClick={this.handleAlert}
                style={{
                  fontSize: "22px",
                  width: "100%",
                  height: "3.5rem",
                  fontFamily: "UberMove sans-serif",
                  fontWeight: "500",
                }}
                variant='dark'>
                New Order
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
MenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currentRestaurantName: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  restaurantName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  restaurantName: state.cartDetails.restaurantName,
});
export default connect(mapStateToProps, { addToCart })(MenuCard);
