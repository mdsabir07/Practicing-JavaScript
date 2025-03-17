document.getElementById('btn-post-comment')
    .addEventListener('click', function () {
        // step 2: get the text writted in the comment text area
        const commentBox = document.getElementById('comment-box');
        const newComment = commentBox.value;

        // step 3: get the comment node where commet will publish
        const commentContainer = document.getElementById('comment-container');
        console.log(commentContainer);

        // step 4: create a p tag and set innerText
        const commentElment = document.createElement('p');
        commentElment.classList.add('comment');
        commentElment.innerText = newComment;

        // step 5: append new p tag to the parent node
        commentContainer.appendChild(commentElment);

        // step 6: clean comment box after post comment
        commentBox.value = '';
    })