import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class InputWord extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          id="word-guess"
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder="enter guess"
        />
        <button
          type="submit"
          data-test="input-button"
          className="btn btn-primary mb-2"
        >
          submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps)(InputWord);
