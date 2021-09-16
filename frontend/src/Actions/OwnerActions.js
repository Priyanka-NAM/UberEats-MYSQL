import axios from "axios";
import { OWNER_SIGNUP, UPDATE_OWNER } from "./types";
import backendServer from "../backEndConfig";

export const addOwner = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signup/owner`,
      signupdata
    );
    const ownerSignupData = await res;
    dispatch({
      type: OWNER_SIGNUP,
      payload: ownerSignupData.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: OWNER_SIGNUP,
      payload: err.response.ownerSignupData.data,
    });
  }
};

export const updateOwner = (signupdata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.get(
      `${backendServer}/ubereats/profileupdate/owner`,
      signupdata
    );
    const ownerSignupData = await res;
    dispatch({
      type: UPDATE_OWNER,
      payload: ownerSignupData.data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_OWNER,
      payload: err.response.ownerSignupData.data,
    });
  }
};
