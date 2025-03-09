const age = 18;
const price = 800;
const isStudent = true;
if(age < 10){
    // discount free
    const discount = price * 0;
    const payAmount = price * discount;
    console.log(payAmount);
}
else if(age < 20 && isStudent){
    // discount 50%
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age < 40) {
    // discount 10%
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age > 80){
    // discount 25%
    const discount = price * 25 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price);
}