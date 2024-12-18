function isValidUnit(target, string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] === target) {
      return true;
    }
  }

  return false;
}

function areEqual(lhs, rhs) {
  return lhs === rhs;
}

function celsiusToKelvin(value) {
  return (value * 100 + 27315) / 100;
}

function celsiusToFahrenheit(value) {
  return (value * 9 / 5) + 32;
}

function fahrenheitToCelsius(value) {
  return (value - 32) * 5 / 9;
}

function kelvinToCelsius(value) {
  return (value * 100 - 27315) / 100;
}

function convertToCelsius(from, value) {
  switch (from) {
    case 'C':
      return value;
    case 'K':
      return kelvinToCelsius(value);
    case 'F':
      return fahrenheitToCelsius(value);
    default:
      return NaN;
  }
}

function convertFromCelsius(to, value) {
  switch (to) {
    case 'C':
      return value;
    case 'K':
      return celsiusToKelvin(value);
    case 'F':
      return celsiusToFahrenheit(value);
    default:
      return NaN;
  }
}

function convert(from, to, value) {
  const units = 'KFC';
  const areUnitsValid = isValidUnit(from, units) && isValidUnit(to, units);
  
  if (!areUnitsValid || Object.is(+value, NaN)) {
    return NaN;
  }

  if (areEqual(from, to)) {
    return +value;
  }

  const celsiusTemperature = convertToCelsius(from, value);
  return convertFromCelsius(to, celsiusTemperature);
}

// PROGRAM END //

// Testing World! 

const programName = 'TEMPERATURE';
const headings = ['STATUS', 'FROM', 'TO', 'VALUE', 'EXPECTED', 'ACTUAL'];
let columnLengths = [8, 6, 6, 11, 10, 10];
const border = getBorder(columnLengths);
columnLengths[0] = 7;
const heading = getHeading(headings, columnLengths);

function getHyphens(length) {
  let hyphenString = '';
  for (let counter = 0; counter < length; counter++) {
    hyphenString += '-';
  }
  
  return hyphenString;
}

function getBorder(columnLengths) {
  let border = '+';
  for (let column = 0; column < columnLengths.length; column++) {
    border += getHyphens(columnLengths[column]);
    border += '+';
  }
  
  return border;
}

function getSpaces(length) {
  let spaces = '';
  
  for (let counter = 0; counter < length; counter++) {
    spaces += ' ';
  }
  
  return spaces;
}

function getHeading(headings, columnLengths) {
  let heading = '|';
  
  for (let column = 0; column < headings.length; column++) {
    const requiredSpaces = (columnLengths[column] - headings[column].length);
    const spaces = getSpaces(requiredSpaces / 2);
    
    heading += spaces + headings[column] + spaces + '|';
  }
  
  return heading;
}

function getMark(testStatus) {
  return testStatus ? '✅' : '❌';
}

function printRow(rowData) {
  let row = '|';
  
  for (let column = 0; column < rowData.length; column++) {
    const dataLength = ('' + rowData[column]).length;
    const requiredSpaces = columnLengths[column] - dataLength;
    const spaces = getSpaces(requiredSpaces);
    
    row += rowData[column] + spaces + '|';
  }

  console.log(row);
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, value);
  const isPassed = Object.is(expected, actual);
  
  const result = ['   ' + getMark(isPassed), from, to, value, expected, actual];
  printRow(result);
  console.log(border);
}

function printHeading() {
  console.log('\n              ' + programName + '\n');
  console.log(border);
  console.log(heading);
  console.log(border);
}

function testAll() {
  printHeading();
  testConvert('C', 'K', '0', 273.15);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('F', 'C', -40, -40);
  testConvert('K', 'C', 100, -173.15);
  testConvert('K', 'F', 100, -279.67);
  testConvert('D', 'F', 100, NaN);
  testConvert('D', 'D', 100, NaN);
  testConvert('C', 'C', 'abc', NaN);
  testConvert('K', 'K', '0', 0);
  console.log('\n');
}

testAll();