const person = {
  name: "rrr",
  age: 1,
  address: {
    zilla: "dhk",
    code: "234",
  },
  p: [1, 2, 3, 4],
};

const {
  address: { zilla: district },
} = person;
console.log(district);

const numbers = [1, 5, 7, 9];

const a = numbers.forEach((num) => num);
console.log(a);
const b = numbers.map((num) => num + 1);
console.log(b);
console.log(numbers);

const x = numbers.find((item) => item === 5);
console.log(x);

const y = numbers.filter((item) => item % 2 === 0);
console.log(y);

const r = numbers.reduce((preValue, currentValue) => {
  return preValue + currentValue;
}, 0);

console.log(r);

numbers.map((item, index) => {
  console.log("item:", item, "index:", index);
});

function show() {
  console.log("rayaan");
}

function anotherFunc(age, callback) {
  console.log(age, "month");
  setTimeout(() => {
    callback();
  }, 1000);
}

anotherFunc(9, show);

const outerFunc = () => {
  let count = 0;

  const innerFunc = () => {
    count++;
    console.log(count);
  };
  return innerFunc;
};

const x1 = outerFunc();
x1();
x1();
x1();

const newNumbers = [...numbers, 55];

console.log(newNumbers);
console.log(numbers);

const product = [
    {name: "lptp", price: 3200, brand: "smsng" },
    {name: "watch", price: 32000, brand: "ip" },
    {name: "cam", price: 32000, brand: "ray" },
];

const newProd = [...product];
console.log(newProd);

const remaining = newProd.filter(product => product.name !=='lptp');
console.log(remaining);
