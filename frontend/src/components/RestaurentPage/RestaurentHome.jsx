import React, { Component } from "react";

import Header from "../HomeIcons/header";
import RestaBanner from "../RestaurentPageIcons/RestaBanner";

import "../Styles/Home.css";
import MenuCard from "../RestaurentPageIcons/MenuCard";

class HomePage extends Component {
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
          <div className='display-menu'>
            <MenuCard
              src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
              title='Apna Bazar'
              price='246 Drivers dr'
              description='Unique ac, led by a world of hosts.'
            />
            <MenuCard
              src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hOWRjY2NhNy1jMTY5LTQ3YWUtODkxZS04NTkyOTJhMTY3ZWU='
              title='Online Experiences'
              address='246 Drivers dr'
              description='Unique ay a world of hosts.'
            />
            <MenuCard
              src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kdXl0NGg5bmZuajUwLmNsb3VkZnJvbnQubmV0L3Jlc2l6ZWQvYmQ1MGZlMWZlZDBiMzU4ZDg1NTljMzlmMDM1OThjM2UtdzU1MC1mMS5qcGc='
              title='Online Experiences'
              address='246 Drivers dr'
              description='Unique activities w of hosts.'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
