// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(res => console.log(res.json()))
// }
// loadData();

// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;
//         if (status) {
//             const mockData = {
//                 json: () => Promise.resolve({ name: "muhammad" })
//             }
//             resolve(mockData)
//         }
//         else {
//             reject("server error")
//         }
//     })
// }

// fetchData()
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json()).then(data => data)
}))
    .then(res => res)
    .then(data => console.log(data))
    .catch(err => console.log(err));