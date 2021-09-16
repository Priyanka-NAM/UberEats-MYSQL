import { CUSTOMER_SIGNUP, UPDATE_CUSTOMER } from "../Actions/types";

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
    case UPDATE_CUSTOMER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
