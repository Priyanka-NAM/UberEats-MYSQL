import React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/SideBar.css";

function RestaBanner({
  src,
  restaTitle,
  restaAddress,
  otherDetails,
  restauDescri,
}) {
  return (
    <div className='resta-baneer'>
      <div className='image-banner'>
        <img src={src} alt='' />
      </div>
      <div className='text-wrapper'>
        <div className='like-icon'>
          <i className='fa fa-heart-o fa-lg' aria-hidden='true' />
        </div>
        <h1>
          {restaTitle} {restaAddress}
        </h1>
        <div className='details'>
          <h6>{otherDetails}</h6>
        </div>
      </div>
      <div className='resta-details'>
        <h6>{restauDescri}</h6>
      </div>
    </div>
  );
}

RestaBanner.propTypes = {
  src: PropTypes.string.isRequired,
  restaTitle: PropTypes.string.isRequired,
  restaAddress: PropTypes.string.isRequired,
  otherDetails: PropTypes.string.isRequired,
  restauDescri: PropTypes.string.isRequired,
};
export default RestaBanner;
