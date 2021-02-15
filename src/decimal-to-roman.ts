export const decimalToRoman = (decimal: number): string => {
  let output = "";

  while (decimal > 0) {
    switch (true) {
      case decimal > 9:
        output += "X";
        decimal -= 10;
        break;
      case decimal > 8:
        output += "IX";
        decimal -= 9;
        break;
      case decimal > 4:
        output += "V";
        decimal -= 5;
        break;
      case decimal > 3:
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
