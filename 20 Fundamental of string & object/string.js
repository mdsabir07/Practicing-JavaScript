const country = 'Bangladesh';
const division = 'Comilla';
const district = 'Feni';
const thana = 'Muradnagar';

// const nesTring = new String('Muhammad');
// console.log(nesTring);

// Array is changeable -> mutable
const numbers = [23, 32, 43, 234, 45];
console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[3]);
numbers[3] = 999;
console.log(numbers);

// String is not changable -> immutable
const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[2])
console.log(capital);
capital[4] = 'b';
console.log(capital);