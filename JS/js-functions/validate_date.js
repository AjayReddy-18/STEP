const DMY = 'dd-mm-yyyy';
const MDY = 'mm-dd-yyyy';
const YMD = 'yyyy-mm-dd';
const HYPHEN = '-';
const SPACE = ' ';

function isValidFormat(format) {
  return format === DMY || format === MDY || format === YMD;
}

function isSpace(character) {
  return character === SPACE;
}

function isValidCharacter(character) {
  return character === 'NaN' && character !== HYPHEN;
}

function isValidString(string) {
  for (let index = 0; index < string.length; index++) { 
    const charInNumber = +string[index];
    if (isSpace(string[index]) || !isValidCharacter('' + charInNumber)) {
      return false;
    } 
  }

  return true;
}

function isDateValid(format, date) {
  if (date.length !== 10 || !isValidString(date)) {
    return false;
  }

  if (format === YMD) {
    return date[4] === HYPHEN && date[7] === HYPHEN;
  }

  return date[2] === HYPHEN && date[5] === HYPHEN;
}

function slice(string, start, end) {
  let slicedString = '';

  for (let index = start; index <= end; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function getYear(format, date) {
  if (format === YMD) {
    return +(slice(date, 0, 3));
  }

  return +(slice(date, 6, 9));
}

function getMonth(format, date) {
  switch (format) {
    case DMY:
      return +(slice(date, 3, 4));
    case MDY:
      return +(slice(date, 0, 1));
    case YMD:
      return +(slice(date, 5, 6));
  }
}

function getDay(format, date) {
  switch (format) {
    case DMY:
      return +(slice(date, 0, 1));
    case MDY:
      return +(slice(date, 3, 4));
    case YMD:
      return +(slice(date, 8, 9));
  }
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  const isDivBy400 = isDivisible(year, 400);
  const isDivBy100 = isDivisible(year, 100);
  const isDivBy4 = isDivisible(year, 4);

  return isDivBy400 || (!isDivBy100 && isDivBy4);
}

function isValidYear(year) {
  return year > 0 && year < 10000;
}

function isValidMonth(month) {
  return month > 0 && month < 13;
}

function getMaxDays(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

function isValidDay(day, maxDays) {
  return day > 0 && day <= maxDays;
}

function validate(format, date) {
  if (!isValidFormat(format)) {
    return 'invalid format';
  }

  if (!isDateValid(format, date)) {
    return 'date not according to format';
  }

  const year = getYear(format, date);
  if (!isValidYear(year)) {
    return 'invalid year';
  }

  const month = getMonth(format, date);
  if (!isValidMonth(month)) {
    return 'invalid month';
  }

  const day = getDay(format, date);
  const maxDays = getMaxDays(month, year);
  if (!isValidDay(day, maxDays)) {
    return 'invalid day';
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-200/', 'date not according to format');
  testValidate('mm-dd-yyyy', ' 1- 1- 90', 'date not according to format');
  testValidate('mm-dd-yyyy', ' 1- 1-  0', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-1000', 'invalid month');
  testValidate('mm-dd-yyyy', '01-60-1000', 'invalid day');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate("mm-dd-yyyy", "29-02-2023", 'invalid month');
  testValidate("yyyy-mm-dd", "2024-13-11", 'invalid month');
  testValidate("dd-mm-yyyy", "29-02-2023", 'invalid day');
}

testAll();