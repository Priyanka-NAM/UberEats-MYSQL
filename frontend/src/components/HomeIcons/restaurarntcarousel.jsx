/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Styles/RestaCarousel.css";

import RestoCard from "./RestoCard";

const RestaurantCarousel = () => (
  <Container fluid>
    <Container fluid style={{ objectFit: "cover" }}>
      <h2>Favourites</h2>
      <Row xxs='auto' fluid>
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
          title='Apna Bazar'
          address='246 Drivers dr'
          description='Unique ac, led by a world of hosts.'
        />
        <RestoCard
          src='https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg 240w,https://d1ralsognjng37.cloudfront.net/467edb0b-cfe7-47dd-a9ac-ef851ffbbea8.jpeg 550w,https://d1ralsognjng37.cloudfront.net/0139e103-ee35-4d32-8b2f-e67cc34e1c15.jpeg 640w,https://d1ralsognjng37.cloudfront.net/247e7502-e549-4b08-b235-ce8b542e914d.jpeg 750w,https://d1ralsognjng37.cloudfront.net/5176bfe7-d608-4d6b-ad58-ba34d58bf573.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/30c3d0ca-f45c-450c-9050-2fdbdaa38b49.jpeg 2880w'
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique acr, led by a world of hosts.'
        />
      </Row>
    </Container>
    <Container fluid style={{ objectFit: "cover" }}>
      <h2>National Brands</h2>
      <Row xxs='auto' fluid>
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
          title='Apna Bazar'
          address='246 Drivers dr'
          description='Unique ac, led by a world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique act world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kZmNmNDY4Mi0xZDM0LTQ5MjUtOGNjYS00MmY0NDVlMTM3NjkuanBlZw=='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique actied by a world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique act world of hosts.'
        />
        <RestoCard
          src='https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg 240w,https://d1ralsognjng37.cloudfront.net/467edb0b-cfe7-47dd-a9ac-ef851ffbbea8.jpeg 550w,https://d1ralsognjng37.cloudfront.net/0139e103-ee35-4d32-8b2f-e67cc34e1c15.jpeg 640w,https://d1ralsognjng37.cloudfront.net/247e7502-e549-4b08-b235-ce8b542e914d.jpeg 750w,https://d1ralsognjng37.cloudfront.net/5176bfe7-d608-4d6b-ad58-ba34d58bf573.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/30c3d0ca-f45c-450c-9050-2fdbdaa38b49.jpeg 2880w'
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique acr, led by a world of hosts.'
        />
      </Row>
    </Container>
    <Container fluid style={{ objectFit: "cover" }}>
      <h2>Popular Near you</h2>
      <Row xxs='auto' fluid>
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8xNGQ2NTM4Yi00YjI2LTQxNzQtYTc1YS1hMDNjYzA2ZGUzMzUuanBlZw=='
          title='Apna Bazar'
          address='246 Drivers dr'
          description='Unique ac, led by a world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique act world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9kZmNmNDY4Mi0xZDM0LTQ5MjUtOGNjYS00MmY0NDVlMTM3NjkuanBlZw=='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique actied by a world of hosts.'
        />
        <RestoCard
          src='https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8yMDE0ZGUxYi05YTNhLTQ3ODctODRjNS01ZjcyODI4OGM5NjM='
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique act world of hosts.'
        />
        <RestoCard
          src='https://d1ralsognjng37.cloudfront.net/305df057-e65a-47e6-b62c-e5d024c918ca.jpeg 240w,https://d1ralsognjng37.cloudfront.net/467edb0b-cfe7-47dd-a9ac-ef851ffbbea8.jpeg 550w,https://d1ralsognjng37.cloudfront.net/0139e103-ee35-4d32-8b2f-e67cc34e1c15.jpeg 640w,https://d1ralsognjng37.cloudfront.net/247e7502-e549-4b08-b235-ce8b542e914d.jpeg 750w,https://d1ralsognjng37.cloudfront.net/5176bfe7-d608-4d6b-ad58-ba34d58bf573.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/30c3d0ca-f45c-450c-9050-2fdbdaa38b49.jpeg 2880w'
          title='Online Experiences'
          address='246 Drivers dr'
          description='Unique acr, led by a world of hosts.'
        />
      </Row>
    </Container>
  </Container>
);

export default RestaurantCarousel;
