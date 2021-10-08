/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import OwnerSignUp from "../components/SignUp/OwnerSignUp";

const mockStore = configureStore();

Enzyme.configure({ adapter: new Adapter() });

it("render correctly the Owner Signup component", () => {
  const OwnerSignupComponent = renderer
    .create(
      <Provider>
        <Router>
          <OwnerSignUp />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(OwnerSignupComponent).toMatchSnapshot();
});
