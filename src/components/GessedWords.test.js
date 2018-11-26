import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../utils/testUtils";
import GessedWords from "./GessedWords";

const defaultProps = {
  gessedWords: [{ gessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<GessedWords {...setupProps} />);
};

it("should not throw warrings with expected props", () => {
  checkProps(GessedWords, defaultProps);
});

describe("if there are no words gessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ gessedWords: [] });
  });
  it("renders without errors", () => {
    const component = findByTestAttr(wrapper, "component-gessed-words");
    expect(component.length).toBe(1);
  });
  it("renders instructions to guess w word", () => {
    const component = findByTestAttr(wrapper, "gess-instructions");
    expect(component.text().length).not.toBe(0);
  });
});
describe("if there are words gessed", () => {
  let wrapper;
  const gessedWords = [
    { gessedWord: "train", letterMatchCount: 3 },
    { gessedWord: "agile", letterMatchCount: 1 },
    { gessedWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({ gessedWords });
  });
  it("should render without errors", () => {
    const component = findByTestAttr(wrapper, "component-gessed-words");
    expect(component.length).toBe(1);
  });
  it('renders "gessed words" section ', () => {
    const component = findByTestAttr(wrapper, "gessed-words");
    expect(component.length).toBe(1);
  });
  it("correct number of gessed words", () => {
    const gesstedWordsNodes = findByTestAttr(wrapper, "gessed-word");
    expect(gesstedWordsNodes.length).toBe(gessedWords.length);
  });
});
