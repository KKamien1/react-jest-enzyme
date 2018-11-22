import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Congrats from "./components/Congrats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Grab that stuff !!!</h1>
        <Congrats success={true} />
      </div>
    );
  }
}

export default hot(module)(App);
