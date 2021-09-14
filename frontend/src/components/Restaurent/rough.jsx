import React, { Component } from "react";
import { Container, Image, Figure, Button, Jumbotron } from "react-bootstrap";

import PropTypes from "prop-types";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Rough extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <Image
          src='https://d1ralsognjng37.cloudfront.net/2c9841a7-c2e5-4202-bcb4-dc7cff46c668.jpeg'
          fluid
        /> */}
        <Jumbotron>
          <h1 className='display-3'>Hello, world!</h1>
          <p className='lead'>
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className='my-2' />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className='lead'>
            <Button color='primary'>Learn More</Button>
          </p>
          <Figure>
            <Figure.Image
              width={2200}
              height={1000}
              alt='171x180'
              src='https://d1ralsognjng37.cloudfront.net/2c9841a7-c2e5-4202-bcb4-dc7cff46c668.jpeg'
            />
            <Figure.Caption>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </Figure.Caption>
          </Figure>
        </Jumbotron>
        <Figure>
          <Figure.Image
            width={2200}
            height={1000}
            alt='171x180'
            src='https://d1ralsognjng37.cloudfront.net/2c9841a7-c2e5-4202-bcb4-dc7cff46c668.jpeg'
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>

        <Jumbotron fluid>
          <Container fluid>
            <h1 className='display-3'>Fluid jumbotron</h1>
            <p className='lead'>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Rough;
