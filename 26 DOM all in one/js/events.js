console.log('DOM event external file');

// Option 2 click event
function makeBlue() {
    document.body.style.background = 'blue';
}
function makeGreen() {
    document.body.style.background = 'green';
}

// Option 3: getElementById and than set onclick
const btnMakeOrange = document.getElementById('btn-make-orange');
btnMakeOrange.onclick = function makeOrange() {
    document.body.style.background = "orange";
}

// Option 3: different method 
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.background = 'purple';
}

// Option 4
// document.getElementById().addEventListener('event type', 'handler')
document.getElementById('btn-make-yellow').addEventListener('click', function makeYellow() {
    document.body.style.background = 'yellow';
});