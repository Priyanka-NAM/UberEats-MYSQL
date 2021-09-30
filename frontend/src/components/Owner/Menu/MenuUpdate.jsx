/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { FaPlus, FaGripLines } from "react-icons/fa";
import axios from "axios";

import { Button, Col, Image, Alert, Row } from "react-bootstrap";
import OwnerHome from "../../Home/OwnerHome";
import { getToken } from "../../Service/authService";
import MenuNav from "./MenuNav";
import MenuAddEdit from "./MenuAddEdit";
import OwnerMenuCard from "./OwnerMenuCard";

class MenuUpdate extends Component {
  hasMounted = false;

  constructor(props) {
    super(props);
    this.state = { showEdit: false, showAdd: false };
  }

  componentDidMount() {
    this.hasMounted = true;

    const { restaurant_id: restaurantId } = JSON.parse(
      localStorage.getItem("user")
    );

    console.log(" restaurantId: ", restaurantId);
    if (!restaurantId) return;
    axios.defaults.headers.common.authorization = getToken();
    axios
      // .get(
      //   `http://localhost:5000/ubereats/dishes/alldishes/${restaurantId}`
      // )
      .get(`http://localhost:5000/ubereats/dishes/alldishes/2`)
      .then((response) => {
        console.log("Response: ", JSON.stringify(response.data));

        if (response.data.status === "ALL_DISHES") {
          if (this.hasMounted) {
            this.setState({
              allDishes: response.data.allDishes,
            });
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this.setState({
            errormessage: "Dishes Could not be Fetched",
          });
        }
      });
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  handleEdit = (index) => {
    const { allDishes } = this.state;
    this.setState({
      showEdit: true,
      showAdd: false,
      currentDish: allDishes[index],
    });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.setState({
      showAdd: true,
      showEdit: false,
    });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: false,
    });
  };

  handleAddSave = (e) => {
    e.preventDefault();
    this.setState({
      showAdd: false,
    });
  };

  visibilityEditHandler = (e) => {
    const { showEdit } = this.state;
    this.setState({
      showEdit: !showEdit,
    });
  };

  visibilityAddHandler = (e) => {
    const { showAdd } = this.state;
    this.setState({
      showAdd: !showAdd,
    });
  };

  render() {
    const { showEdit, showAdd, errormessage, allDishes, currentDish } =
      this.state;
    console.log("allDishes", allDishes);
    let orderComps = null;
    if (!allDishes || allDishes.length === 0) {
      orderComps = <Alert variant='info'>No Dishes to Display</Alert>;
    } else {
      orderComps = allDishes.map((dish, index) => (
        <OwnerMenuCard
          key={index}
          orderIndex={index}
          dishName={dish.name}
          dishDescription={dish.description}
          dishPrice={dish.price}
          handleEdit={this.handleEdit}
        />
      ));
    }
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
              onClick={this.handleAdd}
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
            {errormessage}
            <Row style={{ paddingTop: "40px", width: "90%" }}>
              <thead style={{ marginBottom: "25px" }}>
                <tr>
                  <th
                    style={{
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}>
                    <FaGripLines style={{ backgroundColor: "#eeeee" }} />
                    <span style={{ paddingLeft: "15px" }}>Appetizers</span>
                  </th>
                </tr>
              </thead>
              <Row>{orderComps}</Row>
            </Row>
            <Row style={{ paddingTop: "40px", width: "90%" }}>
              <thead style={{ marginBottom: "25px" }}>
                <tr>
                  <th
                    style={{
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}>
                    <FaGripLines style={{ backgroundColor: "#eeeee" }} />
                    <span style={{ paddingLeft: "15px" }}>Salads</span>
                  </th>
                </tr>
              </thead>
            </Row>
            <Row style={{ paddingTop: "40px", width: "90%" }}>
              <thead style={{ marginBottom: "25px" }}>
                <tr>
                  <th
                    style={{
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}>
                    <FaGripLines style={{ backgroundColor: "#eeeee" }} />
                    <span style={{ paddingLeft: "15px" }}>Main Course</span>
                  </th>
                </tr>
              </thead>
            </Row>
            <Row style={{ paddingTop: "40px", width: "90%" }}>
              <thead style={{ marginBottom: "25px" }}>
                <tr>
                  <th
                    style={{
                      fontSize: "22px",
                      fontFamily: "sans-serif",
                    }}>
                    <FaGripLines style={{ backgroundColor: "#eeeee" }} />
                    <span style={{ paddingLeft: "15px" }}>Salads</span>
                  </th>
                </tr>
              </thead>
            </Row>
          </Col>
          <Col xs={4} style={{ paddingTop: "10px" }}>
            <div
              show={showEdit.toString()}
              style={{ display: showEdit ? "block" : "none" }}>
              <MenuAddEdit
                visibilityCb={this.visibilityEditHandler}
                currentDish={currentDish}
                displayDetails={showEdit}
                actionType='Edit Item'
              />
            </div>
            <div
              show={showAdd.toString()}
              style={{ display: showAdd ? "block" : "none" }}>
              <MenuAddEdit
                visibilityCb={this.visibilityAddHandler}
                displayDetails={showAdd}
                actionType='Add Item'
              />
            </div>
          </Col>
        </Row>
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default MenuUpdate;
