

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const newnums=mynums.filter((nums) => nums<4)

// // or dono sahi hai 
// const newnums = mynums.filter((nums) => {
//     return nums > 4
// })
// // console.log(newnums);


// const books = [
//     { title: 'book1', gener: 'history', publish: 1980, edition: 2000 },
//     { tiele: 'book2', gener: 'politics', publish: 1989, edition: 2004 },
//     { title: 'book3', gener: 'history', publish: 1990, edition: 2010 },
//     { title: 'book4', gener: 'maths', publish: 1995, edition: 2015 },
//     { title: 'book5', gener: 'science', publish: 2000, edition: 2020 },
//     { title: 'book6', gener: 'politics', publish: 1999, edition: 2010 },
// ]
// // const book = books.filter((item) => item.gener==='history')
// // or
// const book = books.filter((item) => {
//     return item.gener === 'history' && item.tiele == 'book1'
// })


// maps

// console.log(book);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const number = numbers.map((item) => item + 10)

// console.log(number);


// chaining

const number1=[10,20,30,40,50,60,70,80,90,100]
const numberone=number1
.map( (item) => item*10 )
.map( (item) =>item+1 )
.filter( (item) => item<=500)

console.log(numberone);

const numone=[20,30,50,60,40,70,80,90,100,500,400,600,200,700,300]
 
const num1= numone.filter( (item) =>item<=200 && item>50 )
console.log(num1);


// reduce

const score = [1, 2, 3, 4, 5];

const score1 = score.reduce(function(acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval; // You need to return a value in each iteration
}, 0);

console.log(score1);

const scoreone=[20,30,40,50,60 ,1000]

const score3=scoreone.reduce( (aacc,currvale) => aacc+currvale ,0 )
console.log(score3);


// shoping cart

const shoping=[
    {
      name:'java',
      price:1200  
    },

    {
      name:'c++',
      price:9999

    },
    {
       nmae:'abc',
       price:1999

    },
]
const shoping1=shoping.reduce((acc, item)=> acc+item.price  , 0    )

console.log(shoping1);