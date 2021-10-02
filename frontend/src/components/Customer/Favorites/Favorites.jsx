import React, { Component } from "react";
import { Container, Col, Button, Card, Row, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { getToken } from "../../Service/authService";
import Header from "../../Home/HomeIcons/Header";
import RestoCard from "../../Home/HomeIcons/RestoCard";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   allRestaurents: [],
    };
  }

  componentDidMount() {
    this.hasMounted = true;
    axios.defaults.headers.common.authorization = getToken();
    // axios
    //   .get(
    //     "http://localhost:5000/ubereats/customerrestaurant/restaurantsearch/_"
    //   )
    //   .then((response) => {
    //     if (response.data) {
    //       if (response.data.status === "Sending Filtered Resaturants") {
    //         if (this.hasMounted) {
    //           this.setState({
    //             allRestaurents: [],
    //           });
    //         }
    //       } else if (this.hasMounted) {
    //         this.setState({
    //           allRestaurents: response.data.restaurentsinfo.restaurants,
    //         });
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.data) {
    //       console.log("Restaurant Get Error", error.response.data);
    //     }
    //   });
  }

  render() {
    // const { allRestaurents } = this.state;

    // let favorites = null;
    // favoriteRestos = deliveryBasedFilteredSet.filter(
    //   (restaurant) => restaurant.isFavorite
    // );
    // if (allRestaurents) {
    //   favorites = allRestaurents.map((restaurant) => {
    //     console.log("Inside Favorite Brands, ", allRestaurents.length);
    //     return (
    //       <RestoCard
    //         key={restaurant.restaurant_id}
    //         RestaRedirect={this.handleRestaPageRedirect}
    //         restaurant={restaurant}
    //         isLiked
    //       />
    //     );
    //   });
    // }

    return (
      <div style={{ marginLeft: "1%", overflow: "hidden" }}>
        <Header />
        <Container style={{ marginLeft: "1%" }} fluid>
          <Row>
            <h1>Favorites</h1>
          </Row>
          {/* <Row>
            <RestoCard />
          </Row> */}
          {/* 
          <Row style={{ paddingRight: "10%" }}>
            <Card
              style={{
                width: "22rem",
                paddingLeft: "0px",
              }}>
              <Card.Img
                style={{
                  objectFit: "cover",
                  width: "auto",
                  height: "11rem",
                }}
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
              />
            </Card>
            <Col
              style={{
                fontFamily: "UberMoveText, sans-serif",
              }}>
              <Col
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                }}>
                Himalayan Kitchen - Mountain View
              </Col>
              <Col>
                {1} item for ${0.0} • Canceled on Sep 13 at 11:29 AM •{" "}
                {/* <Link href='/'>View receipt</Link> */}
        </Container>
      </div>
    );
  }
}

export default Favorites;
