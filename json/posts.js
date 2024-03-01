function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}

function displayPosts(data){

    for(const post of data){
        const postContainer = document.getElementById('posts-container');

        postContainer.classList.add('post');

        const div = document.createElement('div');
        console.log(post);

        div.innerHTML = `
        <h3>User - ${post.userID} </h3>
        <h4>Post: ${post.title}</h4>
        <h5>Post Description:${post.body}</h5>
        `;
        postContainer.appendChild(div);
    }
}

loadPosts();