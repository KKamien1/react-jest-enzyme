import React from "react";
//import { configure } from "../../testConfig";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import Congrats from "../components/Congrats";

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

it("should renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("should render no text then success is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

it("should render no empty congrats massage then success is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  //expect(component.length).toBe(1)
  expect(component.text().length).not.toBe(0);
});
it("should not throw error warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
