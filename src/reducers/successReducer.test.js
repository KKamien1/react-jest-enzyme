import { actionTypes } from "../actions";

import successReducer from "./successReducer";

it("should return default inital state of `false` when no acion ", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

it("should returns state of true upon  receiving an action of type `CORRECT_GUESS`", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
