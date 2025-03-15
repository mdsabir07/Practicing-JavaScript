function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[2]);
}
add(7, 456, 4, 767, 23)