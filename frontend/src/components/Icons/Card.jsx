import React from "react";

import "../Styles/Card.css";
import PropTypes from "prop-types";

function Card({ src, title, description, address }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='resta-info'>
        <h6>
          {title} <span>({address})</span>
        </h6>
        <h6>{description}</h6>
      </div>
    </div>
  );
}
Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
export default Card;
