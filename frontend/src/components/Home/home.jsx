import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import axios from "axios";
import Header from "./HomeIcons/Header";
import RestaurantCarousel from "./HomeIcons/RestaurarntCarousel";
import RestoCard from "./HomeIcons/RestoCard";

import SideBar from "./HomeIcons/SideBar";
import "../Styles/Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      noRecord: false,
      displayRestaurants: [],
      allRestaurents: [],
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
              noRecord: true,
              searchInput: "",
              displayRestaurants: [],
              allRestaurents: [],
            });
          } else {
            console.log(
              "Status All Restaurants and Setting State: ",
              response.data.restaurentsinfo.restaurants
            );
            this.setState({
              noRecord: false,
              searchInput: "",
              displayRestaurants: response.data.restaurentsinfo.restaurants,
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

  handleFoodSelect = (e) => {
    console.log(e);
    const { allRestaurents } = this.state;

    if (e === "allresto") {
      this.setState({
        displayRestaurants: allRestaurents,
      });
    } else {
      const filteredList = allRestaurents.filter(
        (restaurant) => restaurant.foodtype === e
      );
      console.log(`The list is here :${allRestaurents}`);
      this.setState({
        displayRestaurants: filteredList,
      });
    }
  };

  render() {
    const { displayRestaurants, allRestaurents, searchInput, noRecord } =
      this.state;
    let nationalbrands = null;
    let foodselection = null;
    console.log("Inside Render");
    if (foodselection) {
      foodselection = allRestaurents.map((restaurant) => {
        console.log("!!");
        return <RestoCard restaurant={restaurant} />;
      });
    }
    if (displayRestaurants) {
      nationalbrands = displayRestaurants.map((restaurant) => {
        console.log("!!");
        return <RestoCard restaurant={restaurant} />;
      });
    }
    return (
      <div style={{ marginLeft: "1%" }}>
        <Header />
        <Container fluid className='home-container'>
          <Col md='3'>
            <SideBar FoodTypeSelection={this.handleFoodSelect} />
          </Col>
          <RestaurantCarousel nationalbrands={nationalbrands} />
        </Container>
      </div>
    );
  }
}

export default HomePage;
