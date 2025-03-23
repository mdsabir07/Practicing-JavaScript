class Product {
    // owner = "Sabir";
    constructor(name, price, brand, color, owner) {
        // console.log(name, price, brand, color);
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.color = color;
        this.owner = owner;
    }

    details() {
        console.log("it's details", this.color);
    }
}

const newProduct = new Product("iPhone", 1235, "apple", "black", "Muhammad");
newProduct.details();

const huawei = new Product("Huawei", 30000, "Huawei", "silver", "Muhammad");
huawei.details();