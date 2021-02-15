import { decimalToRoman } from "./decimal-to-roman";

interface TestCase {
  input: number;
  expected: string;
}

describe("decimalToRoman()", () => {
  const testCases: TestCase[] = [
    {
      input: 1,
      expected: "I",
    },
    {
      input: 2,
      expected: "II",
    },
    {
      input: 3,
      expected: "III",
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`converts a ${input} into "${expected}"`, () => {
      expect(decimalToRoman(input)).toBe(expected);
    });
  });
});
