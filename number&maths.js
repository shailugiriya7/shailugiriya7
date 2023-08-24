const score=4000
console.log(score);

const balance=new Number(100);
console.log(balance);

// tostring is denoted number to convert string
console.log ( balance.toString());

// tofixed is decimal no. denote
const balance1=new Number(1245)
console.log(balance1.toFixed(2));


// toPrecision denote 
const newBalance=new Number(512.934);
console.log(newBalance.toPrecision(3));

// toLocalstring specialy product price releted
const newBalance1=new Number(800000);
console.log(newBalance1.toLocaleString('en-IN'));
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,+++++++++++++..MATH .........

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4,9));
console.log(Math.ceil(8,6));
console.log(Math.floor(9,2));
console.log(Math.min(4,7,5,2,9,6,14,25,4,));
console.log(Math.max(14,25,36,20,15,78,12,45));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);

