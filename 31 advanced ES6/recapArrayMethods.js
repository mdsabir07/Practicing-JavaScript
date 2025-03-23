const products = [
    { id: 1, name: "huawei", color: "black", price: 1200, brand: 'huawei' },
    { id: 2, name: "samsung", color: "white", price: 1400, brand: 'samsung' },
    { id: 3, name: "iphone", color: "gold", price: 1600, brand: 'apple' },
    { id: 4, name: "oneplus", color: "silver", price: 1800, brand: 'oneplus' },
    { id: 5, name: "xiami", color: "gold", price: 1000, brand: 'xiami' },
    { id: 6, name: "realme", color: "black", price: 900, brand: 'realme' },
    { id: 6, name: "iphone", color: "black", price: 900, brand: 'apple' }
]

const newProducts = products.map(p => {
    if (p.brand === "apple") {
        p.price = p.price + 200;
    }
    return p;
})
console.log(newProducts);