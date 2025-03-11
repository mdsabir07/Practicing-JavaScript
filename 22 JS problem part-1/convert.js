function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft, ' + inchRemaining + ' inch.';
    return result;
}

const muhammed = inchToFeet(68);
// console.log(muhammed);
const muhammed2 = inchToFeet2(68);
// console.log(muhammed2);

function mileToKilo(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
// const total = mileToKilo(6);
// console.log(total, ' Kilometer');

function kiloToMile(kilo){
    const mile = kilo*0.621371;
    return mile;
}
const total = kiloToMile(9.4);
console.log(total);