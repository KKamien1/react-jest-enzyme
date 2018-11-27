import { getLetterMatchCount } from "./";

describe("getLerrerMatchCount", () => {
  const secretWord = "party";

  it("returns correct count when there are no matching lerrers", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });
  it("returns correct count when there are 3 matching lerrers", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  it("returns correct count when there are duplicate lerrers in guessed", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
