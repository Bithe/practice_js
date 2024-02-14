console.log('append.js');

// where to add
const placesList =document.getElementById('places-list');
// console.log(placesList);




//what to add

const newLi = document.createElement('li')
newLi.innerText = 'bandorbon';

// add the Child

placesList.append(newLi);



// new section adding

const mainContainer = document.getElementById('main-container');
// what to add
const section = document.createElement('section');
mainContainer.append(section);


const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.append(h1);


const ul = document.createElement('ul');
section.append(ul);

const li = document.createElement('li');
li.innerText = 'biriyani';
ul.append(li);

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
ul.append(li1);



const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
<h2> rayyan ghumay </h2>
<ul> 
<li>babu</li>
<li>babu</li>
</ul>`

mainContainer.append(sectionDress);



