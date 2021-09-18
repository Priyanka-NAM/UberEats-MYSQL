/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/RestaCarousel.css";

class RestaurentCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { nationalbrands, favorites, popularnear } = this.props;
    console.log(nationalbrands);
    return (
      <Container fluid='true'>
        <Container fluid='true' style={{ objectFit: "cover" }}>
          <h2>Favourites</h2>
          <Carousel data-interval='false'>
            <Carousel.Item>
              <Row xxs='auto' fluid='true'>
                {favorites}
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
        <Container fluid='true' style={{ objectFit: "cover" }}>
          <h2>National Brands</h2>
          <Row xxs='auto' fluid='true'>
            {nationalbrands}
          </Row>
        </Container>
        <Container fluid='true' style={{ objectFit: "cover" }}>
          <h2>Popular Near you</h2>
          <Row xxs='auto' fluid='true'>
            {popularnear}
          </Row>
        </Container>
      </Container>
    );
  }
}
RestaurentCarousel.propTypes = {
  nationalbrands: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  popularnear: PropTypes.array.isRequired,
};
export default RestaurentCarousel;
