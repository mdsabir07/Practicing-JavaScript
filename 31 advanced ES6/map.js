// const numbers = [1, 2, 3, 4, 5, 6, 7, 6];

// let temp = [];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const sum = element + 1;
//     temp.push(sum);
// }
// console.log(temp);

// const newArray=numbers.map(sabiha=>sabiha+1);
// const newArray=numbers.map(sabiha=>sabiha);
// const newArray=numbers.map(sabiha=>{
//     // return sabiha;
//     return sabiha+1;
// });
// console.log(newArray);


// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const squareArray = numbers.map(element => element * element);
// console.log(squareArray);

const friends = ["Muhammad", "Sabiha", "Sabir", "Amena"];
const newFriends = friends.map((friend, fun) => {
    console.log(fun);
    console.log(friend);
    return friend;
})
console.log(newFriends);