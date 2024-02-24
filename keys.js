const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

// const keys = Object.keys(glass);
// console.log(keys);


// const values = Object.values(glass);
// console.log(values);

// const entries = Object.entries(glass);
// console.log(entries);


// const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// Object.freeze(glass);
// glass.source ='bn';
// console.log(glass);

// delete glass.name;

// Object.seal(glass);
// glass.price = 200;
// console.log(glass);


// for(const gls in glass){
//     const values = glass[gls]; 
    
//     console.log(gls, values);
// }

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
const values = glass[key];
console.log(values);
}

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);
const isTrue=true;
console.log(!isTrue ? "hello" : "world")

// const sum =(p, q)=> {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);


//    if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }

//    function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32));

//    const {age, z, ...others} = {x:2, y:5, z:3, name:'jbj', age:2}

//    console.log(age, z, ...others);

   const data = [{id:1, name: 'abl', address: 'kk'}];

   console.log(data[0].address);


   const product={
    count: 50,
    data: [
        {id:1, name:'klk'},
        {id:2, name:'qq'},
    ]
   }

   console.log(product.data[1].name);

const user ={
    id: 4,
    name: 'pp',
    address: {
        street: {
            first: '3z',
            second: '5a',
            third: '0o',
            
        },
        city: 'dhk',
    }
}

const user2 ={
    id: 4,
    name: 'pp',
    address: {
        city: 'dhk',  
        country: 'ban',          
        },
       
    }


console.log(user2.address.street?.second);


