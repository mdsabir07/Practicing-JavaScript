const handleAddToCart = () => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");

    const name = productName.value;
    const quantity = productQuantity.value;

    saveProductToLocalStorage(name, quantity);
    displayProduct(name, quantity);

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (productName, quantity) => {
    const producContainer = document.getElementById("producContainer");
    const li = document.createElement("li");
    li.innerText = `${productName} : ${quantity}`;
    producContainer.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");
    if (getProduct) {
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const displayProdFromLocalStorage = () => {
    const products = getProductFromLocalStorage();
    for (const product in products) {
        displayProduct(product, products[product]);
    }
}

const saveProductToLocalStorage = (productName, quantity) => {
    const cart = getProductFromLocalStorage();
    cart[productName] = quantity;
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

displayProdFromLocalStorage();