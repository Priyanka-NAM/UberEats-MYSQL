import React from "react";

import "../Styles/Card.css";
import PropTypes from "prop-types";
import likeicon from "../Svg/likeicon.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({ src, title, description, address }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='fav-icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          className='bi bi-heart float-right'
          viewBox='0 0 16 16'>
          <path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
        </svg>
      </div>
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
