import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TimePicker from "react-times";
import Slider, { Range } from "rc-slider";
import { MdHome, MdBorderColor, MdRestaurant } from "react-icons/md";
import {
  Button,
  Form,
  Nav,
  Container,
  Col,
  Row,
  Navbar,
} from "react-bootstrap";
import UberELogo from "./HomeIcons/logo";

class OwnerHome extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
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
                    <MdRestaurant style={{ marginRight: "18px" }} />
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

            {/* Right panel of profile */}

            <Col align='left'>
              <Row style={{ padding: "0px" }}>
                <Col style={{ marginLeft: "30px" }}>
                  <h4>Profile Picture</h4>

                  <h4>Basic Info</h4>
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Restaurant Name</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Description</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control as='textarea' rows={3} />
                      </Col>
                    </Row>
                  </Form>

                  <h4>Contact Info</h4>
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Email</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Phone Number</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                </Col>
                <Col>
                  <h4>Address Info</h4>
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Addres Line1</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>City</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>State</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <RegionDropdown
                          style={{
                            width: "100%",
                            height: "2.6rem",
                            borderColor: "#eeeee",
                          }}
                          disableWhenEmpty
                          country={country}
                          value={region}
                          onChange={(val) => this.selectRegion(val)}
                        />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Country</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <CountryDropdown
                          style={{
                            width: "100%",
                            height: "2.6rem",
                            borderColor: "#eeeee",
                          }}
                          whitelist={["CA", "US"]}
                          value={country}
                          onChange={(val) => this.selectCountry(val)}
                        />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Zip Code</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <h4>Restaurant Timings</h4>
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Start Time</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <TimePicker disableClock theme='classic' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>End Time</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                  <br />
                  <h4>Working Days</h4>
                  <Form>
                    <Row>
                      <Col xs={2}>
                        <Form.Label>Working Days</Form.Label>
                      </Col>
                      <Col xs={6}>
                        <Form.Control placeholder='' />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default OwnerHome;
