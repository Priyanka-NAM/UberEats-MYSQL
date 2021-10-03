import axios from "axios";
import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_FAILURE,
  CUSTOMER_ORDER,
  CUSTOMER_ORDER_FAILURE,
} from "./types";
import backendServer from "../backEndConfig";
import { getToken } from "../components/Service/authService";

export const addCustomer = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;

    const res = await axios.post(
      `${backendServer}/ubereats/signup/customer`,
      signupdata
    );
    const response = await res;
    localStorage.setItem("jwtToken", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    dispatch({
      type: CUSTOMER_SIGNUP,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_SIGNUP_FAILURE,
      payload: err.response.data,
    });
  }
};

export const updateCustomer = (customerUpdateData) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    const res = await axios.post(
      `${backendServer}/ubereats/profile/customer`,
      customerUpdateData
    );
    const response = await res;
    dispatch({
      type: CUSTOMER_UPDATE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_UPDATE_FAILURE,
      payload: err.response.data,
    });
  }
};

export const customerOrders = () => async (dispatch) => {
  const { customer_id: customerId } = JSON.parse(localStorage.getItem("user"));
  try {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    const res = await axios.get(
      `${backendServer}/ubereats/orders/orderstatus/customer/1`
    );
    // const res = await axios.get(
    //   `${backendServer}/ubereats/orders/orderstatus/customer/${customerId}`
    // );
    const response = await res;
    dispatch({
      type: CUSTOMER_ORDER,
      payload: response.data.orders,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ORDER_FAILURE,
      payload: err.response,
    });
  }
};
