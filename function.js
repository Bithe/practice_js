// function add(num1, num2) {
//   let sum = num1 + num2;
//   console.log(sum);
// }
// add(2, 2);

// function double(number){
//     const doubled = number*2;
//     console.log(doubled);
// }
// double(2);

// let money = 6;
// double(money);

// function tenTimes(number){
//     const result = number*10;
//     return result;
// }

// const output = tenTimes(10);

// console.log(output);

// function size(str){
//     const strLength = str.length;

//     if(strLength%2 === 0){
//         return 'even';
//     }
//     else{
//         return 'odd';
//     }
// }

// console.log(size('rayaan'));
// console.log(size('bithe'));

// function doubleOrTriple(number, double) {
//   if (double === true) {
//     const result = number * 2;
//     return result;
//   } else {
//     const result = number * 3;
//     return result;
//   }
// }

// console.log(doubleOrTriple(5, true));

// function array(numbers) {
//   const len = numbers.length;
//   return len;
// }
// console.log([2, 4, 5, 6]);

// function object(person) {
//   const age = person.age;
//   return age;
// }

// let person = {
//   age: 24,
//   date: "10 june 2023",
// };

// console.log(object(person));

// function sumOfNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum = sum + number;
//   }
//   return sum;
// }

// let array = [2, 10, 20];
// const s = sumOfNumbers(array);
// console.log(s);

// function evenNum(numbers) {
//   let even = [];
//   let sum = 0;
//   for (let number of numbers) {
//     if (number % 2 === 0) {
//       even.push(number);

//       sum = sum + number;
//     }
//   }
//   return { even, sum };
// }

// let array = [2, 10, 20, 3, 40];
// const even = evenNum(array);
// console.log(even);

// function multiply(num1, num2, num3, num4) {
//   const total = num1 * num2 * num3 * num4;
//   return total;
// }
// console.log(multiply(2, 2, 2, 2));

// function oddOrEven(num) {
//   if (num % 2 === 1) {
//     const result = num * 2;
//     // console.log('odd');
//     return {'odd': result} ;
//   }
//   else{
//     result = num/2;
//     // return result;
//     return { type: 'even', value: result};
//   }
// }

// console.log(oddOrEven(4));

// function make_avg(array){

// }


// let array = [2, 10, 20, 3, 40];

// function getMenu() {
//     console.log("Burger, Pizza, Pasta");
//    }

//    console.log(getMenu);

   for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
}   


