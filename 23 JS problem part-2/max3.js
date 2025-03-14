const muhammad = 89;
const sabiha = 47;
const siam = 94;

if (muhammad > sabiha && muhammad > siam) {
    console.log('Muhammad is boss');
}
else if (sabiha > muhammad && sabiha > siam) {
    console.log('Sabiha is boss');
}
else {
    console.log('Siam is boss');
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const max3 = maxOfThree(456, 566, 876);
console.log('Highest position number is: ', max3);

// --------------------------------
const max = Math.max(54, 34, 7, 45, 66, 65, 87, 94, 34, 123);
console.log('Max using Math.max is: ', max);