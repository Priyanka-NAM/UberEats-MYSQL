import axios from "axios";
import { USER_SIGNIN, USER_SIGNOUT } from "./types";
import backendServer from "../backEndConfig";

export const userSignin = (signindata) => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    const res = await axios.post(
      `${backendServer}/ubereats/signin`,
      signindata
    );
    const userSigninData = await res;
    dispatch({
      type: USER_SIGNIN,
      payload: userSigninData.data,
    });
  } catch (err) {
    dispatch({
      type: USER_SIGNIN,
      payload: err.response.userSigninData.data,
    });
  }
};

export const userSignOut = () => (dispatch) => dispatch({ type: USER_SIGNOUT });
