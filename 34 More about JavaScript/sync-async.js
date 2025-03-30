const loadData = async () => {
    try {
        console.log("First data");
        console.log("second data");

        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json();
        console.log(data)

        const num = 10 + 20;
        console.log(num);
        console.log("third data");
    } catch (error) {

    }
}
loadData();