const handlePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(post => {
            displayPost(post);
        })
}

const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer");
    for (const post of posts) {
        console.log(post);
        const div = document.createElement("div");
        div.classList.add("single-post");
        div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        <button>Read more</button>
        `;
        postContainer.appendChild(div);
    }
}

handlePost();