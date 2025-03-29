const person = {
    name: "Muhammad",
    age: 4,
    friends: ["Sabiha", "baba", "ma"]
}

const newPerson = JSON.stringify(person);
console.log(newPerson);

const newPerson2=JSON.parse(newPerson);
console.log(newPerson2);