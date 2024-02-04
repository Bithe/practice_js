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


function doubleOrTriple(number, double){
    if(double === true)
    {
        const result = number *2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }

}

console.log(doubleOrTriple(5, true));


function array(numbers){
const len = numbers.length;
return len;
}
console.log([2, 4, 5, 6])
 