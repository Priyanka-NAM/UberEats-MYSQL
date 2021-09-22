import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import OwnerHome from "./Home/OwnerHome";
import OwnerSignUp from "./SignUp/OwnerSignUp";
import CustomerSignUp from "./SignUp/CustomerSignUp";
import HomePage from "./Home/home";
import SignIn from "./SignIn/signIn";
import RestaurentHome from "./Restaurent/CustomerRestaurentHome";
import Rough from "./Restaurent/rough";
import StartPage from "./StartPage/StartPage";
import FinalOrder from "./Customer/Orders/FinalOrder";
import CustomerOrders from "./Customer/Orders/CustomerOrders";
import MenuUpdate from "./Owner/Menu/MenuUpdate";
import OwnerProfile from "./Owner/Profile/OwnerProfile";
import MenuUpdateCategories from "./Owner/Menu/MenuUpdateCategories";
import OwnerOrders from "./Owner/Orders/OwnerOrders";
import DeliveredOrders from "./Owner/Orders/DeliveredOrders";
import CancelledOrders from "./Owner/Orders/CancelledOrders";
import OwnerHomePage from "./Owner/OwnersHome/OwnerHomePage";
import CustomerProfile from "./Customer/Profile/CustomerProfile";

function Main() {
  return (
    <Fragment key='key'>
      <main>
        <Route path='/signin' component={SignIn} />
        <Route path='/customer/signup' component={CustomerSignUp} />
        <Route path='/owner/signup' component={OwnerSignUp} />
        <Route path='/restaurents' component={RestaurentHome} />
        {/* <Route path='/rough' component={Rough} /> */}
        <Route path='/home' component={HomePage} />
        <Route path='/order/checkout' component={FinalOrder} />
        <Route path='/customerorder' component={CustomerOrders} />
        <Route path='/owner/menuupdate' component={MenuUpdate} />
        <Route
          path='/owner/updatecategories'
          component={MenuUpdateCategories}
        />
        <Route path='/owner/orders' component={OwnerOrders} />
        <Route path='/owner/deliveredorders' component={DeliveredOrders} />
        <Route path='/owner/cancelledorders' component={CancelledOrders} />
        <Route path='/owner/profile' component={OwnerProfile} />
        <Route path='/customer/profile' component={CustomerProfile} />
        <Route path='/owner/home' component={OwnerHomePage} />
        <Route path='/' exact component={StartPage} />
      </main>
    </Fragment>
  );
}
export default Main;
