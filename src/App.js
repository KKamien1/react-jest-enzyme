import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";
import "./App.css";

import { getSecretWord } from "./actions";
import Congrats from "./components/Congrats";
import GessWords from "./components/GessedWords";
import InputWord from "./components/InputWord";

class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="App container">
        <h1> Grab that stuff !!!</h1>
        <InputWord />
        <Congrats success={this.props.success} />
        <GessWords gessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.success,
  guessedWords: state.guessedWords,
  secretWord: state.secretWord
});
export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
// export default hot(module)(
//   connect(
//     mapStateToProps,
//     { getSecretWord }
//   )(App)
// );
