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

    if(typeof(string1 || string2 ) !== 'string'){
        return 'enter a string';
    }
    const match = string1.includes(string2);
    return match;
}

console.log(matchFinder('Joh', 'jo'));
console.log(matchFinder('joh', 'jo'));
console.log(matchFinder('Joh', '2'));
console.log(matchFinder(3, 'jo'));

// 


