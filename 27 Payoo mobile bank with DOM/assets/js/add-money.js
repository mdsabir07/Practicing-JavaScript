document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const account = document.getElementById("account-number").value;
        const bank = document.getElementById("allBank").value;
        const pin = document.getElementById("pin").value;
        const amount = getInputValueByID("amount");
        const mainBalance = getInnerTextByID("main-balance");
        if (amount < 0) {
            console.log(alert("Invalid amount"));
            return;
        }
        if (account.length === 17 && Number.isInteger(Number(account))) {
            if (amount && Number.isInteger(Number(amount))) {
                if (pin.length === 4 && Number.isInteger(Number(pin))) {
                    const sum = mainBalance + amount;
                    setInnerTextByIDandValue("main-balance", sum);

                    const transactionContainer = document.getElementById("transaction-container");
                    const div = document.createElement("div");
                    div.classList.add("border border-gray-300 bg-blue-100");
                    div.innerHTML = `
                    <p>Added <b>${amount}</b> from the bank of <b>${bank} to this <b>${account}</b> account number.</p>
                    `
                    transactionContainer.appendChild(div);
                } else {
                    console.log(alert("Invalid PIN"));
                }
            } else {
                console.log(alert("Enter amount"))
            }
        } else {
            console.log(alert("Enter valid account number"));
        }

    })
