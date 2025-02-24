const person = {
    name: 'Sabir',
    age: 38,
    profession: 'Developer',
    salary: 30000,
    married: true,
    'fav places': ['Sada pathor', 'Saintmartin', 'Kuakata']
}
// console.log(person);

// dot notation
// console.log(person.married);
const old = person.married;
// console.log(old);


// bracket notation
console.log(person['age']);
const boyos = person['age'];
console.log(boyos);

console.log(person['fav places']);