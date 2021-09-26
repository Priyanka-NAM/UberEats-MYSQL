import React, { Component } from "react";
import "react-times/css/classic/default.css";
import axios from "axios";
import PropTypes from "prop-types";
import Jimp from "jimp";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Form,
  Col,
  Container,
  Navbar,
  Nav,
  Card,
  Dropdown,
  Row,
} from "react-bootstrap";
import RestaBanner from "../../Restaurent/RestaurentPageIcons/RestaBanner";
import resizeFile from "../../Svg/ImageResizing";
import OwnerHome from "../../Home/OwnerHome";
import MenuCard from "../../Restaurent/RestaurentPageIcons/MenuCard";

const fs = require("fs");

const restadata = [
  {
    name: "Fried Rice",
    imageurl:
      "https://images.unsplash.com/photo-1519624213695-6819a985fb0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Salads",
    dish_id: "1",
  },
  {
    name: "Noodles",
    imageurl:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 15.99,
    dishType: "Main course",
    dish_id: "2",
  },
  {
    name: "Salsa",
    imageurl:
      "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 120.99,
    dishType: "Appetizers",
    dish_id: "3",
  },
  {
    name: "Chicken Bowl",
    imageurl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 70.99,
    dishType: "Bowl",
    dish_id: "4",
  },
  {
    name: "Coke",
    imageurl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80",
    address: "246 Drivers dr",
    description: "Unique ac, led by a world of hosts.",
    price: 10.99,
    dishType: "Drinks",
    dish_id: "5",
  },
  {
    name: "Bigger Plate",
    imageurl:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 60.99,
    dishType: "Bigger Plate",
    dish_id: "6",
  },
  {
    name: "Biriyani",
    imageurl:
      "https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 60.9,
    dishType: "Bigger Plate",
    dish_id: "9",
  },
  {
    name: "Wine",
    imageurl:
      "https://images.unsplash.com/photo-1529543544282-ea669407fca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
    description: "Unique ac, led by a world of hosts.",
    price: 100.99,
    dishType: "Drinks",
    dish_id: "7",
  },
];

class OwnerHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newImageData: "",
    };
  }

  componentDidMount() {
    Jimp.read(
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      (err, newImage) => {
        if (err) {
          console.log("Error in Jimp Processing, ", JSON.stringify(err));
          throw err;
        }
        newImage.resize(300, 300).quality(60);
        newImage.getBase64(Jimp.AUTO, (err2, data) => {
          console.log(data);
          this.setState({
            newImageData: data,
          });
        });
        // .write("new_test_rest_image.png");
      }
    );
  }

  render() {
    let restaurentMenu = null;
    const { newImageData } = this.state;
    if (restadata) {
      restaurentMenu = restadata.map((dish) => (
        <MenuCard
          key={dish.dish_id}
          src={dish.imageurl}
          title={dish.name}
          price={dish.price}
          description={dish.description}
          quantity='2'
          isOwnerHome
        />
      ));
    }

    const pageContent = (
      <Col style={{ padding: "0%", margin: "0%" }}>
        <Container fluid>
          <Row style={{ paddingTop: "2%" }}>
            <RestaBanner
              key='1'
              src='https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
              restaTitle='Hello WOrld'
              restaAddress='Hello WOrld'
              isOwnerHome
              otherDetails='fsdfnbsjfkdgnjkf'
              restauDescri='One of the most popular items on the menu among Uber Eats users is the Chicken Wings and the Quarter Pound Big Bite and the Steak & Cheese Taquito are two of the items most commonly ordered together at this late night go-to. • $ • Convenience • Everyday Essentials • Grocery • Snacks • Home & Personal Care'
            />
          </Row>
          <Row style={{ padding: "0%", margin: "0%", width: "100%" }}>
            {restaurentMenu}
          </Row>
        </Container>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

// OwnerHomePage.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   location: PropTypes.object.isRequired,
// };

export default OwnerHomePage;
