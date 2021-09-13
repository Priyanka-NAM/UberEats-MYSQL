import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import OwnerSignUp from "./SignUp/ownerSignUp";
import CustomerSignUp from "./SignUp/customerSignUp";
import HomePage from "./Home/home";
import SignIn from "./SignIn/signIn";
import RestaurentHome from "./RestaurentPage/RestaurentHome";
import Rough from "./RestaurentPage/rough";
import StartPage from "./StartPage/startpage";

function Main() {
  return (
    <Fragment key='key'>
      <main>
        <Route path='/signin' component={SignIn} />
        <Route path='/customersignup' component={CustomerSignUp} />
        <Route path='/ownersignup' component={OwnerSignUp} />
        <Route path='/restaurents' component={RestaurentHome} />
        <Route path='/rough' component={Rough} />
        <Route path='/home' component={HomePage} />
        <Route path='/' exact component={StartPage} />
      </main>
    </Fragment>
  );
}
export default Main;
