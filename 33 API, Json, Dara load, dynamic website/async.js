const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log("Error dhorchi", error))
}
// handlePost();

const handlePost2 = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch {
        console.log("Hello error!");
    }
}
handlePost2()