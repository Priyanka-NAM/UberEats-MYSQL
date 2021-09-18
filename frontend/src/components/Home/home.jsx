import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import axios from "axios";
import Header from "./HomeIcons/Header";
import RestaurantCarousel from "./HomeIcons/RestaurarntCarousel";
import RestoCard from "./HomeIcons/RestoCard";

import SideBar from "./HomeIcons/SideBar";
import "../Styles/Home.css";

let favoriteRestos = [];
let nationalRestos = [];
let nearToYouRestos = [];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurents: [],

      deliveryType: "delivery",
      foodSelectionType: "allresto",
      userLocation: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/ubereats/customerrestaurant/restaurantsearch/_"
      )
      .then((response) => {
        // const cuisines = [];
        console.log("Get Response: ", JSON.stringify(response));
        if (response.data) {
          console.log("Get Response: ", JSON.stringify(response));
          if (response.data.status === "Sending Filtered Resaturants") {
            console.log(
              "Status Filtered Restaurants and setting no state: ",
              response.data.restaurentsinfo.restaurants
            );
            this.setState({
              allRestaurents: [],
            });
          } else {
            console.log(
              "Status All Restaurants and Setting State: ",
              response.data.restaurentsinfo.restaurants
            );
            this.setState({
              allRestaurents: response.data.restaurentsinfo.restaurants,
            });
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("Restaurant Get Error", error.response.data);
        }
      });
  }

  handleRestaurantFiltering = (foodSelection, deliveryType, location = "") => {
    const { allRestaurents } = this.state;
    let foodBasedFilteredSet = null;
    let deliveryBasedFilteredSet = null;
    console.log("All Restaurants Length: ", allRestaurents.length);
    console.log("All Restaurants: ", allRestaurents);
    // Food Type Filtering
    if (foodSelection === "allresto") {
      foodBasedFilteredSet = allRestaurents;
    } else {
      foodBasedFilteredSet = allRestaurents.filter(
        (restaurant) => restaurant.foodtype === foodSelection
      );
    }
    console.log(
      "Food Based Filtering Restaurants Length: ",
      foodBasedFilteredSet.length
    );

    console.log("Food Based Filetered Set: ", foodBasedFilteredSet);
    // Delivery Based filtering
    deliveryBasedFilteredSet = foodBasedFilteredSet.filter(
      (restaurant) =>
        restaurant.deliveryType === deliveryType ||
        restaurant.deliveryType === "both"
    );

    // Location Based Filtering
    // console.log("Filtering Location: ", location);
    console.log(
      "Delivery Based Filtering Restaurants Length: ",
      deliveryBasedFilteredSet.length
    );

    console.log("Delivery Based Filetered Set: ", deliveryBasedFilteredSet);

    // Favorites
    favoriteRestos = deliveryBasedFilteredSet.filter(
      (restaurant) => restaurant.isFavorite
    );

    // National Brands
    nationalRestos = deliveryBasedFilteredSet.filter(
      (restaurant) => restaurant.isNationalBrand
    );

    // Restaurants Near me
    nearToYouRestos = deliveryBasedFilteredSet.filter(
      (restaurant) => restaurant.isNationalBrand
    );
  };

  handleFoodSelect = (e) => {
    console.log("Food Selection Type: ", e);
    const { deliveryType, userLocation } = this.state;
    this.setState({
      foodSelectionType: e,
    });
    this.handleRestaurantFiltering(e, deliveryType, userLocation);
  };

  handleRestoSearch = (e) => {
    console.log("Delivery Type : ", e);
    const { foodSelectionType, userLocation } = this.state;
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
    const { allRestaurents, foodSelectionType, deliveryType, userLocation } =
      this.state;
    let nationalbrands = null;
    let favorites = null;
    let popularnear = null;

    if (allRestaurents) {
      this.handleRestaurantFiltering(
        foodSelectionType,
        deliveryType,
        userLocation
      );
      nationalbrands = nationalRestos.map((restaurant) => {
        console.log("Inside National Brands, ", nationalRestos.length);
        return (
          <RestoCard
            key={restaurant.restaurant_id}
            RestaRedirect={this.handleRestaPageRedirect}
            restaurant={restaurant}
            isLiked={false}
          />
        );
      });
      favorites = favoriteRestos.map((restaurant) => {
        console.log("Inside Favorite Brands, ", favoriteRestos.length);
        return (
          <RestoCard
            key={restaurant.restaurant_id}
            RestaRedirect={this.handleRestaPageRedirect}
            restaurant={restaurant}
            isLiked
          />
        );
      });
      popularnear = nearToYouRestos.map((restaurant) => {
        console.log("Inside Popular Near me, ", nationalRestos.length);
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
      <div style={{ marginLeft: "1%" }}>
        <Header
          restoSearch={this.handleRestoSearch}
          searchBarCallback={this.handleSearchBarInput}
        />
        <Container fluid className='home-container'>
          <Col md='3'>
            <SideBar FoodTypeSelection={this.handleFoodSelect} />
          </Col>
          <RestaurantCarousel
            nationalbrands={nationalbrands}
            favorites={favorites}
            popularnear={popularnear}
          />
        </Container>
      </div>
    );
  }
}

export default HomePage;
