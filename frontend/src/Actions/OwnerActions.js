import axios from "axios";
import {
  OWNER_SIGNUP,
  OWNER_SIGNUP_FAILURE,
  OWNER_UPDATE,
  OWNER_UPDATE_FAILURE,
  OWNER_NEW_ORDER,
  OWNER_NEW_ORDER_FAILURE,
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
    console.log("ownerUpdateData", ownerUpdateData);
    const res = await axios.post(
      `${backendServer}/ubereats/profile/owner`,
      ownerUpdateData
    );
    const response = await res;
    console.log("ownerUpdateresponse", res);
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

export const ownerNewOrders = () => async (dispatch) => {
  const { restaurant_id: restaurantId } = JSON.parse(
    localStorage.getItem("user")
  );
  console.log(" restaurantId: ", restaurantId);
  if (!restaurantId) return;
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common.authorization = getToken();
  axios
    // .get(
    //   `${backendServer}/ubereats/orders/neworders/restaurant/${restaurantId}`
    // )
    .get(`${backendServer}/ubereats/orders/neworders/restaurant/2`)
    .then((response) => {
      console.log("Response: ", JSON.stringify(response.data));

      if (response.data.status === "NEW_ORDERS") {
        dispatch({
          type: OWNER_NEW_ORDER,
          payload: response.data.orders,
        });
      }
    })
    .catch((error) => {
      if (error.response && error.response.data) {
        dispatch({
          type: OWNER_NEW_ORDER_FAILURE,
          payload: error.response.data,
        });
      }
    });
};
