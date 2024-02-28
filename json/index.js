function loadDataName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayNameData(data) );
}


function displayNameData(data){

    for(const user of data){
        console.log(user.name);

        const ul= document.getElementById('user-lists');

        const li = document.createElement('li');
        li.innerText= user.name;
        ul.appendChild(li);
    }
}