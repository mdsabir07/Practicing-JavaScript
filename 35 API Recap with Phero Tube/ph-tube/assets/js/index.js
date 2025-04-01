const showLoader = () => {
    document.getElementById("loader").classList.remove("hidden");
    document.getElementById("videoContainer").classList.add("hidden");
}
const hideLoader = () => {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("videoContainer").classList.remove("hidden");
}


function removeActiveClass() {
    const activeBtns = document.getElementsByClassName("active");
    for (let btn of activeBtns) {
        btn.classList.remove("active")
    }
}

function loadCategories() {
    // 1. fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        // 2. convert promise to json
        .then(res => res.json())
        // 3. send data to display
        .then(data => displayCategories(data.categories))
}

function loadVideos(searchText = "") {

    showLoader();
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then(data => {

            removeActiveClass();
            document.getElementById("all-btn").classList.add("active");
            displayVideos(data.videos)
        })
}


const loadVideoDetails = (videoID) => {
    console.log(videoID);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayVideoDetails(data.video))
}

const displayVideoDetails = (video) => {
    document.getElementById("video_details").showModal();
    const detailsContainer = document.getElementById("detailsContainer");

    detailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full shadow-sm">
        <figure>
            <img src="${video.thumbnail}" alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>${video.description}</p>
        </div>
    </div>
    `
}

const displayCatVideos = (id) => {
    showLoader();
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActiveClass();
            const clickedBtn = document.getElementById(`btn-${id}`);
            clickedBtn.classList.add("active");
            displayVideos(data.category)
        })
}

function displayCategories(categories) {
    // get the container
    const catsContainer = document.getElementById("cats-container");
    // loop operation on Array of Object
    for (const cat of categories) {
        const catsDiv = document.createElement("div");
        catsDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="displayCatVideos(${cat.category_id})" class="btn btn-small hover:bg-red-500 hover:text-white">${cat.category}</button>
        `;

        // create element
        catsContainer.appendChild(catsDiv);
    }
}

// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        videoContainer.innerHTML = `
        <div class="flex flex-col justify-center items-center gap-3 py-8 col-span-full">
            <img src="./assets/imgs/Icon.png" alt="">
            <h2 class="text-3xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>`;
        hideLoader();
        return;
    }

    videos.forEach(video => {
        // console.log(video)
        const div = document.createElement("div");
        div.classList.add("video-card");
        div.innerHTML = `
        <div class="card bg-base-100">
            <figure class="relative">
                <img class="w-full h-40" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-3 right-3 text-sm text-white bg-black rounded-md px-2 pb-1">3hrs 56 min
                    ago</span>
            </figure>
            <div class="flex gap-3 py-5">
                <div class="">
                    <img class="rounded-full w-10 h-10 object-cover" src="${video.authors[0].profile_picture}" />
                </div>
                <div class="information">
                    <h3 class="card-title">${video.title}</h3>
                    <p class="text-sm text-gray-500 flex gap-2 items-center">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img class="w-4 h-4" src="./assets/imgs/verified.png" alt="">` : `Not verified`}</p>
                    <p class="text-sm text-gray-500">${video.others.views} views</p>
                </div>
            </div>
            <button id="btnVideoDetails" onclick="loadVideoDetails('${video.video_id}')" class="btn btn-small">Load details</button>
        </div>
        `;

        videoContainer.appendChild(div);
    })
    hideLoader();
}

document.getElementById("searchInput").addEventListener("keyup", (e) => {
    const input = e.target.value;
    loadVideos(input)
})

loadCategories()