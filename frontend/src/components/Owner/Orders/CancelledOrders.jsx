import React, { Component } from "react";
import "react-times/css/classic/default.css";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import OwnerHome from "../../Home/OwnerHome";
import OrdersNav from "./OrdersNav";
import OrderCard from "./OrderCard";
import OrderDetailsDC from "./OrderDetailsDC";
import backendServer from "../../../backEndConfig";
import { getToken } from "../../Service/authService";

class CancelledOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      .get(
        `http://localhost:5000/ubereats/orders/cancelledorders/restaurant/${restaurantId}`
      )
      .then((response) => {
        console.log("Get Response: ", JSON.stringify(response.data));

        // if (response.data) {
        //   console.log("Get Response: ", JSON.stringify(response));
        //   if (response.data) {
        //     console.log(
        //       "Status Filtered Restaurants and setting no state: ",
        //       response.data.restaurentsinfo.restaurants
        //     );
        //     if (this.hasMounted) {
        //       this.setState({
        //         allRestaurents: [],
        //       });
        //     }
        //   } else {
        //     console.log(
        //       "Status All Restaurants and Setting State: ",
        //       response.data.restaurentsinfo.restaurants
        //     );
        //     if (this.hasMounted) {
        //       this.setState({
        //         allRestaurents: response.data.restaurentsinfo.restaurants,
        //       });
        //     }
        //   }
        // }
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          this.setState({
            errormessage: error.response.data,
          });
        }
      });
  }

  componentWillUnmount() {
    this.hasMounted = false;
  }

  render() {
    const { errormessage } = this.state;

    const pageContent = (
      <Col style={{ padding: "0px" }} align='left'>
        <OrdersNav />
        <Row style={{ marginRight: "0%" }}>
          <Col
            style={{
              paddingLeft: "5%",
              paddingTop: "4%",
              borderRight: "1px solid black",
              height: "84vh",
            }}>
            <h4 style={{ fontSize: "35px", fontFamily: "sans-serif" }}>
              Cancelled Orders
            </h4>
            <br />
            <OrderCard bccolor='#eeeeee' />
          </Col>
          <Col xs={5} style={{ padding: "3%" }}>
            <OrderDetailsDC IsDeliveredimage={false} />
          </Col>
        </Row>
        {errormessage && (
          <p
            style={{
              width: "100%",
              height: "40%",
              marginTop: "15px",
              fontFamily: "UberMoveText-Medium,Helvetica,sans-serif",
            }}
            className='alert alert-danger'>
            No Cancelled Orders to display
          </p>
        )}
      </Col>
    );
    return <OwnerHome pageContent={pageContent} />;
  }
}

export default CancelledOrders;
