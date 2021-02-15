export const decimalToRoman = (decimal: number): string => {
  let output = "";

  while (decimal > 0) {
    switch (decimal) {
      case 5:
        output += "V";
        decimal -= 5;
        break;
      case 4:
        output += "IV";
        decimal -= 4;
        break;
      default:
        output += "I";
        decimal--;
    }
  }
  return output;
};
