import checkPropTypes from "check-prop-types";

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
