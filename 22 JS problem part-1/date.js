const today = new Date();
const date = new Date('2085-10-27');
console.log(date.getDay());
console.log(date.getMonth());

const specificDate = new Date(2085, 10, 27);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-US'));