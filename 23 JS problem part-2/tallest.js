const heights = [64, 67, 69, 72, 74, 78, 61, 87, 62];

function getMax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
const max = getMax(heights);
console.log('Max value is: ', max);

// --------------------------------
function getMin(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log('Min value is: ', min);

