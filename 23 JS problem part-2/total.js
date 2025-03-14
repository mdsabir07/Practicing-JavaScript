const products = [
    { name: 'Shampo', price: 200 },
    { name: 'Chiruni', price: 50 },
    { name: 'Shirt', price: 550 },
    { name: 'Pant', price: 1050 }
]

function getShoppingTotal(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;

}
const total = getShoppingTotal(products);
console.log('Total cost of shopping: ', total);