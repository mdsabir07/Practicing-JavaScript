const disha = 56;
const shuvo = 88;

if (disha > shuvo) {
    console.log('Disha won the prize');
}
else if (shuvo > disha) {
    console.log('Shuvo won the prize');
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(96, 88);
const max2 = getMax(86, 98);
const ultimateMax = getMax(max, max2);
console.log('Max of two is: ', ultimateMax);