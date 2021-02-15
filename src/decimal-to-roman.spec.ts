import { decimalToRoman } from "./decimal-to-roman";

describe("decimalToRoman()", () => {
  it("converts a 1 into 'I'", () => {
    const expected = "I";
    const actual = decimalToRoman(1);

    expect(actual).toBe(expected);
  });

  it("converts a 2 into 'II'", () => {
    const expected = "II";
    const actual = decimalToRoman(2);

    expect(actual).toBe(expected);
  });
});
