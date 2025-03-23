const person = {
    name: "Muhammad",
    3: "400",
    true: "sdfasdf",
    age: 4,
    friends: ["Sabiha", "Baba", "Ma"],
    details: {
        job: "Yes",
        isMarried: false,
        status: "Not found",
        father: {
            name: "Sabir"
        }
    }
}

// Bracket notation
console.log(person["details"]["roll"]);
console.log(person[3]);
console.log(person[true]);



// Dot notation
// console.log(person.details?.mother?.name);
// console.log(person.details.isMarried);