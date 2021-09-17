import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import "../../Styles/SideBar.css";
import "../../Styles/Card.css";
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
    const { restaurant } = this.props;

    return (
      <>
        <Card
          style={{
            objectFit: "fit",
            width: "22rem",
            height: "12.5rem",
            paddingLeft: "0px",
          }}>
          <Card.Img
            style={{
              objectFit: "cover",
              width: "auto",
            }}
            src={restaurant.imageurl}
          />
          <FaRegHeart
            className='fav-icon'
            size='22px'
            style={{ color: "white" }}
            //  onClick={this.handleClose}
          />
          <div className='resta-info'>
            <h2 className='restar-name'>
              {restaurant.title}
              <span>({restaurant.address})</span>
            </h2>
            <h4 className='resta-descr'>{restaurant.description}</h4>
          </div>
        </Card>
      </>
    );
  }
}
RestoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  restaurant: PropTypes.object.isRequired,
};

export default RestoCard;
