import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import "../Styles/SideBar.css";
import "../Styles/Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

class RestoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orderquantity: 1,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      Orderquantity: prevState.Orderquantity + 1,
    }));
  };

  handleAddToCart = () => {};

  render() {
    const { title, description, address, src } = this.props;
    return (
      <>
        <Card
          style={{
            objectFit: "fit",
            width: "20rem",
            height: "12.5rem",
            paddingLeft: "0px",
          }}>
          <Card.Img
            style={{
              objectFit: "cover",
              width: "auto",
            }}
            src={src}
          />
          <FaRegHeart
            className='fav-icon'
            size='22px'
            style={{ color: "white" }}
            //  onClick={this.handleClose}
          />
          <div className='resta-info'>
            <h2 className='restar-name'>
              {title}
              <span>({address})</span>
            </h2>
            <h4 className='resta-descr'>{description}</h4>
          </div>
        </Card>
      </>
    );
  }
}
RestoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default RestoCard;
