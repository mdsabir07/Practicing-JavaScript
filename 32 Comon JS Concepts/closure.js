// let counter = 0;
function sum() {
    // counter = counter + 1;
    // counter += 1;
    // counter ++;
    // console.log(counter);
    let counter = 0;
    return function () {
        counter++;
        console.log(counter)
    }
    updateCounter();

}
const result = sum();
result();
result();
result();

const result2 = sum();
result2()
result2()
result();