import { correctGuess, actionTypes } from "./";

describe("correctGuess", () => {
  it("returns an action with type `CORRECT_GEUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
