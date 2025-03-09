let value = 'x ';
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
        if (i == 0 && j > 0) {
            value += '[' + j + ']';
        }
        else if (j == 0 && i > 0) {
            value += '[' + i + ']';
        }
        else if (i > 0 && j > 0) {
            value += (i * j) + ' ';
        }
    }
    value += '\n';
}
console.log(value);