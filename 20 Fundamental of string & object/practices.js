const colors = {
    red: '#ff000',
    blue: '#0000ff',
    green: '#00ff00',
    "golden rod": '#daa520'
}
// console.log(colors['golden rod']);


const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2000,
    'passanger capacity': 5
}

// const student = {
//     name: 'Muhammad Bin Sabir',
//     id: 1,
//     physics: {
//         subject: 'HSC Physics',
//         author: 'Mojammel Haque',
//         marks: 30
//     }
// }
// console.log(student.physics.marks);


let students = {
    name: 'Sabiha Binte Sabir',
    age: '5 months',
    city: 'Dhaka',
    isStudent: false 
}
let studentProp = Object.keys(students).length;
console.log(studentProp);

let myObject = {
    name: "Muhammad",
    age: 3,
    city: 'Dhaka',
    isStudent: false 
}
for(let key in myObject){
    if(myObject.hasOwnProperty(key)){
        console.log(`key: ${key} | type: ${typeof myObject[key]}`);
    }
}


