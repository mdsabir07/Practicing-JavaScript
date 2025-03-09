const persons = ['Muhammad', 'Sabiha', 'Sabir', 'Amena'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

const numbers = [2, 5, 3, 6, 7, 1, 8, 4]
// Assending
const num_asc = numbers.sort();
console.log(num_asc);

// Descending
const number_dsc = [2, 4, 54, 45, 3, 76, 3, 9];
// const num_dsc = number_dsc.sort()
// const num_ascs = number_dsc.sort(function (a, b) { return a - b });
// const num_dsc = number_dsc.sort(function (a, b) { return b - a });
const num_ascs = [...number_dsc].sort(function (a, b) { return a - b });
const num_dsc = [...number_dsc].sort(function (a, b) { return b - a });
console.log(num_ascs);
console.log(num_dsc);
