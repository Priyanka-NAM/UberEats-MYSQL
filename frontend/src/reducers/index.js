import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import OwnerSignUpReducer from "./OwnerReducer";
import CustomerReducer from "./CustomerReducer";
import CartReducer from "./CartReducer";
import LocationReducer from "./LocationReducer";

export default combineReducers({
  signin: signinReducer,
  ownersignup: OwnerSignUpReducer,
  customer: CustomerReducer,
  cartDetails: CartReducer,
  currentLocation: LocationReducer,
});
