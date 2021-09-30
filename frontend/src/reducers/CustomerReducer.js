import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_FAILURE,
} from "../Actions/types";

const intitalState = {
  user: {},
};

export default (state = intitalState, action) => {
  switch (action.type) {
    case CUSTOMER_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case CUSTOMER_SIGNUP_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    case CUSTOMER_UPDATE:
      return {
        ...state,
        user: action.payload,
      };
    case CUSTOMER_UPDATE_FAILURE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
