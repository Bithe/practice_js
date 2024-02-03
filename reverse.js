let sentence ='devloper running';

// let rev=''

// for( i=0; i<sentence.length; i++){
//     // console.log(sentence[i]);
//     let letter = sentence[i];
//     // console.log(letter);
//     rev = letter+rev;
    
// }

// console.log(rev);


const rev = sentence.split('').reverse().join('');
console.log(rev);


const com = {
    brand: 'apl',
    price:500,
}

const key = Object.keys(com);
const values = Object.values(com);
console.log(key, values);