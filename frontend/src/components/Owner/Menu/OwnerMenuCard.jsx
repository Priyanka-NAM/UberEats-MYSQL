import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Image } from "react-bootstrap";
import { PropTypes } from "prop-types";

class OwnerMenuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    const { orderIndex, handleEdit } = this.props;
    handleEdit(orderIndex);
  };

  render() {
    const { orderIndex, dishName, dishDescription, dishPrice } = this.props;
    console.log("dishPrice ", dishPrice);
    return (
      // <div  role='presentation'>
      <div
        className='card mb-3'
        style={{ width: "28rem", margin: "1%" }}
        key={orderIndex}
        dishindex={orderIndex}
        onClick={this.clickHandler}
        onKeyPress={() => {}}
        role='presentation'>
        <div className='row no-gutters'>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>{dishName}</h5>

              <p className='card-text'>{dishDescription}</p>
              <p className='card-text'>${dishPrice}</p>
            </div>
          </div>
          <div className='col-md-4'>
            <MdDelete />
            <Image src='https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
OwnerMenuCard.propTypes = {
  dishDescription: PropTypes.string.isRequired,
  orderIndex: PropTypes.number.isRequired,
  dishName: PropTypes.string.isRequired,
  dishPrice: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
export default OwnerMenuCard;
