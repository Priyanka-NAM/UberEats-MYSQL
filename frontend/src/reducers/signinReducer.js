import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNOUT,
} from "../Actions/types";

const intitalState = {
  user: {},
  address: {},
  isLoggedin: false,
  // errMsg: "",
};

const processAddress = (userdata) => {
  const {
    address_line_1: addressLine1,
    city,
    state,
    country,
    zipcode,
  } = userdata;
  const delimiter = ",";
  const addressDescription = "".concat(
    addressLine1,
    delimiter,
    city,
    delimiter,
    state,
    delimiter,
    country,
    delimiter,
    zipcode
  );
  return { addressDescription, addressLine1, city, state, country, zipcode };
};

export default (state = intitalState, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        address: processAddress(action.payload.user),
        isLoggedin: true,
      };
    case USER_SIGNIN_FAILURE:
      return {
        ...state,
        user: null,
        errMsg: "Username or Password is incorrect",
      };
    case USER_SIGNOUT:
      return {
        ...state,
        user: null,
        isLoggedin: false,
        errMsg: "",
      };
    default:
      return state;
  }
};
