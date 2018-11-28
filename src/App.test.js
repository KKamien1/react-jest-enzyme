import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "./utils/testUtils";

import App from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive();
  return wrapper;
};

describe("redux properties", () => {
  it("has access to `success` state", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  it("has access to `secretWord` state", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  it("has access to `guessedWords` state", () => {
    const guessedWords = "party";
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toBe(guessedWords);
  });
  it("has access to `getSecretWord` action creator", () => {
    const wrapper = setup();
    const getSecretWord = wrapper.instance().props.getSecretWord;
    expect(getSecretWord).toBeInstanceOf(Function);
  });
});
