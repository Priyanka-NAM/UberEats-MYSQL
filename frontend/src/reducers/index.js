import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import OwnerReducer from "./OwnerReducer";
import CustomerReducer from "./CustomerReducer";
import CartReducer from "./CartReducer";
import LocationReducer from "./LocationReducer";

export default combineReducers({
  signin: signinReducer,
  owner: OwnerReducer,
  customer: CustomerReducer,
  cartDetails: CartReducer,
  currentLocation: LocationReducer,
});
