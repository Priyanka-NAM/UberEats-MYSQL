import React from "react";

import "../Styles/Card.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ src, title, description, address }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='resta-info'>
        <h2 className='restar-name'>
          {title}
          <span>({address})</span>
        </h2>
        <h4 className='resta-descr'>{description}</h4>
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
