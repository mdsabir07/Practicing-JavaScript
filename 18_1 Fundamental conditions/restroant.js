const age = 30;
const price = 500;
if(age <= 12){
    console.log('You can eat for free');
}else if(age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 50){
    // 30% discount
    const discount = price * 30 / 100;
    console.log('You will get 30% discount');
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 40) {
    // 20% discount
    const discount = price * 20 / 100;
    console.log('You will get 20% discount');
    const payAmount = price - discount;
}
else if(age >= 30){
    // 10% discount
    const discount = price * 10 / 100;
    console.log('You will get 10% discount');
    const payAmount = price - discount;
    console.log(payAmount);
}
else {
    console.log(price)
}