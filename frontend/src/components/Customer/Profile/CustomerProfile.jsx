/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Avatar from "react-avatar";
import PropTypes from "prop-types";
import "react-times/css/classic/default.css";
import { connect } from "react-redux";
import { Button, Form, Container, Col, Card, Row } from "react-bootstrap";
import Header from "../../Home/HomeIcons/Header";
import ProfileRow from "./ProfileRow";
import { updateCustomer } from "../../../Actions/CustomerActions";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "", file: null };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangesSubmit = (e) => {
    e.preventDefault();
    const {
      country,
      region,
      AddressLine,
      dob,
      city,
      zipcode,
      file,
      emailId,
      name,
      phoneNumber,
      nickname,
    } = this.state;
    const details = {
      country,
      region,
      AddressLine,
      dob,
      city,
      zipcode,
      file,
      emailId,
      name,
      phoneNumber,
      nickname,
    };
    this.props.updateCustomer(details);
  };

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
    const {
      country,
      region,
      AddressLine,
      dob,
      city,
      zipcode,
      file,
      emailId,
      name,
      phoneNumber,
      nickname,
    } = this.state;
    const { updateerrMsg } = this.props;
    let imgPreview;
    if (file) {
      imgPreview = <img src={file} alt='' />;
    }
    let errorMessage = "";
    if (updateerrMsg) {
      errorMessage = updateerrMsg;
      console.log(errorMessage);
    }
    return (
      <Container fluid='true' style={{ overflow: "hidden", marginLeft: "2%" }}>
        <Row>
          <Header />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <Form
            onSubmit={this.handleChangesSubmit}
            style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
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
                      name='image'
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
                  <ProfileRow
                    FieldName='Name'
                    nameField='name'
                    typeField='text'
                    valueField={name}
                    patternField='^[A-Za-z]+$'
                    requiredField
                    onChange={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Nick Name'
                    nameField='nickname'
                    typeField='text'
                    valueField={nickname}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField={false}
                    onChange={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Date of Birth'
                    nameField='dob'
                    typeField='date'
                    valueField={dob}
                    patternField={null}
                    requiredField={false}
                    onChange={this.handleChange}
                  />
                  <h5>Security Info</h5>
                  <ProfileRow
                    FieldName='Old Password'
                    nameField='oldpassword'
                    typeField='password'
                    valueField={null}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField
                    onChange={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='New Password'
                    nameField='newpassword'
                    typeField='password'
                    valueField={null}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField
                    onChange={this.handleChange}
                  />
                </Col>
                <Col>
                  <h4>Contact Info</h4>
                  <ProfileRow
                    FieldName='Email'
                    nameField='emailId'
                    typeField='email'
                    valueField={emailId}
                    patternField={null}
                    requiredField
                    onChange={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Phone Number'
                    nameField='phoneNumber'
                    typeField='number'
                    valueField={phoneNumber}
                    patternField='^[0-9]+$'
                    requiredField
                    onChange={this.handleChange}
                  />
                  <h4>Address Info</h4>
                  <ProfileRow
                    FieldName='Address Line1'
                    nameField='AddressLine'
                    typeField='text'
                    valueField={AddressLine}
                    patternField={null}
                    requiredField
                    onChange={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='City'
                    nameField='City'
                    typeField='text'
                    valueField={city}
                    patternField={null}
                    requiredField
                    onChange={this.handleChange}
                  />
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
                        name='region'
                        disableWhenEmpty
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)}
                      />
                    </Col>
                  </Row>
                  <br />
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
                        name='country'
                        whitelist={["US"]}
                        value={country}
                        onChange={(val) => this.selectCountry(val)}
                      />
                    </Col>
                  </Row>
                  <br />
                  <ProfileRow
                    FieldName='Zip Code'
                    nameField='zipCode'
                    typeField='number'
                    valueField={zipcode}
                    patternField='^[0-9]+$'
                    requiredField
                    onChange={this.handleChange}
                  />
                  <br />
                  <Row>
                    <Col xs={2}>
                      <Button variant='dark' type='submit'>
                        Save Changes
                      </Button>
                      {errorMessage && (
                        <p
                          style={{
                            width: "100%",
                            marginTop: "15px",
                            fontFamily:
                              "UberMoveText-Medium,Helvetica,sans-serif",
                          }}
                          className='alert alert-danger'>
                          {errorMessage}
                        </p>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

CustomerProfile.propTypes = {
  updateCustomer: PropTypes.func.isRequired,
  updateerrMsg: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isRegistered: state.customer.isRegistered,
  custosignup: state.customer.user,
  errMsg: state.customer.errMsg,
});

export default connect(mapStateToProps, { updateCustomer })(CustomerProfile);
