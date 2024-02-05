function cubeNumber(number) {
  if(typeof(number) !== 'string'){
      const cube = Math.pow(number, 3);
      return cube;

  }
  else{
      return('not num');
  }
}

//   if (typeof number !== "number") {
//     return ("entr num");
//   }

//   const cube = Math.pow(number, 3);
//   return cube;
// }

console.log(cubeNumber('h'));

