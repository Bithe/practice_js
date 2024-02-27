const numbers = [2, 4, 3, 7, 5];
console.log(numbers);

const num1 = [...numbers];

num1.push(100);
console.log(num1);

const [a,b,c,...d] = numbers;
console.log(a,b,c,d);


const person ={
    name: 'rrr',
    age: 1,
    address: {
        zilla:'dhk',
        code: "234",
    },
    p: [1,2,3,4],
}

// const person1 = person;
// const person1 = {...person}

// person1.address = "2njc";

// console.log(person);
// console.log(person1);

// const {name, age, address} = person;
// console.log(name,age);

const {name, age:boyosh, address} = person;
console.log(name,boyosh);

const {zilla} = address;
console.log(zilla);
