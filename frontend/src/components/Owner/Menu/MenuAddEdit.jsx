/* eslint-disable camelcase */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { PropTypes } from "prop-types";
import axios from "axios";
import { Button, Form, Col, Image, Alert, Row, Card } from "react-bootstrap";
import backendServer from "../../../backEndConfig";
import { getToken } from "../../Service/authService";

class MenuAddEdit extends Component {
  hasMounted = false;

  constructor(props) {
    super(props);
    this.state = {};
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setStateFromProps = this.setStateFromProps.bind(this);
  }

  componentDidMount() {
    this.hasMounted = true;
    this.setStateFromProps(this.props);
    console.log("Menu AddEdit State after mount ", this.state);
  }

  componentDidUpdate(prevProps) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.currentDish !== prevProps.currentDish) {
      this.setStateFromProps(this.props);
    }
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleAddSave = (e) => {
    const { visibilityCb } = this.props;
    e.preventDefault();
    console.log("Inside Handle Add Save ", this.state);
    const {
      restaurentId,
      dishname,
      dishdescription,
      dishcategory,
      dishtype,
      ingredients,
      price,
      imageFilePath,
    } = this.state;

    const dishdata = {
      restaurentId,
      dishname,
      dishdescription,
      imageFilePath,
      dishcategory,
      dishtype,
      ingredients,
      price,
    };
    console.log("Before the add dish call ");
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    axios
      .post(`${backendServer}/ubereats/dishes/adddish`, dishdata)
      .then((response) => {
        console.log("Response for dish add ", response.data);
        if (this.hasMounted) {
          this.setState({
            updateStatus: response.data.status,
          });
        }
      })
      .catch((err) => {
        console.log("Error for dish add ", err.response);
        if (err.response && err.response.data) {
          if (this.hasMounted) {
            this.setState({
              updateStatus: err.response.data,
            });
          }
        }
      });
    visibilityCb();
  };

  handleEditSave = (e) => {
    const { visibilityCb } = this.props;
    e.preventDefault();
    console.log("Inside Handle Submit ", this.state);
    const isActive = "1";
    const {
      dishId,
      restaurentId,
      dishname,
      dishdescription,
      dishcategory,
      dishtype,
      ingredients,
      price,
      imageFilePath,
    } = this.state;

    // isActive (should be '0' for deleting)
    const dishdata = {
      dishId,
      restaurentId,
      dishname,
      dishdescription,
      imageFilePath,
      dishcategory,
      dishtype,
      ingredients,
      price,
      isActive,
    };
    console.log("Before the update dish call ");
    // const uploadConfig = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //     authorization: getToken(),
    //   },
    // };
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    axios
      .post(`${backendServer}/ubereats/dishes/updatedish`, dishdata)
      .then((response) => {
        console.log("Response for dish update ", response.data);
        if (this.hasMounted) {
          this.setState({
            updateStatus: response.data.status,
          });
        }
      })
      .catch((err) => {
        console.log("Error for dish update ", err.response);
        if (err.response && err.response.data) {
          if (this.hasMounted) {
            this.setState({
              updateStatus: err.response.data,
            });
          }
        }
      });
    visibilityCb();
  };

  handleSubmit = (e) => {
    const { actionType } = this.props;
    if (actionType === "Add Item") {
      this.handleAddSave(e);
    } else {
      this.handleEditSave(e);
    }
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
        console.log("Response from server ", response.data);
        this.setState({
          src: `${backendServer}/public/${response.data}`,
          imageFilePath: `${response.data}`,
        });
      })
      .catch((err) => {
        console.log("Upload file error: ", err.response);
      });
  }

  setStateFromProps = (updatedProps) => {
    const { currentDish } = updatedProps;
    const {
      name,
      description,
      ingredients,
      price,
      category,
      dish_type,
      dish_id,
      restaurant_id,
      image_file_path,
    } = currentDish || {};

    this.setState({
      dishId: dish_id,
      restaurentId: restaurant_id,
      dishname: name,
      dishdescription: description,
      image: image_file_path,
      dishcategory: category,
      dishtype: dish_type,
      ingredients: ingredients,
      price: price,
      imageFilePath: image_file_path,
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { displayDetails, actionType, currentDish } = this.props;
    // let name = "";
    // let description = "";
    // let ingredients = "";
    // let price = "";
    // let category = "";
    // let dishType = "";
    // if (currentDish) {
    //   name = currentDish.name;
    //   description = currentDish.description;
    //   ingredients = currentDish.ingredients;
    //   //   price = currentDish.price;
    //   //   category = currentDish.category;
    //   dishType = currentDish.dish_type;
    // }
    console.log("state inside render of menu add edit ", this.state);
    const {
      dishname: name,
      dishdescription: description,
      dishcategory: category,
      dishtype: dishType,
      ingredients,
      price,
      imageFilePath,
      updateStatus,
    } = this.state;
    const src = `${backendServer}/public/${imageFilePath}`;
    // const {
    //   updateStatus,
    //   src
    // } = this.state;
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
          //   onSubmit={this.handleSubmit}
        >
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
            // type='submit'
            onClick={this.handleSubmit}>
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
                {/* <Form
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
                </Form> */}
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
                <option value='Appetizer'>Appetizer</option>
                <option value='Salads'>Salads</option>
                <option value='Main Course'>Main Course</option>
                <option value='Desserts'>Desserts</option>
                <option value='Beverages'>Beverages</option>
                <option value='Others'>Others</option>
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
                <option value='Vegetarian'>Veg</option>
                <option value='Non Vegetarian'>NonVeg</option>
                <option value='Vegan'>Vegan</option>
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
          {/* <Form> */}
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
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
          {/* </Form> */}
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
