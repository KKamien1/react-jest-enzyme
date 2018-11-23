import React from "react";

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <div data-test="congrats-message">Congratulations !</div>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
