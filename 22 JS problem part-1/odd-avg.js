/**
 * Function takes an array as parameter
 * Give the avarage of the odd numbers in the array
*/

/**
 * Put odd numbers in an array
*/
function oddAvg(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const odd of odds) {
        sum = sum + odd;
    }
    const count = odds.length;
    console.log('Total amount of odd numbers: ', sum, 'Total odd number count is:', count);
    const avg = sum / count;
    return avg;
}
const numbers = [2, 7, 34, 77, 87, 96];
const avg = oddAvg(numbers);
console.log('Avarage of the odd numbers is: ', avg);