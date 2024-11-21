// const format = 'yyyy-mm-dd';
// const date = '2020-10-10';

const format = 'dd-mm-yyyy';
const date = '28-02-0001';

// const format = 'mm-dd-yyyy';
// const date = '02-28-1947';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let yearStartIndex = 6;
let monthStartIndex = -1;
let dayStartIndex = -1;
let hyphen1 = 2;
let hyphen2 = 5;

switch (format) {
    case 'yyyy-mm-dd':
        yearStartIndex = 0;
        monthStartIndex = 5;
        dayStartIndex = 8;
        hyphen1 = 4;
        hyphen2 = 7;
        break;
    
    case 'dd-mm-yyyy':
        monthStartIndex = 3;
        dayStartIndex = 0;
        break;

    case 'mm-dd-yyyy':
        monthStartIndex = 0;
        dayStartIndex = 3;
        break;
}
            
const isFormatValid = monthStartIndex !== -1 && dayStartIndex !== -1;
const isDateFormatValid = format[hyphen1] === date[hyphen1] && date[hyphen1] === date[hyphen2];

const year = +(date[yearStartIndex] + date[yearStartIndex + 1] && date[yearStartIndex + 2] && date[yearStartIndex + 3]);
const month = +(date[monthStartIndex] + date[monthStartIndex + 1]);
const givenDate = +(date[dayStartIndex] + date[dayStartIndex + 1]);

const isYearValid = year > 0 && year < 10000;
const isMonthValid = month > 0 && month < 13;

let maxDays = 31;

const isDivBy400 = year % 400 === 0;
const isDivBy100 = year % 100 === 0;
const isDivBy4 = year % 4 === 0;

const isLeap = isDivBy400 || (!isDivBy100 && isDivBy4);

switch (month) {
    case 2:
        maxDays = isLeap ? 29 : 28;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        maxDays = 30;
}

const isDateValid = givenDate > 0 && givenDate <= maxDays;

const isEverythingValid = isFormatValid && isDateFormatValid && isDateValid && isMonthValid && isYearValid;

const dateStatus = isEverythingValid ? "valid" : "invalid";
console.log(dateStatus);