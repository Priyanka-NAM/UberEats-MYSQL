/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { PropTypes } from "prop-types";
import axios from "axios";
import { Button, Form, Col, Image, Alert, Row } from "react-bootstrap";
import backendServer from "../../../backEndConfig";
import { getToken } from "../../Service/authService";

class MenuAddEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleSubmit = (e) => {
    const { visibilityCb } = this.props;
    e.preventDefault();
    const {
      dishId,
      restaurentId,
      dishname,
      dishdescription,
      image,
      dishcategory,
      dishtype,
      ingredients,
      price,
    } = this.state;
    const dishdata = {
      dishId,
      restaurentId,
      dishname,
      dishdescription,
      image,
      dishcategory,
      dishtype,
      ingredients,
      price,
    };

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
        `${backendServer}/ubereats/dishes/updatedish`,
        dishdata,
        uploadConfig
      )
      .then((response) => {
        this.setState({
          updateStatus: response.data.status,
        });
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          this.setState({
            updateStatus: err.response.data,
          });
        }
      });
    visibilityCb();
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
        });
      })
      .catch((err) => {
        console.log("Upload file error: ", err.response);
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { displayDetails, actionType, currentDish } = this.props;
    let name = "";
    let description = "";
    let ingredients = "";
    let price = "";
    let category = "";
    let dishType = "";
    if (currentDish) {
      name = currentDish.name;
      description = currentDish.description;
      ingredients = currentDish.ingredients;
      price = currentDish.price;
      category = currentDish.category;
      dishType = currentDish.dish_type;
    }

    const { updateStatus, src } = this.state;
    let alertmessage = null;
    if (updateStatus === "DISH_UPDATE_SUCCESS") {
      alertmessage = <Alert variant='success'>Dish is updated.</Alert>;
    } else if (updateStatus === "DISH_UPDATE_FAILURE") {
      alertmessage = <Alert variant='danger'>Unable to update this dish</Alert>;
    }
    return (
      <div>
        {/* show={displayDetails}
        style={{ display: displayDetails ? "block" : "none" }}> */}
        <h4
          style={{
            fontSize: "28px",
            fontFamily: "sans-serif",
            paddingBottom: "0%",
          }}>
          {actionType}
        </h4>

        <Form
          style={{
            width: "90%",
            marginTop: "25px",
            fontFamily: "sans-serif",
            fontSize: "18px",
          }}
          onSubmit={this.handleSubmit}>
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
            type='submit'>
            Save
          </Button>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Dish Name</Form.Label>
            <Form.Control
              type='name'
              name='dishname'
              required
              placeholder=''
              value={name}
              onChange={this.handleChange}
              style={{ backgroundColor: "#eeee" }}
            />
          </Form.Group>
          <br />
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Row>
              <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  style={{ height: "90%", backgroundColor: "#eeee" }}
                  as='textarea'
                  name='dishdescription'
                  value={description}
                  required
                  rows={5}
                  onChange={this.handleChange}
                />
              </Col>
              <Col>
                <Form.Label>Picture</Form.Label>
                <Form
                  name='image'
                  style={{
                    height: "100%",
                  }}>
                  <div
                    style={{
                      height: "90%",
                      width: "100%",
                      border: "2px dashed black",
                      backgroundColor: "#eeee",
                    }}
                    role='presentation'
                    onClick={() => this.fileInput.click()}>
                    <h6>Add Image</h6>
                    <input
                      type='file'
                      style={{
                        height: "90%",
                        width: "100%",
                        opacity: "10",
                        position: "absolute",
                        display: "none",
                      }}
                      // eslint-disable-next-line no-return-assign
                      ref={(fileInput) => (this.fileInput = fileInput)}
                      rows={5}
                      //   onClick={this.handleUploadImage}
                      //   src={src}
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

              <Form.Select
                name='dishcategory'
                style={{
                  backgroundColor: "#eeee",
                }}
                value={category}
                onChange={this.handleChange}
                required>
                <option>Select Category</option>
                <option value='1'>Appetizer</option>
                <option value='2'>Salads</option>
                <option value='3'>Main Course</option>
                <option value='4'>Desserts</option>
                <option value='5'>Beverages</option>
                <option value='6'>Others</option>
              </Form.Select>
              <br />
            </Col>
            <Col>
              <Form.Label>Dietary</Form.Label>
              <Form.Select
                name='dishtype'
                onChange={this.handleChange}
                style={{
                  backgroundColor: "#eeee",
                }}
                value={dishType}
                required>
                <option>Select Dietary</option>
                <option value='1'>Veg</option>
                <option value='2'>NonVeg</option>
                <option value='3'>Vegan</option>
              </Form.Select>
              <br />
            </Col>
          </Row>
          <Form.Group
            className='mb-3'
            required
            controlId='exampleForm.ControlInput1'>
            <Form.Label>Main Ingredients</Form.Label>
            <Form.Control
              type='name'
              name='ingredients'
              value={ingredients}
              placeholder=''
              onChange={this.handleChange}
              style={{ backgroundColor: "#eeee" }}
            />
          </Form.Group>
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
                  name='price'
                  value={price}
                  onChange={this.handleChange}
                  required
                  placeholder='$'
                  style={{ backgroundColor: "#eeee" }}
                />
              </Col>
            </Form.Group>
          </Form>
          {alertmessage}
        </Form>
      </div>
    );
  }
}

export default MenuAddEdit;

MenuAddEdit.propTypes = {
  //   IsDeliveredimage: PropTypes.bool.isRequired,
  //   orderId: PropTypes.number.isRequired,
  //   name: PropTypes.string.isRequired,
  //   subTotal: PropTypes.number.isRequired,
  //   orderTotal: PropTypes.number.isRequired,
  //   tax: PropTypes.number.isRequired,
  displayDetails: PropTypes.bool.isRequired,
  actionType: PropTypes.string.isRequired,
  visibilityCb: PropTypes.func.isRequired,
  currentDish: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  //   dishes: PropTypes.object.isRequired,
};
