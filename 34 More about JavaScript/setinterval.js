console.log(1)
console.log(2)
console.log(3)

let count = 0;
const clockID = setInterval(() => {
    count++;
    console.log(count)
    // clearInterval(clockID);
    if (count >= 5) {
        clearInterval(clockID);
    }
}, 4000);

// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)

// setTimeout(() => {
//     console.log("Muhammad")
// }, 9000)

// setTimeout(() => {
//     console.log("Sabiha")
// }, 6000);