export const decimalToRoman = (decimal: number): string => {
  let output = "";
  for (let i = 0; i < decimal; i++) {
    output += "I";
  }
  return output;
};
