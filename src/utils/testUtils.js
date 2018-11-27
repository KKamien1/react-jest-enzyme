import checkPropTypes from "check-prop-types";

import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store";
import rootReducer from "../reducers";

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
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
