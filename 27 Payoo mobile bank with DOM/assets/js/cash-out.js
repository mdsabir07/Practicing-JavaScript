document.getElementById("btn-cashout").addEventListener("click", function (event) {
    event.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pin = document.getElementById("cashout-pin").value;
    const mainBalance = getInnerTextByID("main-balance");
    if (amount > mainBalance) {
        console.log(alert("Insuficient balance"));
        return;
    }
    if (agentNumber.length === 11 && Number.isInteger(Number(agentNumber))) {
        if (amount && Number.isInteger(Number(amount))) {
            if (pin.length === 4 && Number.isInteger(Number(pin))) {
                const sum = mainBalance - amount;
                setInnerTextByIDandValue("main-balance", sum);

                const transactionContainer = document.getElementById("transaction-container");
                const div = document.createElement("div");
                div.classList.add("border border-gray-300 bg-blue-100");
                div.innerHTML = `
                    <p>Succefully cashout <b>${amount}</b> from this <b>${account}</b> account number.</p>
                    `
                transactionContainer.appendChild(div);
            } else {
                console.log(alert("Invalid PIN"))
            }
        } else {
            console.log(alert("Enter amount"));
        }
    } else {
        console.log(alert("Invalid agent number"));
    }

})