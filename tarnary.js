let price = 500;
const isLeader = true;

// price = isLeader === true ? 0 : price + 100;

// console.log(price);

// if (isLeader === true) {
//   if (price > 1000) {
//     price = price / 2;
//   } else {
//     price = 0;
//   }
// } else {
//   price = price + 100;
// }

price = isLeader === true ? 
        price > 1000 ? price / 2 : 0 
    : price + 100;
console.log(price);