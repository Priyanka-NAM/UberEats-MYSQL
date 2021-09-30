import {
  OWNER_SIGNUP,
  OWNER_UPDATE,
  OWNER_SIGNUP_FAILURE,
  OWNER_UPDATE_FAILURE,
} from "../Actions/types";

const intitalState = {
  ownerDetails: {},
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
    default:
      return state;
  }
};
