import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TimePicker from "react-times";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "react-times/css/classic/default.css";
import {
  Button,
  Form,
  Nav,
  Container,
  Col,
  Card,
  Row,
  Navbar,
} from "react-bootstrap";
import UberELogo from "../../Home/HomeIcons/logo";
import mainstyle from "../../Home/HomeIcons/HeaderStyle";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "", hour: "", minute: "", file: null };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  onTimeChange(options) {
    const { hour, minute } = options;

    this.setState({ hour, minute });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  uploadSingleFile(e) {
    e.preventDefault();
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
    });
  }

  upload(e) {
    e.preventDefault();
    const { file } = this.state;
    console.log(file);
  }

  render() {
    const { country, region, hour, minute, file } = this.state;
    let imgPreview;
    if (file) {
      imgPreview = <img src={file} alt='' />;
    }
    return (
      <Container fluid='true' style={{ overflow: "hidden", marginLeft: "2%" }}>
        <Row>
          <Col style={{ flex: "1.5", backgroundColor: "white" }} fluid='true'>
            <Nav style={{ marginTop: "2%" }}>
              <Nav.Item>
                <FaBars
                  style={{ height: "50px" }}
                  xs='6'
                  size='24px'
                  color='black'
                  onClick={this.handleShow}
                />
              </Nav.Item>
              <Nav.Item style={mainstyle.paddingLeft}>
                <Link to={{ pathname: "/home", state: "" }}>
                  <img
                    style={{ paddingLeft: "15px", height: "50px" }}
                    src={UberELogo.UberEBLogo.src}
                    alt={UberELogo.UberEBLogo.alt}
                  />
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <Col align='left'>
            <Row style={{ padding: "0px" }}>
              <Col style={{ marginLeft: "30px" }}>
                <h4>Profile Update</h4>
                <Card style={{ width: "16rem", height: "12rem" }}>
                  <div style={{ width: "16rem", height: "8rem" }}>
                    {imgPreview}
                  </div>
                  <input
                    type='file'
                    className='form-control'
                    onChange={this.uploadSingleFile}
                    style={{ display: "none" }}
                    // eslint-disable-next-line no-return-assign
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                  <Card.Footer align='center'>
                    <Button
                      variant='light'
                      style={{
                        paddingTop: "10px",
                        width: "40%",
                        paddingRight: "15px",
                      }}
                      onClick={() => this.fileInput.click()}>
                      Add File
                    </Button>
                    <Button
                      variant='dark'
                      style={{ paddingTop: "10px", width: "40%" }}
                      onClick={this.upload}>
                      Upload
                    </Button>
                  </Card.Footer>
                </Card>
                <br />
                <br />
                <h5>Basic Info</h5>
                <Form>
                  <Row>
                    <Col xs={2}>
                      <Form.Label>Name</Form.Label>
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
                      <Form.Label>Nick Name</Form.Label>
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
                      <Form.Label>Date of Birth</Form.Label>
                    </Col>
                    <Col xs={6}>
                      <Form.Control placeholder='' />
                    </Col>
                  </Row>
                </Form>
                <br />
              </Col>
              <Col>
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
                <br />

                <br />
                <Form>
                  <Row>
                    <Col xs={2}>
                      <Button variant='dark'>Save Changes</Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* end of the profile page */}
      </Container>
    );
  }
}

export default CustomerProfile;
