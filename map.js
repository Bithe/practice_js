const numbers = [2,3,4];

// const doubled = [];
// for(const num of numbers){
//     const double = num*2;
//     doubled.push(double);
// }

// console.log(doubled);

// const result = numbers.map();



const output = numbers.map(n => n*2);
console.log(output);


const selected = numbers.filter(p=>p>2);
console.log(selected);

const total = numbers.reduce((a,b) => a+b ,0);
console.log(total);


const data = [ 
    {id:1, name: 'abl', address: 'kk'},
    {id:1, name: 'abl', address: 'kk'},
];


class product {
    country = 'ban';

    constructor(){
        
    }
    speak(){
        console.log(`djdjd ${talk}`)
    }
}

const len = new product();
console.log(len);

