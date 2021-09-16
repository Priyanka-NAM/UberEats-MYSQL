import axios from "axios";
import { CUSTOMER_SIGNUP, UPDATE_CUSTOMER } from "./types";
import backendServer from "../backEndConfig";

export const addCustomer = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signup/customer`,
      signupdata
    );
    const customerSignupData = await res;
    dispatch({
      type: CUSTOMER_SIGNUP,
      payload: customerSignupData.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_SIGNUP,
      payload: err.response.customerSignupData.data,
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
