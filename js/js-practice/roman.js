const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

const getSymbols = (placeValue, faceValue) => {
  return faceValue % 5 === 4
    ? romanNumerals[placeValue] + romanNumerals[placeValue + (faceValue >> 2)]
    : romanNumerals[placeValue + 1].repeat(Math.floor(faceValue / 5)) +
        romanNumerals[placeValue].repeat(faceValue % 5);
};

const toRoman = (number) => {
  let num = number;
  let romanNum = "";
  let placeValue = 0;

  while (num) {
    const remainder = num % 10;
    romanNum = getSymbols(placeValue, remainder) + romanNum;
    num = Math.floor(num / 10);
    placeValue += 2;
  }

  return romanNum;
};

const main = () => {
  const number = prompt("Enter a number:");
  console.log(toRoman(+number));
};

main();
