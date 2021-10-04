/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Avatar from "react-avatar";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";
import axios from "axios";
import "react-times/css/classic/default.css";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Container,
  Col,
  Card,
  Row,
  Alert,
} from "react-bootstrap";
import { getToken } from "../../Service/authService";
import Header from "../../Home/HomeIcons/Header";
import ProfileRow from "./ProfileRow";
import { updateCustomer } from "../../../Actions/CustomerActions";
import backendServer from "../../../backEndConfig";

class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  componentDidMount = () => {
    const { customerDetails } = this.props;
    this.setState({
      ...customerDetails,
    });
  };

  componentDidUpdate = (prevprops) => {
    if (this.props.customerDetails !== prevprops.customerDetails) {
      const { customerDetails } = this.props;
      this.setState({
        ...customerDetails,
      });
    }
  };

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

  handleUploadImage(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.fileInput.files[0]);
    const uploadConfig = {
      headers: {
        "content-type": "multipart/form-data",
        authorization: getToken(),
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
        this.setState({
          src: `${backendServer}/public/${response.data}`,
          profile_pic_file_path: response.data,
        });
      })
      .catch((err) => {
        console.log("Upload file error: ", err.response);
      });
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ state: val });
  }

  render() {
    const {
      email_id,
      name,
      nick_name,
      phone_num,
      address_line_1,
      date_of_birth,
      city,
      state,
      password,
      country,
      zipcode,
      profile_pic_file_path,
    } = this.state;
    const src = `${backendServer}/public/${profile_pic_file_path}`;
    const { updateerrMsg } = this.props;

    let errorMessage = "";
    if (updateerrMsg) {
      errorMessage = updateerrMsg;
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
                    </div>
                    <input
                      type='file'
                      name='image'
                      encType='multipart/form-data'
                      className='form-control'
                      style={{ display: "none" }}
                      accept='image/*'
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
                    nameField='nick_name'
                    typeField='text'
                    maxLength='32'
                    valueField={nick_name}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField={false}
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Date of Birth'
                    nameField='date_of_birth'
                    typeField='date'
                    maxLength={null}
                    valueField={date_of_birth}
                    patternField={null}
                    requiredField={false}
                    changeHandler={this.handleChange}
                  />
                  <h5>Security Info</h5>
                  <ProfileRow
                    FieldName='Password Update'
                    nameField='password'
                    maxLength='32'
                    typeField='password'
                    valueField={password}
                    patternField='^[A-Za-z0-9 ]+$'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                </Col>
                <Col>
                  <h4>Contact Info</h4>
                  <ProfileRow
                    FieldName='Email'
                    nameField='email_id'
                    typeField='email'
                    maxLength='32'
                    valueField={email_id}
                    patternField={null}
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <ProfileRow
                    FieldName='Phone Number'
                    nameField='phone_num'
                    typeField='text'
                    valueField={phone_num}
                    patternField='^[0-9]+$'
                    maxLength='10'
                    requiredField
                    changeHandler={this.handleChange}
                  />
                  <h4>Address Info</h4>
                  <ProfileRow
                    FieldName='Address Line1'
                    nameField='address_line_1'
                    typeField='text'
                    valueField={address_line_1}
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
                        whitelist={{ US: ["CA"] }}
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
                        <Alert
                          style={{
                            fontFamily:
                              "UberMoveText-Medium,Helvetica,sans-serif",
                          }}
                          variant='error'>
                          {errorMessage}
                        </Alert>
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
  customerDetails: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errMsg: state.customer.errMsg,
  customerDetails: state.customer.customerDetails.user,
});

export default connect(mapStateToProps, { updateCustomer })(CustomerProfile);
