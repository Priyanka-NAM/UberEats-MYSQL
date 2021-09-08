import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import signincss from "./Styles/signInUp.module.css";
import "bootstrap/dist/css/bootstrap.css";
import siginupmodule from "../Styles/signInUp.module.css";
import { ubereatslogo } from "../../images/ubereatslogo.svg";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={siginupmodule.items}>
        <div className={siginupmodule.logo}>
          <img
            alt='Uber Eats Home'
            src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg'
            className={siginupmodule.img}
            style={{}}
          />
        </div>
        <div className={siginupmodule.signinform}>
          <form onSubmit={this.onSubmit}>
            <h4>Welcome back</h4>
            <div className={siginupmodule.formgroup}>
              <p className={siginupmodule.label}>
                Sign in with your email address or mobile number.
              </p>
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
              <button type='submit' className='btn btn-primary'>
                Next
              </button>
              <p>
                New to Uber? <Link to='/signup'>Create new account</Link>
              </p>
            </div>
            {/* <div className={siginupmodule.buttondiv}>
              <button type='submit' className='btn btn-primary'>
                Next
              </button>
            </div>
            <div>
              <p>
                New to Uber? <Link to='/signup'>Create new account</Link>
              </p>
            </div> */}
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
