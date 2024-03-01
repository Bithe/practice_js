// function loadComments(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

//     .then(res => res.json())
//     .then(data => console.log(data))

//     .catch(error => console.log('the error is', error));
// }

const loadComments2 = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    const data = await res.jon();
    console.log(data);
  } 
  catch(error) {
    console.error("its an error");
  }
};



