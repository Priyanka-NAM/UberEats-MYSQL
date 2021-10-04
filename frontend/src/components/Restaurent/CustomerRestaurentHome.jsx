/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getToken } from "../Service/authService";

import Header from "../Home/HomeIcons/Header";
import RestaBanner from "./RestaurentPageIcons/RestaBanner";
import "../Styles/Home.css";
import MenuCard from "./RestaurentPageIcons/MenuCard";

class RestaurentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { location } = this.props;
    console.log("Restaurant Home Props: ", location);
    const { state } = location;
    const { restaurant } = state;
    const { restaurant_id } = restaurant;
    axios.defaults.headers.common.authorization = getToken();
    axios
      .get(
        `http://localhost:5000/ubereats/customerrestaurant/restaurantdetails/${restaurant_id}`
      )
      .then((response) => {
        if (response.data) {
          if (response.data.status !== "Request Successful") {
            this.setState({
              restaurentDetails: [],
            });
          } else {
            this.setState({
              restaurentDetails: response.data.restaurentDetails,
            });
            console.log("Restaurant Details Request Successful");
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("Restaurant Get Error", error.response.data);
        }
      });
    axios
      // .get(`http://localhost:5000/ubereats/dishes/alldishes/${restaurant_id}`)
      .get(`http://localhost:5000/ubereats/dishes/alldishes/35`)
      .then((response) => {
        if (response.data) {
          if (response.data.status !== "ALL_DISHES") {
            this.setState({
              dishesList: [],
            });
          } else {
            this.setState({
              // dishesList: response.data.dishesList,
              dishesList: response.data.allDishes,
            });
            console.log("Dish Details Request Successful");
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          console.log("Restaurant Get Error", error.response.data);
        }
      });
  }

  render() {
    const { dishesList, restaurentDetails } = this.state;
    const { currentLocation, userLocation } = this.props;
    let restaurentMenu = null;
    let restaurentBanner = null;
    if (dishesList && restaurentDetails) {
      restaurentMenu = dishesList.map((dish) => (
        <MenuCard
          key={dish.dish_id}
          src={dish.image_file_path}
          title={dish.name}
          price={dish.price}
          currentRestaurantName={restaurentDetails[0].title}
          isOwnerHome={false}
          description={dish.description}
          dishDetails={dish}
          quantity='2'
        />
      ));
    }
    if (restaurentDetails) {
      console.log("restadetails", restaurentDetails);
      restaurentBanner = restaurentDetails.map((eachrestaDetails) => (
        <RestaBanner
          key={eachrestaDetails.restaurant_id}
          src={eachrestaDetails.imageurl}
          restaTitle={eachrestaDetails.title}
          restaAddress={eachrestaDetails.address}
          isOwnerHome={false}
          otherDetails='fsdfnbsjfkdgnjkf'
          restauDescri='One of the most popular items on the menu among Uber Eats users is the Chicken Wings and the Quarter Pound Big Bite and the Steak & Cheese Taquito are two of the items most commonly ordered together at this late night go-to. • $ • Convenience • Everyday Essentials • Grocery • Snacks • Home & Personal Care'
        />
      ));
    }
    return (
      <>
        <Header
          restoSearch={null}
          searchBarCallback={null}
          hideDeliveryPickup={false}
          defaultUserLocationDescription={
            currentLocation.addressDescription
              ? currentLocation.addressDescription
              : userLocation.addressDescription
          }
        />
        <>
          {restaurentBanner}
          <Container fluid>
            <Row
              style={{
                paddingLeft: "15px",
                paddingTop: "40px",
                fontSize: "19px",
                fontWeight: "500",
                color: "black",
                fontFamily: "UberMoveText, sans-serif",
              }}>
              <nav
                className='nav'
                style={{
                  paddingRight: "30px",
                }}>
                <a
                  className='nav-link active'
                  href='/'
                  style={{ color: "black", paddingRight: "30px" }}>
                  Desserts
                </a>
                <a
                  className='nav-link'
                  href='/'
                  style={{ color: "black", paddingRight: "30px" }}>
                  Picked for you
                </a>
                <a
                  className='nav-link'
                  href='/'
                  style={{ color: "black", paddingRight: "25px" }}>
                  mains
                </a>
              </nav>
            </Row>
          </Container>
          <hr style={{ border: "soild 1px" }} />
          <Container fluid>
            <Row style={{ padding: "0%", margin: "0%" }}>{restaurentMenu}</Row>
          </Container>
        </>
      </>
    );
  }
}

RestaurentHome.propTypes = {
  location: PropTypes.object.isRequired,
  currentLocation: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation,
  userLocation: state.signin.address,
});
export default connect(mapStateToProps, {})(RestaurentHome);
