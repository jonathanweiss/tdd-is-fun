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
    {
      input: 4,
      expected: "IV",
    },
    {
      input: 5,
      expected: "V",
    },
    {
      input: 6,
      expected: "VI",
    },
    {
      input: 7,
      expected: "VII",
    },
    {
      input: 8,
      expected: "VIII",
    },
    {
      input: 9,
      expected: "IX",
    },
    {
      input: 10,
      expected: "X",
    },
    {
      input: 11,
      expected: "XI",
    },
    {
      input: 13,
      expected: "XIII",
    },
    {
      input: 14,
      expected: "XIV",
    },
    {
      input: 39,
      expected: "XXXIX",
    },
    {
      input: 40,
      expected: "XL",
    },
    {
      input: 50,
      expected: "L",
    },
    {
      input: 90,
      expected: "XC",
    },
    {
      input: 100,
      expected: "C",
    },
    {
      input: 400,
      expected: "CD",
    },
    {
      input: 500,
      expected: "D",
    },
    {
      input: 900,
      expected: "CM",
    },
    {
      input: 1000,
      expected: "M",
    },
    {
      input: 1984,
      expected: "MCMLXXXIV",
    },
    {
      input: 1006,
      expected: "MVI",
    },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`converts a ${input} into "${expected}"`, () => {
      expect(decimalToRoman(input)).toBe(expected);
    });
  });
});
