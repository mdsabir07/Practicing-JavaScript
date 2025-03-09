const colors = ['red', 'blue', 'green', 'yellow', 'lime'];
colors.reverse();
// console.log(colors);

// for of method
const rev_colors = [];
for (const col of colors) {
    // console.log(col);
    // rev_colors.push(col);
    rev_colors.unshift(col);
}
// console.log(rev_colors);

const reverse_colors = [];
for (let i = 0; i < colors.length; i++) {
    const col = colors[i];
}

const numbers = [12, 98, 5, 41, 23, 78, 46];
const num_array = [];
for (const num of numbers) {
    num_array.push(num);
    if (num % 2 === 0);
    // console.log(num);
}

const sentence = 'I am a hard working person';
const reverse = sentence.split(' ').reverse().join(' ');
console.log(reverse);

