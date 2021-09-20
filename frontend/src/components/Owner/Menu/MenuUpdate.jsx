import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus, FaGripLines } from "react-icons/fa";
import { Button, Form, Col, Dropdown, Image, Row } from "react-bootstrap";
import OwnerHome from "../../Home/OwnerHome";
import MenuNav from "./MenuNav";

class MenuUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: true,
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: false,
    });
  };

  render() {
    const { showEdit } = this.state;
    const pageContent = (
      <Col style={{ padding: "0px" }} align='left'>
        <MenuNav />
        <Row style={{ marginRight: "0%" }}>
          <Col
            style={{
              paddingLeft: "5%",
              paddingTop: "4%",
              borderRight: "1px solid black",
              height: "84vh",
            }}>
            <h4 style={{ fontSize: "35px", fontFamily: "sans-serif" }}>Menu</h4>
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
              <thead style={{ marginBottom: "25px" }}>
                <tr>
                  <th
                    style={{
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}>
                    <FaGripLines style={{ backgroundColor: "#eeeee" }} />
                    <span style={{ paddingLeft: "15px" }}>Burgers</span>
                  </th>
                </tr>
              </thead>
              <Row>
                <div
                  className='card mb-3'
                  style={{ width: "28rem", margin: "1%" }}
                  onKeyPress={() => {}}
                  onClick={this.handleEdit}
                  role='presentation'>
                  <div className='row no-gutters'>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>Chicken</h5>
                        <p className='card-text'>Card Text</p>
                        <p className='card-text'>$20</p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <Image src='https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' />
                    </div>
                  </div>
                </div>
              </Row>
            </Row>
          </Col>
          <Col xs={4} style={{ paddingTop: "10px" }}>
            {/* from here */}
            <div
              show={showEdit}
              style={{ display: showEdit ? "block" : "none" }}>
              {" "}
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
                variant='dark'
                onClick={this.handleSave}>
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
                  <Form.Label>Dish Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder=''
                    style={{ backgroundColor: "#eeee" }}
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
                        style={{ height: "90%", backgroundColor: "#eeee" }}
                        as='textarea'
                        rows={5}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Picture</Form.Label>
                      <Form
                        method='post'
                        action='#'
                        id='#'
                        style={{
                          height: "100%",
                        }}>
                        <div
                          style={{
                            height: "90%",
                            width: "100%",
                            border: "2px dashed black",
                            backgroundColor: "#eeee",
                          }}>
                          <h6>Add Image</h6>
                          <input
                            type='file'
                            display='none'
                            style={{
                              height: "90%",
                              width: "100%",
                              opacity: "10",
                              position: "absolute",
                            }}
                            rows={5}
                          />
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Form.Group>
                <br />
                <Row>
                  <Col>
                    <Form.Label>Catergories</Form.Label>
                    <Dropdown
                      style={{
                        width: "100%",
                      }}>
                      <Dropdown.Toggle
                        variant='light'
                        style={{
                          backgroundColor: "#eeee",
                          width: "90%",
                        }}>
                        Select the dish Category
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        variant='light'
                        style={{ width: "inherit" }}>
                        <Dropdown.Item href='#/action-1'>Main</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Sides</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <br />
                  </Col>
                  <Col>
                    <Form.Label>Dietary</Form.Label>
                    <Dropdown
                      style={{
                        width: "90%",
                      }}>
                      <Dropdown.Toggle
                        variant='light'
                        style={{ backgroundColor: "#eeee" }}>
                        Select the dish type
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        variant='light'
                        style={{ width: "inherit" }}>
                        <Dropdown.Item href='#/action-1'>Veg</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>NonVeg</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Vegan</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <br />
                  </Col>
                </Row>

                <Form>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formHorizontalEmail'>
                    <Form.Label column sm={8}>
                      Price
                    </Form.Label>
                    <Col sm={4}>
                      <Form.Control
                        type='number'
                        placeholder=''
                        style={{ backgroundColor: "#eeee" }}
                      />
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
                      <Form.Control
                        type='number'
                        placeholder=''
                        style={{ backgroundColor: "#eeee" }}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Form>
            </div>
            {/* till here */}
          </Col>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default MenuUpdate;
