console.log('Event handler');
document.getElementById('btn-change-title').addEventListener('click', function () {
    // console.log('Button clicked');
    const changeableTitle = document.getElementById('changeable-title');
    changeableTitle.innerText = "Updated event title text by JS";
})


document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoChange = document.getElementById('user-info');
        userInfoChange.innerText = "user logged in";
    }) 