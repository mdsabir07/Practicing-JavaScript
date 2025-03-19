document.getElementById("btn-login").addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber);
    const pinNumber = document.getElementById("numberInput").value;
    // const pinConvertToInteger = parseInt(pinNumber);

    if (phoneNumber.length === 11 && Number.isInteger(Number(phoneNumber))) {
        if (pinNumber.length === 4 && Number.isInteger(Number(pinNumber))) {
            window.location.href = "./main.html";
        }
        else {
            console.log(alert('Pin not match'));
        }
    }
    else {
        console.log(alert("fix number amount"));
    }
})