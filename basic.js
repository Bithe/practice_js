function cubeNumber(number) {
  if (typeof number !== "string") {
    const cube = Math.pow(number, 3);
    return cube;
  } else {
    return "not num";
  }
}

//   if (typeof number !== "number") {
//     return ("entr num");
//   }

//   const cube = Math.pow(number, 3);
//   return cube;
// }

console.log(cubeNumber("h"));

//

function matchFinder(string1, string2) {
  if (typeof (string1 || string2) !== "string") {
    return "enter a string";
  }
  const match = string1.includes(string2);
  return match;
}

console.log(matchFinder("Joh", "jo"));
console.log(matchFinder("joh", "jo"));
console.log(matchFinder("Joh", "2"));
console.log(matchFinder(3, "jo"));

//
console.log("........................");

function sortMaker(numbers) {
  let equal = [];
  for (const num of numbers) {
    if (num < 0) {
      return "invalid";
    } else if (equal.includes(num)) {
      return "equal";
    } else {
      equal.push(num);
    }
  }

  return numbers.sort().reverse();
}

const arr = [4, 2, -5];
const arra = [0, 0, 0, 0, 0];
const array = [4, 2];
const arrays = [4, 1, 2];
const arrayEqual = [4, 4, 4];
const arrInvalid = [2, 8, 4, 6, -3, 4];

console.log(sortMaker(arr));
console.log(sortMaker(arra));
console.log(sortMaker(array));
console.log(sortMaker(arrays));
console.log(sortMaker(arrayEqual));
console.log(sortMaker(arrInvalid));

console.log("........................");

const address = [
  { street: 10, house: "15a", society: "earth" },
  { street: 1, society: "earth" },
  { street: 3 },
];

function findAddress(address) {
  let street = [];
  let house = [];
  let society = [];
  for (const addr in address) {
    street.push(address[addr].street);
    house.push(address[addr].house);
    society.push(address[addr].society);
  }
  return [street, house, society];
}

console.log(findAddress(address));

// function findAddress(address) {
//   let values = [];
//   for (const item of address) {
//     values[item.street] = item;
//     // values.push(item);
//     //   values = Object.values(address.street);
//   }
//     return values;
// }

// console.log(findAddress(address));
console.log("........................");

const addressNew = [
  { street: 10, house: "15a", society: "earth" },
  { street: 1, society: "earth" },
  { street: 3 },
];

function findAddress(addressNew) {
  let output = "";
  for (const addr of addressNew) {
    let allAddress = `${addr.street}, ${addr.house || "_"}, ${
      addr.society || "_"
    }  `;
    output += allAddress + "\n";
  }
  return output;
}

console.log(findAddress(addressNew));
console.log("........................");

function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "give values";
  }

  let sum = 0;
  for (const tk of changeArray) {
    sum = sum + tk;
  }

  if (sum < totalDue) {
    return false;
  } else {
    return true;
  }

  //   return sum;
}

console.log(canPay([2], 10));
