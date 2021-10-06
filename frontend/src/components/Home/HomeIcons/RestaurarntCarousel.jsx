/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../Styles/RestaCarousel.css";

class RestaurentCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { nationalbrands, popularnear, remaining } = this.props;
    return (
      <div style={{ height: "100vh", overflowY: "scroll" }}>
        <Container fluid='true'>
          <h2>Restaurants Picked For you</h2>
          <Row xxs='auto' fluid='true'>
            {popularnear}
          </Row>
        </Container>
        <Container fluid='true'>
          <h2>All Other Restaurants</h2>
          <Row xxs='auto' fluid='true'>
            {remaining}
          </Row>
        </Container>
      </div>
    );
  }
}
RestaurentCarousel.propTypes = {
  nationalbrands: PropTypes.array.isRequired,
  popularnear: PropTypes.array.isRequired,
  remaining: PropTypes.array.isRequired,
  // searchresults: PropTypes.array.isRequired,
};
export default RestaurentCarousel;
