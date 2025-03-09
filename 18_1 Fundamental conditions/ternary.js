/**
 * TERNARY -- Three parts
 * 
 * ? :
 * 
 * condition ? do something when true : do something when false
*/

const age = 10;

// Normal if-else
// if(age => 18){
//     console.log('you are vote.');
// }else {
//     console.log('Not vote');
// }

// simple ternary
// age >= 18 ? console.log('You can vote') : console.log('No vote')

// let (changeable)
// const (not changeable)

let price = 500;
const isLeader = true;
// if(isLeader === true){
//     price = 0;
// }
// else {
//     price = price + 120;
// }
// console.log(price)

// price = isLeader === true ? 0 : price + 150;

// OPTIONAL: semi-advance
// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else {
//     price = price + 500;
// }

// Feel free to ignore this one 
price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 500;