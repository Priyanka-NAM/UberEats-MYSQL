import {
  OWNER_SIGNUP,
  OWNER_UPDATE,
  OWNER_SIGNUP_FAILURE,
  OWNER_UPDATE_FAILURE,
  USER_SIGNIN_SUCCESS,
  OWNER_NEW_ORDER,
  OWNER_NEW_ORDER_FAILURE,
} from "../Actions/types";

const intitalState = {
  ownerDetails: {},
  newOrders: {},
};
export default (state = intitalState, action) => {
  switch (action.type) {
    case OWNER_SIGNUP:
      return {
        ...state,
        ownerDetails: action.payload,
      };
    case OWNER_SIGNUP_FAILURE:
      return {
        ...state,
        ownerDetails: action.payload,
      };
    case OWNER_UPDATE:
      return {
        ...state,
        ownerDetails: action.payload,
      };

    case OWNER_UPDATE_FAILURE:
      return {
        ...state,
        ownerDetails: action.payload,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        ownerDetails: action.payload,
      };
    case OWNER_NEW_ORDER:
      return {
        ...state,
        newOrders: action.payload,
      };
    case OWNER_NEW_ORDER_FAILURE:
      return {
        ...state,
        newOrders: action.payload,
      };
    default:
      return state;
  }
};
