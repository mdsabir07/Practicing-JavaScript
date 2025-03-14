const mobiles = [
    { name: 'Huawei', price: 32000, camera: '48mp', color: 'black' },
    { name: 'OnePlus', price: 24000, camera: '52mp', color: 'silver' },
    { name: 'Iphone', price: 120000, camera: '72mp', color: 'black' },
    { name: 'Samsung', price: 15000, camera: '72mp', color: 'black' },
    { name: 'Vivo', price: 1000, camera: '72mp', color: 'black' },
    { name: 'xomi', price: 7500, camera: '72mp', color: 'black' }
]
function getCheapest(mobiles) {
    let min = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price < min.price) {
            min = mobile;
        }
    }
    return min;
}
const cheapestMobile = getCheapest(mobiles);
console.log('Cheapest mobile is: ', cheapestMobile);

// -----------------------------------
function getHighest(mobiles) {
    let highest = mobiles[0];
    for (const mobile of mobiles) {
        if (mobile.price > highest.price) {
            highest = mobile;
        }
    }
    return highest;
}
const costly = getHighest(mobiles);
console.log('Highest price mobile is: ', costly);