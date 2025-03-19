function getInputValueByID(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// Get innerText value
function getInnerTextByID(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// set innerText value
function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}

// toggle function
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}