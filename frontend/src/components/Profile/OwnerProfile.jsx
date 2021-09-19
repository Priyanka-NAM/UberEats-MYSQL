import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import TimePicker from "react-times";
import "react-times/css/classic/default.css";
import Slider, { Range } from "rc-slider";
import { Button, Form, Col, Card, Row } from "react-bootstrap";
import FormTextBox from "../Owner/FormTextBox";

class OwnerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "", hour: "", minute: "" };
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

  render() {
    const { country, region, hour, minute } = this.state;
    return (
      <>
        <Col align='left'>
          <Row style={{ padding: "0px" }}>
            <Col style={{ marginLeft: "30px" }}>
              <h4>Profile Picture</h4>
              <Card style={{ width: "24rem", height: "20rem" }}>
                <Card.Body>
                  <Card.Img
                    style={{
                      width: "20rem",
                      height: "14rem",
                      overflow: "hidden",
                    }}
                    src='https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                  />
                </Card.Body>
                <Card.Footer align='center'>
                  <Button
                    variant='dark'
                    style={{ paddingTop: "10px", width: "50%" }}>
                    Upload
                  </Button>
                </Card.Footer>
              </Card>
              <br />
              <h4>Basic Info</h4>
              <FormTextBox FieldName='Restaurant Name' />
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
              <br />
              <h4>Contact Info</h4>
              <FormTextBox FieldName='Email' />
              <br />
              <FormTextBox FieldName='Phone Number' />
            </Col>
            <Col>
              <h4>Address Info</h4>
              <FormTextBox FieldName='Addres Line1' />
              <br />
              <FormTextBox FieldName='City' />
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
              <FormTextBox FieldName='Zip Code' />
              <br />
              <h4>Restaurant Timings</h4>
              <Form>
                <Row>
                  <Col xs={2}>
                    <Form.Label>Start Time</Form.Label>
                  </Col>
                  <Col xs={6}>
                    <TimePicker
                      theme='classic'
                      withoutIcon
                      onTimeChange={this.onTimeChange}
                      time={hour && minute ? `${hour}:${minute}` : null}
                    />
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
                    <TimePicker theme='classic' />
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
      </>
    );
  }
}

export default OwnerProfile;
