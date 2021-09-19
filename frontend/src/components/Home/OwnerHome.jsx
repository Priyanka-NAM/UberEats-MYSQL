import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdBorderColor,
  MdRestaurant,
  MdContactPhone,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Form,
  Nav,
  FloatingLabel,
  DropdownButton,
  Dropdown,
  Container,
  Col,
  Row,
  Table,
  Navbar,
} from "react-bootstrap";
import UberELogo from "./HomeIcons/logo";
import OwnerProfile from "../Profile/OwnerProfile";

class OwnerHome extends Component {
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
                    style={{ height: "55px", marginRight: "100px" }}
                    src={UberELogo.UberEWLogo.src}
                    alt={UberELogo.UberEWLogo.alt}
                  />
                </Nav.Item>
                <Nav.Item
                  style={{
                    marginLeft: "350%",
                    marginRight: "0",
                    paddingRight: "10px",
                  }}>
                  <Button active='true' variant='dark' type='submit'>
                    Sign Out
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container fluid='true'>
          <Row>
            <Col
              sm={1}
              md={2}
              style={{ padding: "0px", borderRight: "1px solid black" }}>
              <Nav
                style={{
                  height: "90.5vh",
                  overflow: "hidden",
                  paddingTop: "60px",
                  paddingLeft: "60px",
                }}
                align='left'
                className='col-md-12 d-none d-md-block sidebar'
                activeKey='/home'>
                <div className='sidebar-sticky' style={{ color: "black" }} />
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link style={{ color: "black" }}>
                    <MdHome style={{ marginRight: "18px" }} />
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link eventKey='link-1' style={{ color: "black" }}>
                    <MdContactPhone style={{ marginRight: "18px" }} />
                    Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link eventKey='link-1' style={{ color: "black" }}>
                    <MdRestaurant style={{ marginRight: "18px" }} />
                    Menu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    paddingBottom: "20px",
                  }}>
                  <Nav.Link eventKey='link-2' style={{ color: "black" }}>
                    <MdBorderColor style={{ marginRight: "18px" }} />
                    Orders
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            {/* <OwnerProfile /> */}
            <Col style={{ padding: "0px" }} align='left'>
              <Navbar
                variant='light'
                style={{ borderBottom: "1px solid black" }}>
                <Container
                  fluid='true'
                  style={{ paddingLeft: "40px", fontSize: "20px" }}>
                  <Nav className='me-auto'>
                    <Nav.Link href='#Menus' style={{ paddingLeft: "40px" }}>
                      Menus
                    </Nav.Link>
                    <Nav.Link
                      href='#Categories'
                      style={{ paddingLeft: "40px" }}>
                      Categories
                    </Nav.Link>
                    <Nav.Link href='#Items' style={{ paddingLeft: "40px" }}>
                      Items
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
              <>
                {/* menu */}
                <Row style={{ marginRight: "0%" }}>
                  <Col
                    style={{
                      paddingLeft: "5%",
                      paddingTop: "4%",
                      borderRight: "1px solid black",
                      height: "84vh",
                    }}>
                    <h4 style={{ fontSize: "35px", fontFamily: "sans-serif" }}>
                      Menu
                    </h4>
                    <Button
                      style={{
                        marginLeft: "70%",
                        marginTop: "0%",
                        width: "15%",
                        height: "3rem",
                        fontFamily: "sans-serif",
                        fontSize: "18px",
                      }}
                      variant='light'>
                      <FaPlus style={{ marginRight: "10%" }} />
                      Add Item
                    </Button>

                    <Row style={{ paddingTop: "40px", width: "90%" }}>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Burgers</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Mark</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Col>
                  <Col xs={4} style={{ paddingTop: "10px" }}>
                    <h4
                      style={{
                        fontSize: "28px",
                        fontFamily: "sans-serif",
                        paddingBottom: "0%",
                      }}>
                      Edit Item
                    </h4>
                    <Button
                      style={{
                        marginLeft: "70%",
                        marginTop: "0%",
                        width: "16%",
                        height: "3rem",
                        fontFamily: "sans-serif",
                        fontSize: "18px",
                      }}
                      variant='dark'>
                      Save
                    </Button>
                    <Form
                      style={{
                        width: "90%",
                        marginTop: "25px",
                        fontFamily: "sans-serif",
                        fontSize: "18px",
                      }}>
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          color='#eeeee'
                          type='name'
                          placeholder=''
                        />
                      </Form.Group>
                      <br />
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlTextarea1'>
                        <Row>
                          <Col>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                              style={{ height: "90%" }}
                              as='textarea'
                              rows={5}
                            />
                          </Col>
                          <Col>
                            <Form.Label>Picture</Form.Label>
                            {/* <Input
                              style={{
                                height: "90%",
                                border: "2px dashed black",
                              }}
                              rows={5}
                            /> */}

                            <div className='col-md-6'>
                              <form method='post' action='#' id='#'>
                                <div className='form-group files'>
                                  <input
                                    type='file'
                                    className='form-control'
                                    multiple=''
                                  />
                                </div>
                              </form>
                            </div>
                          </Col>
                        </Row>
                      </Form.Group>
                      <br />
                      <Form.Group
                        className='mb-3'
                        controlId='exampleForm.ControlInput1'>
                        <Form.Label>Catergories</Form.Label>
                        {/* <FloatingLabel
                          style={{ height: "2.5rem" }}
                          controlId='floatingSelectGrid'>
                          <Form.Select aria-label='Floating label select example'>
                            <option>Select the dish Category</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                          </Form.Select>
                        </FloatingLabel> */}

                        <Dropdown
                          style={{
                            width: "90%",
                          }}>
                          <Dropdown.Toggle
                            variant='light'
                            style={{ backgroundColor: "#eeeee" }}>
                            Select the dish Category
                          </Dropdown.Toggle>
                          <Dropdown.Menu variant='light'>
                            <Dropdown.Item href='#/action-1' active>
                              Action
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Another action
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Form.Group>
                      <br />
                      <Form>
                        <Form.Group
                          as={Row}
                          className='mb-3'
                          controlId='formHorizontalEmail'>
                          <Form.Label column sm={8}>
                            Price
                          </Form.Label>
                          <Col sm={4}>
                            <Form.Control type='email' placeholder='' />
                          </Col>
                        </Form.Group>
                      </Form>
                      <Form>
                        <Form.Group
                          as={Row}
                          className='mb-3'
                          controlId='formHorizontalEmail'>
                          <Form.Label column sm={8}>
                            Vat
                          </Form.Label>
                          <Col sm={4}>
                            <Form.Control type='email' placeholder='' />
                          </Col>
                        </Form.Group>
                      </Form>
                    </Form>
                  </Col>
                </Row>
              </>

              {/* <Row style={{ marginLeft: "3%", marginTop: "3%" }}>
                <Row>
                  <h1>Categories</h1>
                </Row>
                <Col
                  align='right'
                  style={{
                    marginRight: "8%",
                    fontSize: "16px",
                    fontFamily: "sans-serif",
                  }}>
                  <Button
                    style={{ width: "15%", height: "3.5rem" }}
                    variant='dark'>
                    <FaPlus style={{ marginRight: "10%" }} />
                    New Category
                  </Button>
                </Col>
                <br />
                <Row style={{ marginTop: "4%" }}>
                  <Table
                    style={{
                      width: "80%",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Menus</th>
                        <th>Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{
                          height: "3.5rem",
                        }}>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr
                        style={{
                          height: "3.5rem",
                        }}>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr
                        style={{
                          height: "3.5rem",
                        }}>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default OwnerHome;
