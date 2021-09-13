import React, { Component } from "react";
import { Button, Nav, Container, Navbar, Form } from "react-bootstrap";
import UberELogo from "../Home/HomeIcons/logo";

class OwnerSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar bg='dark' variant='dark'>
          <Container
            align='right'
            style={{
              padding: "0px",
              margin: "0px",
            }}>
            <Navbar.Brand href='#home'>
              <Nav>
                <Nav.Item
                  style={{
                    marginLeft: "50px",
                    width: "100%",
                  }}>
                  <img
                    style={{ height: "60px", marginRight: "100px" }}
                    src={UberELogo.UberEWLogo.src}
                    alt={UberELogo.UberEWLogo.alt}
                  />
                </Nav.Item>
                <Nav.Item
                  style={{
                    marginLeft: "250%",
                    marginRight: "0",
                    paddingRight: "10px",
                  }}>
                  <Button variant='dark' type='submit'>
                    Sign In
                  </Button>
                </Nav.Item>
                <Nav.Item>
                  <Button active='true' variant='dark' type='submit'>
                    Sign Up
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Container
          align='right'
          style={{
            width: "80%",
            height: "80vh",
            backgroundImage: `url("https://www.ubereats.com/restaurant/_static/b32d6f597129133d883c48c0b95c97f5.jpg")`,
          }}>
          <Container
            align='right'
            style={{
              backgroundColor: "white",
              margin: "0",
              width: "30%",
            }}>
            <Form
              align='center'
              style={{
                height: "80vh",
                width: "100%",
                fontfamily: "UberMoveText",
              }}>
              <h2
                style={{
                  paddingTop: "50px",
                  paddingBottom: "33px",
                  fontfamily: "Book",
                  fontSize: "25px",
                }}>
                Getting Started
              </h2>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='name' placeholder='Restaurant Name' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  type='Location'
                  placeholder='Restaurant Location'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#43A422",
                  color: "white",
                }}
                variant='light'
                type='submit'>
                Submit
              </Button>
            </Form>
          </Container>
        </Container>
      </>
    );
  }
}

export default OwnerSignUp;
