function temparature(celsius) {
    return (celsius * 9 / 5) + 32;
}
let tempCelsius = 12;
let tempFharenheight = temparature(tempCelsius);
// console.log(tempCelsius + "C is equal to " + tempFharenheight + "F");

// -------------------------------
function countRepeatdNumber(numbers, target) {
    let count = 0;
    for (let num of numbers) {
        if (num === target) {
            count++;
        }
    }
    return count;
}
let numbers = [5, 11, 45, 3, 56, 5, 12];
// target = 5;
target = 25;
// let result = countRepeatdNumber(numbers, target);
// console.log(result);

// --------------------------------
function countVowels(array) {
    let vowelCount = 0;
    const vowels = 'aeiouAEIOU';
    for (let str of array) {
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}
let arr = ["hello", "world", "javascript", "is", "fun"];
let result = countVowels(arr);
// console.log(result);
// ----------------------------------
function getRanodomNumber() {
    return Math.floor(Math.random() * 11) + 10;
}
let randomNumber = getRanodomNumber();
console.log(randomNumber);

