import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import OwnerSignUp from "./SignUp/ownerSignUp";
import CustomerSignUp from "./SignUp/customerSignUp";
import HomePage from "./Home/home";
import SignIn from "./SignIn/signIn";

function Main() {
  return (
    <Fragment key='key'>
      <main className='container'>
        <Route path='/signin' component={SignIn} />
        <Route path='/customersignup' component={CustomerSignUp} />
        <Route path='/ownersignup' component={OwnerSignUp} />
        <Route path='/' exact component={HomePage} />
      </main>
    </Fragment>
  );
}
export default Main;
