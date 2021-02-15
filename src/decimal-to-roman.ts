interface RomanNumerals {
  value: number;
  symbol: string;
}

const romanNumerals: Array<RomanNumerals> = [
  {
    value: 40,
    symbol: "XL",
  },
  {
    value: 10,
    symbol: "X",
  },
  {
    value: 9,
    symbol: "IX",
  },
  {
    value: 5,
    symbol: "V",
  },
  {
    value: 4,
    symbol: "IV",
  },
  {
    value: 1,
    symbol: "I",
  },
];

export const decimalToRoman = (decimal: number): string => {
  let output = "";

  for (let rn of romanNumerals) {
    while (decimal >= rn.value) {
      output += rn.symbol;
      decimal -= rn.value;
    }
  }

  return output;
};
