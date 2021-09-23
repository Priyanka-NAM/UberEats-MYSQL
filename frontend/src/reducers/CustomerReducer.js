import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  UPDATE_CUSTOMER,
} from "../Actions/types";

const intitalState = {
  user: {},
  isRegistered: false,
  errMsg: "",
};
export default (state = intitalState, action) => {
  switch (action.type) {
    case CUSTOMER_SIGNUP:
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
        errMsg: "",
      };
    case CUSTOMER_SIGNUP_FAILURE:
      return {
        ...state,
        user: action.payload,
        errMsg: action.payload.status,
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
      };
    default:
      return state;
  }
};
