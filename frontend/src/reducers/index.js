import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import OwnerSignUpReducer from "./OwnerReducer";
import CustomerSignUpReducer from "./CustomerReducer";
import CartReducer from "./CartReducer";
import LocationReducer from "./LocationReducer";

export default combineReducers({
  signin: signinReducer,
  ownersignup: OwnerSignUpReducer,
  customersignup: CustomerSignUpReducer,
  cartDetails: CartReducer,
  currentLocation: LocationReducer,
});
