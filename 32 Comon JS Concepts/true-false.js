// const name = ""; // falsy value-> false, 0,-0, null, undefined, NaN
const name = " "; // truty value -> true, 1, -1, {}, [], function(){}
if (name) {
    console.log("This is a truthy value");
} else {
    console.log("This is a falsy value");
}