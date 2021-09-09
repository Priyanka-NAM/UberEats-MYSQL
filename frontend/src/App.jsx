import "./App.css";
import React from "react";
import { Switch } from "react-router";
import Main from "./components/main";

function App() {
  return (
    <React.Fragment key='key'>
      <Switch>
        <Main />
      </Switch>
    </React.Fragment>
  );
}

export default App;
