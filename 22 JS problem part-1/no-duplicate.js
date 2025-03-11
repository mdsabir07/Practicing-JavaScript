/**
 * array has some duplicate elements
 * []
*/
const biranykhor = ['muhammad', 'sabiha', 'sabir', 'muhammad', 'sabir', 'amena', 'samena', 'amena', 'kamena'];
const numbers = [4, 23, 4, 2, 6, 34, 4, 3, 6];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
// const uniqueArray = noDuplicate(biranykhor);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
