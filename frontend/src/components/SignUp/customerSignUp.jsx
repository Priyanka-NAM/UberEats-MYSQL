import React from "react";
import { Button, Nav, Container, Navbar, Form } from "react-bootstrap";
import UberELogo from "../Home/HomeIcons/logo";

class CustomerSignUp extends React.Component {
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
            marginTop: "20px",
            width: "80%",
            height: "74vh",
            backgroundImage: `url("https://scontent-sjc3-1.xx.fbcdn.net/v/t1.6435-9/32159993_1629239100531581_6053773609350987776_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=9267fe&_nc_ohc=-ptS4LsPLfAAX9iFS41&_nc_ht=scontent-sjc3-1.xx&oh=b9db10453a7f6df28e19e6c0c4fb8ef6&oe=61644213")`,
          }}>
          <Container
            align='right'
            style={{
              backgroundColor: "#212529",
              margin: "0",
              width: "30%",
            }}>
            <Form
              align='center'
              style={{
                height: "74vh",
                width: "100%",
                fontfamily: "UberMoveText",
              }}>
              <h2
                style={{
                  paddingTop: "50px",
                  paddingBottom: "33px",
                  fontfamily: "Book",
                  fontSize: "25px",
                  color: "white",
                }}>
                Sign Up to Order
              </h2>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='name'
                  placeholder='Name'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Control
                  style={{
                    height: "50px",
                  }}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#43A422",
                  color: "white",
                  height: "50px",
                }}
                variant='light'
                type='submit'>
                Next
              </Button>
            </Form>
          </Container>
        </Container>
      </>
    );
  }
}

export default CustomerSignUp;
