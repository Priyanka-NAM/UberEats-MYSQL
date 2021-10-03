import {
  CUSTOMER_SIGNUP,
  CUSTOMER_SIGNUP_FAILURE,
  CUSTOMER_UPDATE,
  CUSTOMER_UPDATE_FAILURE,
  CUSTOMER_ORDER,
  CUSTOMER_ORDER_FAILURE,
} from "../Actions/types";

const intitalState = {
  user: {},
  orders: {},
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
    case CUSTOMER_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case CUSTOMER_ORDER_FAILURE:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
