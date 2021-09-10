import React from "react";

import PropTypes from "prop-types";
import "../Styles/SideBar.css";
import { Card, Modal, Button, Col, Row } from "react-bootstrap";

function MenuCard({ src, title, description, price }) {
  return (
    <div className='menucard'>
      {/* <div className='menucard-details'>
        <div>
          <h5>{title}</h5>
        </div>
        <div>
          <h6>{description}</h6>
        </div>
        <div>
          <h6>{price}</h6>
        </div>
      </div>
      <div className='menucard-img'>
        <img src={src} alt='' />
      </div> */}
      <Card style={{ width: "18rem", display: "flex", flex: 1 }}>
        <Card.Img variant='right' src={src} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{title}</Card.Text>
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}
MenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default MenuCard;
