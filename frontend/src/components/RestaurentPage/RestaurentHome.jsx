import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Header from "../HomeIcons/header";

import RestaBanner from "../RestaurentPageIcons/RestaBanner";

import "../Styles/Home.css";
import MenuCard from "../RestaurentPageIcons/MenuCard";

class RestaurentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <RestaBanner
            src='https://d1ralsognjng37.cloudfront.net/2c9841a7-c2e5-4202-bcb4-dc7cff46c668.jpeg'
            restaTitle='Panda express'
            restaAddress='gfhsdghjhfsj'
            otherDetails='fsdfnbsjfkdgnjkf'
            restauDescri='One of the most popular items on the menu among Uber Eats users is the Chicken Wings and the Quarter Pound Big Bite and the Steak & Cheese Taquito are two of the items most commonly ordered together at this late night go-to. • $ • Convenience • Everyday Essentials • Grocery • Snacks • Home & Personal Care'
          />
          <Container fluid>
            <Row xxs='auto'>
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />{" "}
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />{" "}
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led byvdfgvdbghjkbv uhsfjdhnjkvdhbxkhbgkjhbs n a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246 Drivers dr'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />
              <MenuCard
                src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
                title='Apna Bazar'
                price='246'
                description='Unique ac, led by a world of hosts.'
                quantity='2'
              />{" "}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default RestaurentHome;
