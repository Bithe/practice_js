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

Object.seal(glass);
glass.price = 200;
console.log(glass);

