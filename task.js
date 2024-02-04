const burger = 600;

if(burger>=500){
    console.log('free drinks');
}
else{
    console.log(' 30tk');
}


// bmi

let weight = 72;
let height = 1.249;
let bmi = weight / (height^2);
if(bmi <18.5 ){
    console.log('nrml');
}
else if(bmi >= 18.5 && bmi <=24.9){
    console.log('nrml');
}
else if(bmi>=25 && bmi<=29.9){
    console.log('over');
}
else{
    console.log('obese');
}


const score = 80;
const frndScore = 45;

if(score >=80){
    if(frndScore>=80){
        console.log('lunch');
    }

    else if(frndScore<80){
        console.log('gd luck');
    }
    
}
else{
    console.log('sad');
}



// 
const num1= 20;
const num2 = 10;
let result =0;


if(num1>num2){
    result = num1*2;
}
else{
     result =num1+num2;
}
console.log(result);

result = num1>num2 ? num1*2 : num1+num2;
console.log(result);