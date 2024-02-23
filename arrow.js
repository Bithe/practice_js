function add(a,b){
   const result = a+b;
   return result;
}
const add1 = function(a,b){
    return a+b;
}

const add3 = (a,b) =>  a+b;

const getPui = () => Math.PI;
// console.log(getPui());

const doMath = (x,y,z) =>{
    const sum = x+y+z;
    const multiple = x*y;
    const result = sum+ multiple;
    return result;
}

// console.log(doMath(2,2,2));

const max = Math.max(2,3 ,4);
const num = [5,6,7];
const arrayMax = Math.max(...num);
console.log(arrayMax);

function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
console.log(cube(2));

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
console.log(friends.find(friend => friend.length ==5)
);


const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}


const {price} = product.price;
console.log(price);


const numbers = [2,3];