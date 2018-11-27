import checkPropTypes from "check-prop-types";

import { createStore } from "redux";
import rootReducer from "../reducers";

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, testAttribute) => {
  return wrapper.find(`[data-test="${testAttribute}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
