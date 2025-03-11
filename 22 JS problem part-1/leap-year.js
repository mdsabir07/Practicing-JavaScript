/**
 * Simple logic:
 * A year will be leap year if the year divisible by 4
*/
function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeapY = isLeapYear(2039);
// console.log(isLeapY);

/**
 * 1. Those year that is divisible by 100 and if the year divisible by 4; than it will be a leap year.
 * 2. If the year divisible by 400, than it is a leap year.
*/

function isLeapYear2(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeap = isLeapYear2(2038);
const isLeap2 = isLeapYear2(3466);
const isLeap3 = isLeapYear2(2086);
const isLeap4 = isLeapYear2(2052);
console.log(isLeap, isLeap2, isLeap3, isLeap4);