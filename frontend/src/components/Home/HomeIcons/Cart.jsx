import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import PropTypes from "prop-types";
import mainstyle from "./HeaderStyle";
import "../../Styles/Header.css";

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
    const { title, description, price, quantity } = this.props;

    return (
      <>
        <Button
          size='lg'
          style={mainstyle.cart}
          variant='light'
          onClick={this.handleShow}>
          <FaShoppingCart style={{ paddingRight: "3px" }} />
          Cart.{0}
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
              {title}
            </Modal.Title>
            <Row style={{ display: "flex" }}>
              <Row style={{ display: "flex", paddingBottom: "0px" }}>
                <Col>
                  <Button
                    variant='secondary'
                    style={{
                      fontSize: "18px",
                      fontFamily: "UberMove, sans-serif",
                      borderRadius: "30px",
                      width: "60px",

                      height: "35px",
                    }}>
                    {quantity}
                  </Button>
                </Col>
                <Col style={{ flex: "6" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      fontFamily: "UberMove, sans-serif",
                    }}>
                    {description}
                  </p>
                </Col>
                <Col align='right' style={{ flex: "1" }}>
                  <p
                    style={{
                      fontSize: "18px",
                      fontFamily: "UberMove, sans-serif",
                    }}>
                    $20
                  </p>
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
              Go to Checkout .
              <span style={{ paddingLeft: "15px" }}>${price}</span>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

Cart.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};
export default Cart;
