import axios from "axios";
import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_FAILURE,
} from "./types";
import backendServer from "../backEndConfig";

export const addCustomer = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    // axios.defaults.headers.common["authorization"] = getToken();
    const res = await axios.post(
      `${backendServer}/ubereats/signup/customer`,
      signupdata
    );
    const response = await res;
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user_id", response.data.userid);
    // localStorage.setItem("token", response.headers["x-auth-token"]);
    // localStorage.setItem("user_id", response.data.userid);
    // console.log("Respone headers", response.headers);
    // console.log("Respone userid", response.data.userid);

    dispatch({
      type: CUSTOMER_SIGNUP,
      payload: response.data,
    });
  } catch (err) {
    // console.log("Err userid", err);
    dispatch({
      type: CUSTOMER_SIGNUP_FAILURE,
      payload: err.response.data,
    });
  }
};

export const updateCustomer = (customerUpdateData) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
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
