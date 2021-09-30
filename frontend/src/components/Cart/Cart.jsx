/* eslint-disable react/forbid-prop-types */
import React from "react";
import { connect } from "react-redux";

import { Modal, Button, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartItemRow from "./CartItemRow";
import mainstyle from "../Home/HomeIcons/HeaderStyle";
import "../Styles/Header.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
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

  render() {
    const { showModal } = this.state;
    const { restaurantName, cartItems } = this.props;
    let cartRows = null;
    let emptyCart = null;
    let newCart = null;
    let totalCartValue = 0;
    let totalItems = 0;
    if (cartItems) {
      totalItems = cartItems.length;
      cartRows = cartItems.map((cartitem) => {
        totalCartValue += cartitem.price;
        return (
          <CartItemRow
            quantity={cartitem.quantity}
            dishtitle={cartitem.title}
            totaldishprice={cartitem.price}
          />
        );
      });
    }
    if (totalCartValue === 0) {
      emptyCart = (
        <div>
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
              <Row>
                <FaShoppingCart
                  size='100'
                  style={{ paddingRight: "3px", color: "grey" }}
                />
              </Row>
              <Row>
                <h6 style={{ fontFamily: "sans-serif", fontSize: "18px" }}>
                  Add items from a restaurant or store to start a new cart
                </h6>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      );
    } else {
      newCart = (
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
              {restaurantName}
            </Modal.Title>
            {cartRows}
          </Modal.Body>
          <Modal.Footer>
            <Link to={{ pathname: "/order/checkout", state: "" }}>
              <Button
                variant='dark'
                style={{
                  width: "100%",
                  height: "60px",
                  fontSize: "18px",
                  fontFamily: "UberMove, sans-serif",
                }}>
                Go to Checkout .
                <span style={{ paddingLeft: "15px" }}>${totalCartValue}</span>
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      );
    }

    return (
      <>
        <Button
          size='lg'
          style={mainstyle.cart}
          variant='light'
          onClick={this.handleShow}>
          <FaShoppingCart style={{ paddingRight: "3px" }} />
          Cart.{totalItems}
        </Button>
        {emptyCart}
        {newCart}
      </>
    );
  }
}

Cart.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  cartItems: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  restaurantName: state.cartDetails.restaurantName,
  cartItems: state.cartDetails.items,
});

export default connect(mapStateToProps, null)(Cart);
