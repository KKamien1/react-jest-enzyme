import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../utils/testUtils";
import InputWord from "./InputWord";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<InputWord store={store} />).dive();
  return wrapper;
  //console.log(wrapper.debug());
};

describe("render", () => {
  describe("word has not been gessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    it("renders component without errors ", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("renders input button", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(1);
    });
    it("renders submit button", () => {
      const component = findByTestAttr(wrapper, "input-button");
      expect(component.length).toBe(1);
    });
  });
  describe("word has been quessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });

    it("renders component without errors ", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    it("no renders input button", () => {
      const component = findByTestAttr(wrapper, "input-box");
      expect(component.length).toBe(0);
    });
    it("no renders submit button", () => {
      const component = findByTestAttr(wrapper, "input-button");
      expect(component.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  it("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;

    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("update state", () => {});
