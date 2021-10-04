/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import Header from "./HomeIcons/Header";
import RestaurantCarousel from "./HomeIcons/RestaurarntCarousel";
import RestoCard from "./HomeIcons/RestoCard";
import { isUserSignedIn } from "../Service/authService";
import { restaurants } from "../../Actions/RestaurantAction";
import SideBar from "./HomeIcons/SideBar";
import "../Styles/Home.css";

let nationalRestos = [];
let nearToYouRestos = [];

class CustomerHome extends Component {
  hasMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      allRestaurents: [],
      deliveryType: "Delivery",
      foodSelectionType: "allresto",
    };
  }

  componentDidMount() {
    this.props.restaurants();
    const { allRestaurants } = this.props;
    if (allRestaurants) {
      this.setState({
        allRestaurents: allRestaurants,
      });
    }
  }
  // componentDidMount() {
  //   this.hasMounted = true;

  //   axios.defaults.headers.common.authorization = getToken();
  //   axios
  //     .get(
  //       "http://localhost:5000/ubereats/customerrestaurant/restaurantsearch/_"
  //     )
  //     .then((response) => {
  //       // const cuisines = [];
  //       console.log("Get Response: ", JSON.stringify(response));
  //       if (response.data) {
  //         console.log("Get Response: ", JSON.stringify(response));
  //         if (response.data.status === "Sending Filtered Resaturants") {
  //           console.log(
  //             "Status Filtered Restaurants and setting no state: ",
  //             response.data.restaurentsinfo.restaurants
  //           );
  //           if (this.hasMounted) {
  //             this.setState({
  //               allRestaurents: [],
  //             });
  //           }
  //         } else {
  //           console.log(
  //             "Status All Restaurants and Setting State: ",
  //             response.data.restaurentsinfo.restaurants
  //           );
  //           if (this.hasMounted) {
  //             this.setState({
  //               allRestaurents: response.data.restaurentsinfo.restaurants,
  //             });
  //           }
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.response && error.response.data) {
  //         console.log("Restaurant Get Error", error.response.data);
  //       }
  //     });
  // }

  componentDidUpdate(prevProps) {
    const { allRestaurants } = this.props;
    if (allRestaurants !== prevProps.allRestaurants) {
      this.setState({
        allRestaurents: allRestaurants,
      });
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleRestaurantFiltering = (foodSelection, deliveryType) => {
    const { allRestaurents } = this.state;
    const { changedUserLocation } = this.props;

    if (allRestaurents instanceof Array) {
      console.log("Retrieved Restaurant info ", allRestaurents);
      let foodBasedFilteredSet = null;
      let deliveryBasedFilteredSet = null;
      console.log("All Restaurants Length: ", allRestaurents.length);
      console.log("All Restaurants: ", allRestaurents);
      // Food Type Filtering
      if (foodSelection === "allresto") {
        foodBasedFilteredSet = allRestaurents;
      } else {
        foodBasedFilteredSet = allRestaurents.filter((restaurant) => {
          if (foodSelection === "veg" && restaurant.is_vegetarian === 1) {
            return true;
          }
          if (
            foodSelection === "nonveg" &&
            restaurant.is_non_vegetarian === 1
          ) {
            return true;
          }
          if (foodSelection === "vegan" && restaurant.is_vegan === 1) {
            return true;
          }
          return false;
        });
      }
      console.log(
        "Food Based Filtering Restaurants Length: ",
        foodBasedFilteredSet.length
      );

      console.log("Food Based Filetered Set: ", foodBasedFilteredSet);
      if (foodBasedFilteredSet instanceof Array) {
        // Delivery Based filtering
        deliveryBasedFilteredSet = foodBasedFilteredSet.filter(
          (restaurant) =>
            restaurant.delivery_type === deliveryType ||
            restaurant.delivery_type === "Both"
        );

        // Location Based Filtering
        // console.log("Filtering Location: ", location);
        console.log(
          "Delivery Based Filtering Restaurants Length: ",
          deliveryBasedFilteredSet.length
        );

        console.log("Changed User Address Location: ", changedUserLocation);

        console.log("Delivery Based Filetered Set: ", deliveryBasedFilteredSet);

        // National Brands
        nationalRestos = deliveryBasedFilteredSet.filter(
          (restaurant) => restaurant.national_brand
        );

        // Restaurants Near me
        nearToYouRestos = deliveryBasedFilteredSet.filter(
          (restaurant) => restaurant.national_brand
        );
      }
    }
  };

  handleFoodSelect = (e) => {
    console.log("Food Selection Type: ", e);
    const { deliveryType } = this.state;
    const { userLocation } = this.props;
    this.setState({
      foodSelectionType: e,
    });
    this.handleRestaurantFiltering(e, deliveryType, userLocation);
  };

  handleRestoSearch = (e) => {
    console.log("Delivery Type : ", e);
    const { foodSelectionType } = this.state;
    const { userLocation } = this.props;
    this.setState({
      deliveryType: e,
    });
    this.handleRestaurantFiltering(foodSelectionType, e, userLocation);
  };

  handleSearchBarInput = (e) => {
    console.log("Search Input from Header: ", e);
  };

  handleRestaPageRedirect = (restaurant) => {
    console.log("handleRestaPageRedirect: ", restaurant);
  };

  render() {
    let redirectVar = null;
    if (!isUserSignedIn()) {
      redirectVar = <Redirect to='/home' />;
    }
    const { allRestaurents, foodSelectionType, deliveryType } = this.state;
    const { userLocation, userAddressDescription, allRestaurants } = this.props;
    console.log("allRestaurants allRestaurants allRestaurants", allRestaurants);
    let nationalbrands = null;
    let popularnear = null;

    if (allRestaurents) {
      this.handleRestaurantFiltering(
        foodSelectionType,
        deliveryType,
        userLocation
      );

      console.log("National Restos ", nationalRestos);

      console.log("Resto near you ", nearToYouRestos);

      nationalbrands = nationalRestos.map((restaurant) => {
        console.log("Inside National Brands, ", restaurant);
        return (
          <RestoCard
            key={restaurant.restaurant_id}
            RestaRedirect={this.handleRestaPageRedirect}
            restaurant={restaurant}
            isLiked={false}
          />
        );
      });
      popularnear = nearToYouRestos.map((restaurant) => {
        console.log("Inside Popular Near me, ", restaurant);
        return (
          <RestoCard
            key={restaurant.restaurant_id}
            RestaRedirect={this.handleRestaPageRedirect}
            restaurant={restaurant}
            isLiked={false}
          />
        );
      });
    }
    return (
      <React.Fragment>
        {redirectVar}
        <div style={{ marginLeft: "1%" }}>
          <Header
            restoSearch={this.handleRestoSearch}
            searchBarCallback={this.handleSearchBarInput}
            defaultUserLocationDescription={
              // eslint-disable-next-line no-unneeded-ternary
              userAddressDescription
                ? userAddressDescription
                : "Default Location"
            }
            hideDeliveryPickup
          />
          <Container fluid className='home-container'>
            <Col md='3'>
              <SideBar FoodTypeSelection={this.handleFoodSelect} />
            </Col>
            <RestaurantCarousel
              nationalbrands={nationalbrands}
              // favorites={favorites}
              popularnear={popularnear}
            />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

CustomerHome.propTypes = {
  userAddressDescription: PropTypes.string.isRequired,
  userLocation: PropTypes.object.isRequired,
  changedUserLocation: PropTypes.object.isRequired,
  restaurants: PropTypes.func.isRequired,
  allRestaurants: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  userAddressDescription: state.signin.address.addressDescription,
  userLocation: state.signin.address,
  changedUserLocation: state.currentLocation,
  allRestaurants: state.restaurants.allRestaurants,
});

export default connect(mapStateToProps, { restaurants })(CustomerHome);
