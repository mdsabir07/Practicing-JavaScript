class Vehical {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    move() {
        console.log("I'm moving");
    }
}

class Bus extends Vehical {
    constructor(name, price, seat) {
        super(name, price);
        this.seat = seat;
    }
    route() {
        console.log("Dhaka to Comilla");
    }
}

class Truck extends Vehical {
    constructor(name, price, load) {
        super(name, price);
        this.load = load;
    }
}