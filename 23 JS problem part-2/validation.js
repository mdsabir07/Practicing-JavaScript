function multiply(num1, num2) {
    if (typeof num1 !== 'number' || num2 !== 'number') {
        return "Please, provide a number";
    }
    const mult = num1 * num2;
    return mult;
}
const result = multiply(5, 'Nine');
// console.log(result);

function fullname(first, second) {
    if (typeof first !== 'string') {
        return "First name should a string";
    }
    else if (typeof second !== 'string') {
        return "Second name should be a string";
    }
    const full = first + ' ' + second;
    return full;
}
const full = fullname(4, 3);
console.log(full);