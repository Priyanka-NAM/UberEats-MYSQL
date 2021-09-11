import React, { useState } from "react";

import { Container,  Row, } from "react-bootstrap";
import { FaPlusSquare } from "react-icons/fa";
import Header from "../HomeIcons/header";

import RestaBanner from "../RestaurentPageIcons/RestaBanner";

import "../Styles/Home.css";
import MenuCard from "../RestaurentPageIcons/MenuCard";

function Rough() {
  return (
    <div>
      <Container fluid>
        <Row xxs='auto'>
          <MenuCard
            src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
            title='Apna Bazar'
            price='246'
            description='Unique ac, led by a world of hosts.'
          />{" "}
          <MenuCard
            src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
            title='Apna Bazar'
            price='246 Drivers dr'
            description='Unique ac, led by a world of hosts.'
          />{" "}
          <></>
        </Row>
      </Container>
    </div>
  );
}

export default Rough;
