const mobile = {
    brand: 'Huawei',
    price: 38000,
    color: 'Ice-black',
    camera: '48mp',
    isNew: true
}

// for of: Array
// for in: Object

for (const property in mobile) {
    // console.log(property);
    // console.log(mobile[property]);
}

const keys = Object.keys(mobile);
// console.log(keys);

for (const key of keys) {
    // console.log(key);

    console.log(key, ':', mobile[key]);
}

const values = Object.values(mobile);
// console.log(values);
for (const value of values) {
    // console.log(value);
    console.log(value, '->', mobile[value]);
}

