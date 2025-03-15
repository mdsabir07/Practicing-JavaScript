const nayok = {
    name: 'Muhammad Bin Sabir',
    id: 1,
    address: 'Comilla',
    isSingle: true,
    friends: ['Sabiha', 'Baba', 'Ma', 'Brothers'],
    toys: [
        { name: 'Truck', year: 2023 },
        { name: 'Bus', year: 2024 }
    ],
    act: function(){
        console.log("Muhammad play with toys");
    },
    car: {
        brand: 'Hundai',
        price: 45000000,
        made: 2025,
        manufacturar: {
            name: 'Tesla',
            ceo: 'Elon mask',
            country: 'USA'
        }
    }
}

// console.log(nayok.friends);
nayok.act();