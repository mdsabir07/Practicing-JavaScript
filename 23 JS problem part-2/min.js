const prices = [45000, 23000, 23050, 6500, 23500, 6000, 54000];
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const minValue = getMin(prices);
console.log('Lowest price mobile is: ', minValue);
// ------------------------------------------
const minPrice = Math.min(45000, 23000, 23050, 6500, 23500, 6000, 54000);
console.log('Lowest price mobile by Math.min is ', minPrice);