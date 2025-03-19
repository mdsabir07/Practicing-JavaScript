document.getElementById("cashOut").style.display = "none";
document.getElementById("transaction").style.display = "none";
document.getElementById("add-money-box").addEventListener("click", function () {
    handleToggle("addMoney", "block");
    handleToggle("cashOut", "none");
    handleToggle("transaction", "none");
})
document.getElementById("cash-out-box").addEventListener("click", function () {
    handleToggle("cashOut", "block");
    handleToggle("addMoney", "none");
    handleToggle("transaction", "none");
})
document.getElementById("transactions-box").addEventListener("click", function () {
    handleToggle("transaction", "block");
    handleToggle("cashOut", "none");
    handleToggle("addMoney", "none");
})