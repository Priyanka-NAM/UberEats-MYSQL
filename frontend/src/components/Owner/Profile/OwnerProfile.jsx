/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { connect } from "react-redux";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import axios from "axios";
import TimePicker from "react-times";
import "react-times/css/classic/default.css";
import PropTypes from "prop-types";
import { Button, Form, Col, Card, Row } from "react-bootstrap";
import FormTextBox from "./FormTextBox";
import OwnerHome from "../../Home/OwnerHome";
import backendServer from "../../../backEndConfig";
import { getToken } from "../../Service/authService";
import { updateOwner } from "../../../Actions/OwnerActions";

class OwnerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // country: "",
      // state: "",
      // phoneNumber: "",
      // emailId: "",
      // newpassword: "",
      // addressline1: "",
      // city: "",
      // zipcode: "",
      // hour: "",
      // minute: "",
      // ehour: "",
      // eminute: "",
    };
    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setStateFromProps = this.setStateFromProps.bind(this);
  }

  componentDidMount = () => {
    const { ownerDetails } = this.props;
    this.setStateFromProps(this.props);
  };

  componentDidUpdate = (newprops, prevprops) => {
    if (newprops.ownerDetails !== prevprops.ownerDetails) {
      const { ownerDetails } = newprops;
      this.setStateFromProps(ownerDetails);
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
    console.log("Details before calling update owner action ", details);
    this.props.updateOwner(details);
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
          image_file_path: response.data,
        });
      })
      .catch((err) => {
        console.log("Upload file error: ", err.response);
      });
  }

  onStartTimeChange = (options) => {
    console.log("Start Time Change Handler ", options);
    const { hour, minute } = options;

    this.setState({ hour, minute });
  };

  onEndTimeChange = (options) => {
    console.log("End Time Change Handler ", options);

    const { ehour, eminute } = options;
    this.setState({ ehour, eminute });
  };

  setStateFromProps = (ownerDetails) => {
    console.log("Owner details in component did mount ", ownerDetails);
    let hour;
    let minute;
    let ehour;
    let eminute;
    const { restaurant_start_time, restaurant_end_time } = ownerDetails;
    if (restaurant_start_time) {
      const start_split_times = restaurant_start_time.split(":");
      [hour, minute] = start_split_times;
    }
    if (restaurant_end_time) {
      const end_split_times = restaurant_end_time.split(":");
      [ehour, eminute] = end_split_times;
    }
    this.setState({
      ...ownerDetails,
      hour,
      minute,
      ehour,
      eminute,
    });
  };

  selectCountry(val) {
    this.setState({ restaurant_country: val });
  }

  selectRegion(val) {
    this.setState({ restaurant_state: val });
  }

  render() {
    console.log("Owner Profile State ", this.state);
    const {
      description,
      restaurant_country,
      restaurant_address_line_one,
      restaurant_city,
      restaurant_state,
      restaurant_zipcode,
      email_id,
      name,
      newpassword,
      phone_num,
      restaurant_start_time,
      restaurant_end_time,
      // ehour,
      // eminute,
      // hour,
      // minute,
      image_file_path,
    } = this.state;

    const src = `${backendServer}/public/${image_file_path}`;
    const { updateerrMsg } = this.props;

    let errorMessage = "";
    if (updateerrMsg) {
      errorMessage = updateerrMsg;
      console.log(errorMessage);
    }
    const pageContent = (
      <Col align='left'>
        <Form style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
          <Row style={{ padding: "0px", fontFamily: "sans-serif" }}>
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
                    src={src}
                  />
                  <input
                    type='file'
                    name='image'
                    encType='multipart/form-data'
                    className='form-control'
                    style={{ display: "none" }}
                    // eslint-disable-next-line no-return-assign
                    ref={(fileInput) => (this.fileInput = fileInput)}
                  />
                </Card.Body>
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
                    style={{ paddingTop: "10px", width: "50%" }}
                    onClick={this.handleUploadImage}>
                    Upload
                  </Button>
                </Card.Footer>
              </Card>
              <br />
              <h5>Basic Info</h5>
              <FormTextBox
                FieldName='Restaurant Name'
                nameField='name'
                typeField='text'
                valueField={name}
                maxLength='32'
                patternField='^[A-Za-z ]+$'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              <br />
              <Form>
                <Row>
                  <Col xs={2}>
                    <Form.Label>Description</Form.Label>
                  </Col>
                  <Col xs={6}>
                    <Form.Control
                      name='description'
                      value={description}
                      as='textarea'
                      onChange={this.handleChange}
                      rows={3}
                    />
                  </Col>
                </Row>
              </Form>
              <br />
              <h4>Contact Info</h4>
              <FormTextBox
                FieldName='Email'
                nameField='emailId'
                typeField='email'
                maxLength='32'
                valueField={email_id}
                patternField={null}
                requiredField='true'
                changeHandler={this.handleChange}
              />
              <br />
              <FormTextBox
                FieldName='Phone Number'
                nameField='phone_num'
                typeField='text'
                valueField={phone_num}
                patternField='^[0-9]+$'
                maxLength='10'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              <br />
              <FormTextBox
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
              <h5>Address Info</h5>
              <FormTextBox
                FieldName='Address Line1'
                nameField='restaurant_address_line_one'
                typeField='text'
                valueField={restaurant_address_line_one}
                patternField={null}
                maxLength='32'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              <br />
              <FormTextBox
                FieldName='City'
                nameField='restaurant_city'
                typeField='text'
                valueField={restaurant_city}
                patternField={null}
                requiredField='true'
                maxLength='32'
                changeHandler={this.handleChange}
              />
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
                      whitelist={{ US: ["CA"] }}
                      country={restaurant_country}
                      value={restaurant_state}
                      name='restaurant_state'
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
                      name='restaurant_country'
                      style={{
                        width: "100%",
                        height: "2.6rem",
                        borderColor: "#eeeee",
                      }}
                      whitelist={["US"]}
                      value={restaurant_country}
                      onChange={(val) => this.selectCountry(val)}
                    />
                  </Col>
                </Row>
              </Form>
              <br />
              <FormTextBox
                FieldName='Zip Code'
                nameField='restaurant_zipcode'
                typeField='number'
                valueField={restaurant_zipcode}
                maxLength='32'
                patternField='^[0-9]+$'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              <br />
              <h4>Restaurant Timings</h4>
              <FormTextBox
                FieldName='Restaurant Start Time'
                nameField='restaurant_start_time'
                typeField='text'
                valueField={restaurant_start_time}
                patternField='([01]?[0-9]|2[0-3]):[0-5][0-9]'
                maxLength='10'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              {/* <Form>
                <Row>
                  <Col xs={2}>
                    <Form.Label>Start Time</Form.Label>
                  </Col>
                  <Col xs={6}>
                   
                     <TimePicker
                      theme='classic'
                      name='starttime'
                      onTimeChange={this.onStartTimeChange}
                      time={hour && minute ? `${hour}:${minute}` : null}
                    /> 
                  </Col>
                </Row>
              </Form> */}
              <br />
              <FormTextBox
                FieldName='Restaurant End Time'
                nameField='restaurant_end_time'
                typeField='text'
                valueField={restaurant_end_time}
                maxLength='10'
                patternField='([01]?[0-9]|2[0-3]):[0-5][0-9]'
                requiredField='true'
                changeHandler={this.handleChange}
              />
              {/* <Form>
                <Row>
                  <Col xs={2}>
                    <Form.Label>End Time</Form.Label>
                  </Col>
                  <Col xs={6}>
                    
                    <TimePicker
                      name='endtime'
                      theme='classic'
                      onTimeChange={this.onEndTimeChange}
                      time={ehour && eminute ? `${ehour}:${eminute}` : null}
                    /> 
                  </Col>
                </Row>
              </Form> */}
              <br />
              <h4>Working Days</h4>
              <Form>
                <Row>
                  <Col xs={2}>
                    <Form.Label>Working Days</Form.Label>
                  </Col>
                  <Col
                    xs={6}
                    style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                    <Form.Check
                      inline
                      label='Sun'
                      name='sun'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Mon'
                      name='mon'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Tue'
                      name='tue'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Wed'
                      name='wed'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Thr'
                      name='thr'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Fri'
                      name='fri'
                      changeHandler={this.handleChange}
                    />
                    <Form.Check
                      inline
                      label='Sat'
                      name='sat'
                      changeHandler={this.handleChange}
                    />
                  </Col>
                </Row>
              </Form>
              <br />
              <br />
              <Form>
                <Row>
                  <Col>
                    <Button variant='dark' onClick={this.handleChangesSubmit}>
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Form>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

OwnerProfile.propTypes = {
  updateOwner: PropTypes.func.isRequired,
  updateerrMsg: PropTypes.string.isRequired,
  ownerDetails: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errMsg: state.customer.errMsg,
  ownerDetails: state.owner.ownerDetails.user,
});

export default connect(mapStateToProps, { updateOwner })(OwnerProfile);
