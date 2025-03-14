function cashOut(money) {
    if (typeof money === 'number') {
        if (money < 0) {
            return "Invalid"
        }
        const cash = money * 1.75;
        const cashOutCharge = cash / 100;
        return cashOutCharge;
    }
    else {
        return "Invalid";
    }
}
// const charge = cashOut(4300);
// console.log(charge);

function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }

    const spacialCharacters = ".-_+@";
    if (spacialCharacters.includes(email.charAt(0))) {
        return false;
    }

    if (email.split('@').length !== 2) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    if (!email.endsWith('.com')) {
        return false;
    }
    return true;
}
// console.log(validEmail(345234));


function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mango = 0;
    let banana = 0;

    for (let vote of votes) {
        if (vote === 'mango') {
            mango++;
        }
        else if (vote === 'banana') {
            banana++;
        }
    }

    if (mango > banana) {
        return "Mango";
    }
    else if (banana > mango) {
        return "Banana";
    }
    else if (mango === banana) {
        return "Draw";
    }
}
// console.log(electionResult(["mango", "mango", "banana", "banana"]));

function isBestFriend(f1, f2) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object') {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }
    return false;
}

// const person1 = { name: "Alice", roll: 1, bestFriend: 2 };
// const person2 = "Not an object";

// console.log(isBestFriend(person1, person2)); // Returns: true

function calculateWatchTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }
    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== 'number') {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds += times[i];
    }

    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return { hour: hours, minute: minutes, second: seconds };
}
// const times = calculateWatchTime([100, 3800]);
// console.log(times);




