import axios from "axios";
import {
  OWNER_SIGNUP,
  OWNER_SIGNUP_FAILURE,
  OWNER_UPDATE,
  OWNER_UPDATE_FAILURE,
} from "./types";
import backendServer from "../backEndConfig";
import { getToken } from "../components/Service/authService";

export const addOwner = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signup/owner`,
      signupdata
    );
    const response = await res;
    localStorage.setItem("jwtToken", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    dispatch({
      type: OWNER_SIGNUP,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: OWNER_SIGNUP_FAILURE,
      payload: err.response.data,
    });
  }
};

export const updateOwner = (ownerUpdateData) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.common.authorization = getToken();
    const res = await axios.post(
      `${backendServer}/ubereats/profile/owner`,
      ownerUpdateData
    );
    const response = await res;
    dispatch({
      type: OWNER_UPDATE,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: OWNER_UPDATE_FAILURE,
      payload: err.response.data,
    });
  }
};
