import axios from "axios";
import { ALL_RESTAURANTS, ALL_RESTAURANTS_FAILURE } from "./types";
import backendServer from "../backEndConfig";
import { getToken } from "../components/Service/authService";

export const restaurants = () => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    const res = await axios.get(
      `${backendServer}/ubereats/customerrestaurant/allrestaurants`
    );
    const response = await res;

    dispatch({
      type: ALL_RESTAURANTS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: ALL_RESTAURANTS_FAILURE,
      payload: err.response,
    });
  }
};

export const temp = () => async (dispatch) => {
  //   const { customer_id: customerId } = JSON.parse(localStorage.getItem("user"));
  //   try {
  //     axios.defaults.withCredentials = true;
  //     axios.defaults.headers.common.authorization = getToken();
  //     const res = await axios.get(
  //       `${backendServer}/ubereats/customerrestaurant/favourite/5`
  //     );
  //     // const res = await axios.get(
  //     //   `${backendServer}/ubereats/customerrestaurant/favourite/${customerId}`
  //     // );
  //     const response = await res;
  //     console.log("fav response", response.data);
  //     dispatch({
  //       type: ALL_RESTAURANTS,
  //       payload: response.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: ALL_RESTAURANTS,
  //       payload: err.response,
  //     });
  //   }
};
