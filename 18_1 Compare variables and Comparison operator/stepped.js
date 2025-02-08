/**
 * Multi level condition
*/
const price = 10000;
if(price >= 5000){
    // 15% discount
    const discount = price * 15 / 100;
    console.log(discount)
    const payAmount = price - discount;
    console.log(payAmount)
} else if (price >= 3000){
    // 5% discount
    const discount = price * 5 / 100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount)
}else {
    console.log(price)
}