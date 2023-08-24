
// function sum(number1,number2){
//     console.log(number1+number2);
// }
// sum(10,20)
// sum(25,10)
// sum("shailu","giriya")
// const reuslt=sum(10,30);

// console.log("Result:",reuslt);


// return value
function score(sub1, sub2) {
    return sub1 + sub2;
}
const sum = score(10, 50);
console.log("subject:", sum);

function msguser(usename) {
    if (!usename) {
        console.log('please enter your name');
        return
    }
    return '${usename} loged in'
    console.log("please enter your name");
}
console.log(msguser());



// const user = {
//     username: "shailu",
//     price: 968,

// }
// function addUser(anyobject) {
//     console.log('username is ${anyobject.name} and price is ${anyobject.price}');
// }
// addUser(user);

const user = {
    username: "shailu",
    price: 968,
};

function addUser(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// addUser(user);
addUser({
    username:"shailu",
    price:300,
})

// array
const newArray=[200,300,400,800];

function myArray(getarray){
    return getarray[2]
}
console.log(myArray(newArray));
console.log(myArray([200,300,400,800]));