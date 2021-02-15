import { decimalToRoman } from "./decimal-to-roman";

describe("decimalToRoman()", () => {
  it("1 should become 'I'", () => {
    const expected = "I";
    const actual = decimalToRoman(1);

    expect(actual).toBe(expected);
  });
});
