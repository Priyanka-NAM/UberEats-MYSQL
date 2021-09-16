import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import OwnerSignUp from "./SignUp/OwnerSignUp";
import CustomerSignUp from "./SignUp/CustomerSignUp";
import HomePage from "./Home/home";
import SignIn from "./SignIn/signIn";
import RestaurentHome from "./Restaurent/RestaurentHome";
import Rough from "./Restaurent/rough";
import StartPage from "./StartPage/StartPage";
import FinalOrder from "./Orders/Customer/FinalOrder";
import CustomerOrders from "./Orders/Customer/CustomerOrders";

function Main() {
  return (
    <Fragment key='key'>
      <main>
        <Route path='/signin' component={SignIn} />
        <Route path='/customer/signup' component={CustomerSignUp} />
        <Route path='/owner/signup' component={OwnerSignUp} />
        <Route path='/restaurents' component={RestaurentHome} />
        <Route path='/rough' component={Rough} />
        <Route path='/home' component={HomePage} />
        <Route path='/order' component={FinalOrder} />
        <Route path='/customerorder' component={CustomerOrders} />

        <Route path='/' exact component={StartPage} />
      </main>
    </Fragment>
  );
}
export default Main;
