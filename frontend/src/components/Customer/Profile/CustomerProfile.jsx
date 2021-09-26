/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Avatar from "react-avatar";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";
import axios from "axios";
import "react-times/css/classic/default.css";
import { connect } from "react-redux";
import { Button, Form, Container, Col, Card, Row } from "react-bootstrap";
import { getToken } from "../../Service/authService";
import Header from "../../Home/HomeIcons/Header";
import ProfileRow from "./ProfileRow";
import { updateCustomer } from "../../../Actions/CustomerActions";
import backendServer from "../../../backEndConfig";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      state: "",
      phoneNumber: "",
      dob: "",
      nickname: "",
      name: "",
      emailId: "",
      newpassword: "",
      oldpassword: "",
      addressline1: "",
      city: "",
      zipcode: "",
      file: null,
      preview: null,
      src: "",
    };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangesSubmit = (e) => {
    e.preventDefault();
    const details = { ...this.state };
    this.props.updateCustomer(details);
  };

  // handleUploadImage(e) {
  //   e.preventDefault();

  //   const data = new FormData();
  //   data.append("file", this.fileInput.files[0]);
  //   console.log("File Details ", this.fileInput.files);
  //   // data.append("filename", this.fileName.value);
  //   axios.defaults.headers.common.authorization = getToken();
  //   axios.defaults.withCredentials = true;
  //   axios
  //     .post(`${backendServer}/ubereats/upload/profile_upload`, data)
  //     .then((response) => {
  //       console.log("Response from server ", response.data);
  //       this.setState({
  //         src: `${backendServer}/${response.data.file}`,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Upload file error: ", err.response);
  //     });

  //   // fetch("http://localhost:8000/upload", {
  //   //   method: "POST",
  //   //   body: data,
  //   // }).then((response) => {
  //   //   response.json().then((body) => {
  //   //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
  //   //   });
  //   // });
  // }

  handleUploadImage(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("image", this.fileInput.files[0]);

    const uploadConfig = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: localStorage.getItem("jwtToken"),
      },
    };
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    axios
      .post(
        `${backendServer}/ubereats/upload/profile_upload`,
        data,
        uploadConfig
      )
      .then((response) => {
        console.log("Response from server ", response.data);
        this.setState({
          src: `${backendServer}/public/${response.data}`,
        });
      })
      .catch((err) => {
        console.log("Upload file error: ", err.response);
      });
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ state: val });
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
      state,
      addressline1,
      dob,
      city,
      zipcode,
      file,
      emailId,
      name,
      newpassword,
      oldpassword,
      phoneNumber,
      nickname,
      src,
    } = this.state;
    const { updateerrMsg } = this.props;

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
                      {/* <Avatar
                        width={390}
                        height={295}
                        onCrop={this.onCrop}
                        onClose={this.onClose}
                        src={this.state.src}
                      /> */}
                      <img src={src} alt='Preview' />
                      {/* {imgPreview} */}
                    </div>
                    <input
                      type='file'
                      name='image'
                      encType='multipart/form-data'
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
                        onClick={this.handleUploadImage}>
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
                    maxLength='32'
                    patternField='^[A-Za-z ]+$'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Nick Name'
                    nameField='nickname'
                    typeField='text'
                    maxLength='32'
                    valueField={nickname}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField={false}
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Date of Birth'
                    nameField='dob'
                    typeField='date'
                    maxLength={null}
                    valueField={dob}
                    patternField={null}
                    requiredField={false}
                    changeHandler={this.handleChange}
                  />
                  <h5>Security Info</h5>
                  <ProfileRow
                    FieldName='Old Password'
                    nameField='oldpassword'
                    maxLength='32'
                    typeField='password'
                    valueField={oldpassword}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='New Password'
                    nameField='newpassword'
                    maxLength='32'
                    typeField='password'
                    valueField={newpassword}
                    patternField='^[A-Za-z0-9 ]+$'
                    changeHandler={this.handleChange}
                  />
                </Col>
                <Col>
                  <h4>Contact Info</h4>
                  <ProfileRow
                    FieldName='Email'
                    nameField='emailId'
                    typeField='email'
                    maxLength='32'
                    valueField={emailId}
                    patternField={null}
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Phone Number'
                    nameField='phoneNumber'
                    typeField='text'
                    valueField={phoneNumber}
                    patternField='^[0-9]+$'
                    maxLength='10'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <h4>Address Info</h4>
                  <ProfileRow
                    FieldName='Address Line1'
                    nameField='addressline1'
                    typeField='text'
                    valueField={addressline1}
                    patternField={null}
                    maxLength='32'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='City'
                    nameField='city'
                    typeField='text'
                    valueField={city}
                    patternField={null}
                    requiredField
                    maxLength='32'
                    changeHandler={this.handleChange}
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
                        name='state'
                        disableWhenEmpty
                        country={country}
                        value={state}
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
                    nameField='zipcode'
                    typeField='number'
                    valueField={zipcode}
                    maxLength='32'
                    patternField='^[0-9]+$'
                    requiredField
                    changeHandler={this.handleChange}
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
