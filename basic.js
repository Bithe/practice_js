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

// 

function matchFinder(string1, string2){
    const match = string1.includes(string2);
    return match;
}

console.log(matchFinder('Joh', 'jo'));

