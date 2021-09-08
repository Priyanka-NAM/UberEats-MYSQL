import "./App.css";
import React from "react";
import { Switch } from "react-router";
import Main from "./components/main";

function App() {
  return (
    <React.Fragment key='key'>
      <main className='container'>
        <Switch>
          <Main />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
