import { combineReducers } from "redux";
import signinReducer from "./signinReducer";
import OwnerSignUpReducer from "./OwnerReducer";
import CustomerSignUpReducer from "./CustomerReducer";

export default combineReducers({
  signin: signinReducer,
  ownersignup: OwnerSignUpReducer,
  customersignup: CustomerSignUpReducer,
});
