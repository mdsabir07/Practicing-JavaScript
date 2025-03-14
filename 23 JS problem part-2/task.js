const highest = Math.min(23, 545, 45645, 76, 32, 6, 1, 5645);
// console.log(highest);

const highest2 = Math.min('Muhammad', 'Sabiha', 'Sabir', 'Amena');
// console.log(highest2);

// Total budget
const products = [
    { name: 'Laptop', price: 35000 },
    { name: 'Tablet', price: 15000 },
    { name: 'Mobile', price: 20000 }
]

function calculateElectronicsBudget(products) {
    let total = 0;
    for (const product of products) {
        total = total + product.price;
    }
    return total;
}
const total = calculateElectronicsBudget(products);
// console.log('Total budget: ', total);

function calculateElectronicsBudget2(laptopQ, tabletQ, mobileQ) {
    const perLaptop = 35000;
    const perTablet = 15000;
    const perMobile = 20000;

    const totalLaptopQ = laptopQ * perLaptop;
    const totalTabletQ = tabletQ * perTablet;
    const totalMobileQ = mobileQ * perMobile;

    const totalCost = totalLaptopQ + totalTabletQ + totalMobileQ;
    return totalCost;
}
const totalBudget = calculateElectronicsBudget2(2, 5, 1);
console.log(totalBudget);