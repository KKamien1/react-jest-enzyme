import React from "react";
import propTypes from "prop-types";

const Congrats = props => {
  return (
    <div data-test="component-congrats">
      <div data-test="congrats-message">Congratulations !</div>
    </div>
  );
};

Congrats.propTypes = {};

export default Congrats;
