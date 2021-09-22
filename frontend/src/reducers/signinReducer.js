import { USER_SIGNIN, USER_SIGNIN_ERROR, USER_SIGNOUT } from "../Actions/types";

const intitalState = {
  user: {},
  address: {},
};
export default (state = intitalState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        user: action.payload,
        address: action.payload.address,
      };
    case USER_SIGNIN_ERROR:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};
