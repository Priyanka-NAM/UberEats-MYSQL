/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { FaRegHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { BiX } from "react-icons/bi";
import Header from "../../Home/HomeIcons/Header";
import { customerFav } from "../../../Actions/CustomerActions";

import RestoCard from "../../Home/HomeIcons/RestoCard";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.customerFav();
  }

  handleRestaPageRedirect = (restaurant) => {
    console.log("handleRestaPageRedirect: ", restaurant);
  };

  render() {
    const { fav } = this.props;
    // const { allRestaurents } = this.state;
    console.log("fav", fav);
    let favorites = null;
    // const favoriteRestos = fav.filter(
    //   (eachFavResta) => eachFavResta.isFavorite === ""
    // );
    if (fav) {
      favorites = fav.map((favrestaurant, index) => (
        <RestoCard
          key={index}
          RestaRedirect={this.handleRestaPageRedirect}
          restaurant={favrestaurant}
          isLiked
        />
      ));
    }

    return (
      <div style={{ marginLeft: "1%", overflow: "hidden" }}>
        <Header />
        <Container style={{ marginLeft: "1%" }} fluid>
          <Row>
            <h1>Favorites</h1>
          </Row>
          <Row>{favorites}</Row>
        </Container>
      </div>
    );
  }
}

Favorites.propTypes = {
  customerFav: PropTypes.func.isRequired,
  fav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  fav: state.customer.fav.favRestaurants,
});

export default connect(mapStateToProps, { customerFav })(Favorites);
