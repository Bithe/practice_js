function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}

function loadDatas(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayData(data));

}
function displayData(data){
    console.log(data)

}