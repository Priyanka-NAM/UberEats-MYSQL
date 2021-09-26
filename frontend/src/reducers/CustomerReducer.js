import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_FAILURE,
} from "../Actions/types";

const intitalState = {
  user: {},
  isRegistered: false,
  errMsg: "",
  updateerrMsg: "",
};

export default (state = intitalState, action) => {
  switch (action.type) {
    case CUSTOMER_SIGNUP:
      return {
        ...state,
        user: action.payload,
        errMsg: "",
      };
    case CUSTOMER_SIGNUP_FAILURE:
      return {
        ...state,
        user: action.payload,
        errMsg: action.payload.status,
      };
    case CUSTOMER_UPDATE:
      return {
        ...state,
        user: action.payload,
        updateerrMsg: "",
      };
    case CUSTOMER_UPDATE_FAILURE:
      return {
        ...state,
        user: action.payload,
        updateerrMsg: action.payload.status,
      };
    default:
      return state;
  }
};
