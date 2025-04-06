const handleLocalStorage = () => {
    const name = "Muhammad Bin Sabir";
    localStorage.setItem("muhammad", name);

    const person = {
        name: 'Muhammad',
        age: 4,
        friends: [
            "Sabiha", "Baba", "Ma"
        ]
    }

    const convertToString = JSON.stringify(person);
    localStorage.setItem("sabir", convertToString);
}

const data = localStorage.getItem("sabir");
const convertedToOld = JSON.parse(data);
console.log(convertedToOld.name);