const person ={
    name: 'rrr',
    age: 1,
    address: {
        zilla:'dhk',
        code: "234",
    },
    p: [1,2,3,4],
}


const { address: {zilla: district} } = person;
console.log(district);

const numbers =[1,5,7,9];


const a = numbers.forEach(num => num);
console.log(a);
const b = numbers.map(num=>num+1);
console.log(b);
console.log(numbers);


const x = numbers.find(item => item ===5);
console.log(x);

const y = numbers.filter(item => item%2 ===0);
console.log(y);


const r = numbers.reduce( (preValue, currentValue) =>{
    return preValue+currentValue;
},0 );

console.log(r);

