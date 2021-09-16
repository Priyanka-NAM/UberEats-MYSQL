import { OWNER_SIGNUP, UPDATE_OWNER } from "../Actions/types";

const intitalState = {
  user: {},
};
export default (state = intitalState, action) => {
  switch (action.type) {
    case OWNER_SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_OWNER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
