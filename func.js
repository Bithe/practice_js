const score =70;

function calculateGrade(score){
 
    if( score>=90 && score<=100){
        console.log('A');
    }
     
   else if( score>=80 && score<=89){
        console.log('B');
    }
     
    else if( score>=70 && score<=79){
        console.log('C');
    }
}
const grade = calculateGrade(score);

const str = "Hello";
str[0] = "h";
console.log(str);




