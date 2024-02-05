// // function inchtoFeet(inch) {
// //   const feet = inch / 12;
// //   const remaining = inch % 12;
// //   const result = feet + " ft " + remaining + " inch";

// //   return result;
// // }

// // console.log(inchtoFeet(75));

// // function odd_avg(numbers) {
// //   const odd = [];
// //   let sum = 0;
// //   for (const num of numbers) {
// //     if (num % 2 !== 0) {
// //       odd.push(num);
// //       sum += num;
// //     }
// //   }
// //   const count = odd.length;
// //   const avg = sum / count;
// //   return avg;
// // }

// // const array = [2, 3, 4, 5, 3];

// // const total = odd_avg(array);
// // console.log(total);

// // //

// // function duplicate(array) {
// //   let noDup = [];
// //   for (const item of array) {
// //     if (noDup.includes(item) === false) {
// //       noDup.push(item);
// //     }
// //   }
// //   return noDup;
// // }

// // const arrays = ["rayaan", "bithe", "rayaan"];
// // const unique = duplicate(arrays);
// // console.log(unique);

// // const maxArray = Math.max(2, 3, 4, 5, 3);
// // console.log(maxArray);

// const heights = [2, 3, 4, 5];
// function getMax(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }

// const max = getMax(heights);
// console.log(max);

// const phone = [
//   { brand: "bb", price: 1200 },
//   { brand: "r", price: 1300 },
//   { brand: "c", price: 1400 },
// ];

// function total(phone) {
//   let min = phone[0];
//   for (const phone of phones) {
//     if (phone.price < min) {
//       min = phone;
//     }
//   }
//   return min;
// }

// function getMIn(phones) {
//   let total = 0;
//   for (const phone of phones) {
//    total = total + phone.price;
//   }
//   return total;
// }

// const minPrice = getMIn(phone);

// console.log(minPrice);

const phone = [
  { brand: "bb", price: 1200 },
  { brand: "r", price: 1300 },
  { brand: "c", price: 1400 },
];

function getMIn(phones) {
  let total = 0;
  for (const phone of phones) {
    total = total + phone.price;
  }
  return total;
}

const sum = getMIn(phone);

console.log(sum);

console.log(typeof null);
