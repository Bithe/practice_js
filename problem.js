function inchtoFeet(inch) {
  const feet = inch / 12;
  const remaining = inch % 12;
  const result = feet + " ft " + remaining + " inch";

  return result;
}

console.log(inchtoFeet(75));

function odd_avg(numbers) {
  const odd = [];
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 !== 0) {
      odd.push(num);
      sum += num;
    }
  }
  const count = odd.length;
  const avg = sum / count;
  return avg;
}

const array = [2, 3, 4, 5, 3];

const total = odd_avg(array);
console.log(total);

//

function duplicate(array) {
  let noDup = [];
  for (const item of array) {
    if (noDup.includes(item) === false) {
      noDup.push(item);
    }
  }
  return noDup;
}

const arrays = ["rayaan", "bithe", "rayaan"];
const unique = duplicate(arrays);
console.log(unique);
