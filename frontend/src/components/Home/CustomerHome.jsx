/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
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
// import { searchRestaurants } from "../../Actions/RestaurantAction";
import { restaurants, searchRestaurants } from "../../Actions/RestaurantAction";

import SideBar from "./HomeIcons/SideBar";
import "../Styles/Home.css";

let nationalRestos = [];
let nearToYouRestos = [];
let remainingRestos = [];

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
    const { allRestaurants, changedUserLocation } = this.props;
    if (allRestaurants !== prevProps.allRestaurants) {
      this.setState({
        allRestaurents: allRestaurants,
      });
    }
    if (changedUserLocation !== prevProps.changedUserLocation) {
      const { foodSelectionType, deliveryType } = this.state;
      this.handleRestaurantFiltering(
        foodSelectionType,
        deliveryType,
        changedUserLocation,
        true
      );
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleRestaurantFiltering = (
    foodSelection,
    deliveryType,
    location,
    enableSeachFiltering
  ) => {
    const { allRestaurents, changedUserLocation } = this.state;
    // const { changedUserLocation } = this.props;

    if (allRestaurents instanceof Array) {
      console.log("Retrieved Restaurant info ", allRestaurents);
      let foodBasedFilteredSet = null;
      let deliveryBasedFilteredSet = null;
      console.log("All Restaurants Length: ", allRestaurents.length);
      console.log("All Restaurants: ", allRestaurents);
      // Search Based Filtering
      // let searchBasedFiltering = null;
      // let prevResultFoodbasedFiltering = allRestaurents;
      // if (enableSeachFiltering) {
      //   searchBasedFiltering = allRestaurents.filter(
      //     (restaurant) => restaurant.is_search_result === 1
      //   );
      //   remainingRestos = allRestaurents.filter(
      //     (restaurant) => restaurant.is_search_result === 0
      //   );
      //   prevResultFoodbasedFiltering = searchBasedFiltering;
      // }

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
        // if (enableSeachFiltering) {
        //   searchResultRestos = deliveryBasedFilteredSet;
        // }
        // Location Based Filtering
        // console.log("Filtering Location: ", location);
        console.log(
          "Delivery Based Filtering Restaurants Length: ",
          deliveryBasedFilteredSet.length
        );

        console.log("Changed User Address Location: ", changedUserLocation);

        console.log("Delivery Based Filetered Set: ", deliveryBasedFilteredSet);

        console.log("User Location ", location);

        // Restaurants Near me
        nearToYouRestos = deliveryBasedFilteredSet.filter(
          (restaurant) =>
            // console.log("Near you filtering => location", location);
            // console.log(
            //   "Near you filtering => Similarity Score",
            //   this.StringSimilarityLevenshtein(
            //     restaurant.restaurant_city,
            //     location.city
            //   )
            // );

            restaurant.is_search_result === 1 &&
            location &&
            location.city &&
            this.StringSimilarityLevenshtein(
              restaurant.restaurant_city,
              location.city
            ) >= 0.6
        );
        // National Brands
        nationalRestos = deliveryBasedFilteredSet.filter(
          (restaurant) => restaurant.national_brand
        );
        console.log("National Brand Restaurants ", nationalRestos);
        // Remaining Restaurants
        remainingRestos = allRestaurents.filter(
          (restaurant) => nearToYouRestos.indexOf(restaurant) === -1
        );
        console.log("Remaining Restaurants ", remainingRestos);
      }
    }
  };

  handleFoodSelect = (e) => {
    console.log("Food Selection Type: ", e);
    const { deliveryType } = this.state;
    const { changedUserLocation, userLocation } = this.props;
    const location =
      changedUserLocation.addressDescription !== ""
        ? changedUserLocation
        : userLocation;
    this.setState({
      foodSelectionType: e,
    });
    this.handleRestaurantFiltering(e, deliveryType, location, false);
  };

  handleRestoSearch = (e) => {
    console.log("Delivery Type : ", e);
    const { foodSelectionType } = this.state;
    const { changedUserLocation, userLocation } = this.props;
    const location =
      changedUserLocation.addressDescription !== ""
        ? changedUserLocation
        : userLocation;
    this.setState({
      deliveryType: e,
    });
    this.handleRestaurantFiltering(foodSelectionType, e, location, false);
  };

  handleSearchBarInput = (e) => {
    console.log("Search Input from Header: ", e);
    if (e === "") {
      this.props.restaurants();
    } else {
      this.props.searchRestaurants(e);
    }
    const { foodSelectionType, deliveryType } = this.state;
    const { userLocation, changedUserLocation } = this.props;
    const location =
      changedUserLocation.addressDescription !== ""
        ? changedUserLocation
        : userLocation;
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      searchInput: e,
    });
    this.handleRestaurantFiltering(
      foodSelectionType,
      deliveryType,
      location,
      true
    );
  };

  handleRestaPageRedirect = (restaurant) => {
    console.log("handleRestaPageRedirect: ", restaurant);
  };

  StringSimilarityLevenshtein = (s1, s2) => {
    s1 = s1.replace(/\s+/g, "");
    s2 = s2.replace(/\s+/g, "");
    let longer = s1.toLowerCase();
    let shorter = s2.toLowerCase();
    if (!s1 || !s2) return 0;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) {
      return 1.0;
    }
    console.log(
      "Similarity Score for",
      s1,
      " and ",
      s2,
      ": ==>",
      (longerLength - this.editDistance(longer, shorter)) /
        parseFloat(longerLength)
    );
    return (
      (longerLength - this.editDistance(longer, shorter)) /
      parseFloat(longerLength)
    );
  };

  editDistance = (s1, s2) => {
    const s11 = s1.toLowerCase();
    const s22 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s11.length; i += 1) {
      let lastValue = i;
      for (let j = 0; j <= s22.length; j += 1) {
        if (i === 0) costs[j] = j;
        else if (j > 0) {
          let newValue = costs[j - 1];
          if (s11.charAt(i - 1) !== s22.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  render() {
    let redirectVar = null;
    if (!isUserSignedIn()) {
      redirectVar = <Redirect to='/home' />;
    }
    const { allRestaurents, foodSelectionType, deliveryType } = this.state;
    const {
      userLocation,
      changedUserLocation,
      userAddressDescription,
      allRestaurants,
    } = this.props;
    const location =
      changedUserLocation.addressDescription !== ""
        ? changedUserLocation
        : userLocation;
    console.log("allRestaurants allRestaurants allRestaurants", allRestaurants);
    let nationalbrands = null;
    let popularnear = null;
    let remaining = null;
    // let searchresults = null;
    if (allRestaurents) {
      this.handleRestaurantFiltering(
        foodSelectionType,
        deliveryType,
        location,
        true
      );

      console.log("National Restos ", nationalRestos);

      console.log("Resto near you ", nearToYouRestos);

      nationalbrands = nationalRestos.map((restaurant) => (
        <RestoCard
          key={restaurant.restaurant_id}
          RestaRedirect={this.handleRestaPageRedirect}
          restaurant={restaurant}
          isLiked={false}
        />
      ));
      popularnear = nearToYouRestos.map((restaurant) => (
        <RestoCard
          key={restaurant.restaurant_id}
          RestaRedirect={this.handleRestaPageRedirect}
          restaurant={restaurant}
          isLiked={false}
        />
      ));
      remaining = remainingRestos.map((restaurant) => (
        <RestoCard
          key={restaurant.restaurant_id}
          RestaRedirect={this.handleRestaPageRedirect}
          restaurant={restaurant}
          isLiked={false}
        />
      ));
      // searchresults = searchResultRestos.map((restaurant) => {
      //   console.log("Inside Search Result Restos ", restaurant);
      //   return (
      //     <RestoCard
      //       key={restaurant.restaurant_id}
      //       RestaRedirect={this.handleRestaPageRedirect}
      //       restaurant={restaurant}
      //       isLiked={false}
      //     />
      //   );
      // });
    }
    return (
      <React.Fragment>
        {redirectVar}
        <div
          style={{
            marginLeft: "1%",
          }}>
          <Header
            restoSearch={this.handleRestoSearch}
            searchBarCallback={this.handleSearchBarInput}
            defaultUserLocationDescription={
              userAddressDescription
                ? userAddressDescription
                : "Default Location"
            }
            hideDeliveryPickup
          />
          <Container
            fluid
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <Col md='3'>
              <SideBar FoodTypeSelection={this.handleFoodSelect} />
            </Col>
            <RestaurantCarousel
              nationalbrands={nationalbrands}
              popularnear={popularnear}
              remaining={remaining}
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
  searchRestaurants: PropTypes.func.isRequired,
  allRestaurants: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  userAddressDescription: state.signin.address.addressDescription,
  userLocation: state.signin.address,
  changedUserLocation: state.currentLocation,
  allRestaurants: state.restaurants.allRestaurants,
});

export default connect(mapStateToProps, { restaurants, searchRestaurants })(
  CustomerHome
);
