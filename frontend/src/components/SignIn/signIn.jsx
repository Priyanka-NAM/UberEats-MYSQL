import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import signincss from "./Styles/signInUp.module.css";
import "bootstrap/dist/css/bootstrap.css";
import siginupmodule from "../Styles/signInUp.module.css";
import { ubereatslogo } from "../../images/ubereatslogo.svg";
import UberELogo from "../HomeIcons/logo";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={siginupmodule.items}>
        <div className={siginupmodule.logo}>
          <UberELogo className={siginupmodule.img} />
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <h4>Welcome back</h4>
            <div>
              <p className={siginupmodule.label}>
                Sign in with your email address or mobile number.
              </p>
              <div>
                <input
                  type='email'
                  className='form-control'
                  onChange={this.onChange}
                  name='textInputValue'
                  placeholder='Email or mobile number'
                  pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$"
                  title='Please enter valid email address'
                  required
                />
                <div>
                  <small>error</small>
                </div>
              </div>
              <button type='submit' className='btn btn-primary'>
                Next
              </button>
              <p>
                New to Uber? <Link to='/signup'>Create new account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
