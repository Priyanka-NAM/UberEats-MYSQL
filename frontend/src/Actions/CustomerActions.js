import axios from "axios";
import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  UPDATE_CUSTOMER,
} from "./types";
import backendServer from "../backEndConfig";

export const addCustomer = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signup/customer`,
      signupdata
    );
    const response = await res;
    localStorage.setItem("jwtToken", response.data.token);
    localStorage.setItem("user_id", response.data.userid);
    dispatch({
      type: CUSTOMER_SIGNUP,
      payload: response.data,
    });
  } catch (err) {
    console.log("Customer Signup error: ", JSON.stringify(err.response));
    dispatch({
      type: CUSTOMER_SIGNUP_FAILURE,
      payload: err.response.data,
    });
  }
};

export const updateCustomer = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/profileupdate/customer`,
      signupdata
    );
    const customerSignupData = await res;
    dispatch({
      type: UPDATE_CUSTOMER,
      payload: customerSignupData.data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_CUSTOMER,
      payload: err.response.customerSignupData.data,
    });
  }
};
