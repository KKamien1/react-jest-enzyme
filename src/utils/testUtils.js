export const findByTestAttr = (wrapper, testAttribute) => {
  return wrapper.find(`[data-test="${testAttribute}"]`);
};
