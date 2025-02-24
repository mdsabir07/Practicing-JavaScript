const person = {
    name: 'Sabir',
    age: 38,
    profession: 'developer',
    salary: 30000,
    married: true,
    'fav places': ['Sundarban', 'Kotebari', 'Jaflong']
}

person.age = 46;
person['salary'] = 20000;


const propName = 'profession';
person[propName] = 'Programmer';
console.log(person);