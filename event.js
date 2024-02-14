const redtn = document.getElementById('red');
// console.log(redtn)
redtn.onclick = makeRed;

function makeRed() {
  document.body.style.backgroundColor = "red";
}


// 

const purple = document.getElementById('prpl');

purple.onclick = function purpleBtn(){
    document.body.style.backgroundColor = "purple";
}
