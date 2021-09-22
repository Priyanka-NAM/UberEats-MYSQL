import axios from "axios";
import { USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNOUT } from "./types";
import backendServer from "../backEndConfig";

export const userSignin = (signindata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signin`,
      signindata
    );
    const userSigninData = await res;
    const { data } = userSigninData;
    // if (data.status === "Authentication Successful") {
    dispatch({
      type: USER_SIGNIN,
      payload: data,
    });
    // }
  } catch (err) {
    console.log("Error recieved: ", err.response);
    dispatch({
      type: USER_SIGNIN_ERROR,
      payload: err.response.data,
    });
  }
};

export const userSignOut = () => (dispatch) => dispatch({ type: USER_SIGNOUT });
