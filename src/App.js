import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

import Congrats from "./components/Congrats";
import GessWords from "./components/GessedWords";
import InputWord from "./components/InputWord";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1> Grab that stuff !!!</h1>
        <InputWord />
        <Congrats />
        <GessWords
          gessedWords={[
            { gessedWord: "train", letterMatchCount: 3 },
            { gessedWord: "agile", letterMatchCount: 1 },
            { gessedWord: "party", letterMatchCount: 5 }
          ]}
        />
      </div>
    );
  }
}

export default hot(module)(App);
