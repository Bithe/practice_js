const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor ='lightgreen'
}

const details = document.getElementById('details');
details.style.backgroundColor = 'yellow';
details.classList.remove('lg-text');

const placeContainer =document.getElementById('place-container');
placeContainer.classList.add('yellow-bg');

