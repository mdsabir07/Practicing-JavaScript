const products = [
    { name: 'Shampo', price: 200, quantity: 2 },
    { name: 'Chiruni', price: 50, quantity: 1 },
    { name: 'Shirt', price: 550, quantity: 5 },
    { name: 'Pant', price: 1050, quantity: 3 }
]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const totalCost = cartTotal(products);
console.log(totalCost);