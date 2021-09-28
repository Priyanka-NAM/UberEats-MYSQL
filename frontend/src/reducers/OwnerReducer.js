import {
  OWNER_SIGNUP,
  OWNER_UPDATE,
  OWNER_SIGNUP_FAILURE,
  OWNER_UPDATE_FAILURE,
} from "../Actions/types";

const intitalState = {
  user: {},
  errMsg: "",
  updateerrMsg: "",
};
export default (state = intitalState, action) => {
  switch (action.type) {
    case OWNER_SIGNUP:
      return {
        ...state,
        user: action.payload,
        errMsg: "",
      };
    case OWNER_SIGNUP_FAILURE:
      return {
        ...state,
        user: action.payload,
        errMsg: action.payload.status,
      };
    case OWNER_UPDATE:
      return {
        ...state,
        user: action.payload,
        updateerrMsg: "",
      };

    case OWNER_UPDATE_FAILURE:
      return {
        ...state,
        user: action.payload,
        updateerrMsg: action.payload.status,
      };
    default:
      return state;
  }
};
