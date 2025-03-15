const numbers = [23, 54, 65, 76];

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
// }

// for (const number of numbers) {
//     console.log(number);
// }

const products = [
    { id: 1, name: 'iphone phone', price: 120000 },
    { id: 2, name: 'Samsung tab', price: 13000 },
    { id: 3, name: 'Huawei tab', price: 190000 },
    { id: 4, name: 'OnePlus Phone', price: 18000 },
    { id: 5, name: 'Xomi phone', price: 16000 },
    { id: 6, name: 'Walton tab', price: 40000 },
    { id: 7, name: 'iTel phone', price: 70000 },
    { id: 8, name: 'Vivo Phone', price: 14000 },
    { id: 9, name: 'Realme tab', price: 10000 },
    { id: 10, name: 'Oppo phone', price: 20000 },
    { id: 10, name: 'Del Laptop', price: 20000 },
    { id: 10, name: 'Mac', price: 20000 },
]

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            // console.log(product.name);
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'mac');
console.log(result);