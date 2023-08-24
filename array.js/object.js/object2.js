
const regularuser = {
    username: "shailesh",
    fullname: {
        fname: "shailu",
        lname: "giriya",
        email: "somoneone@gmail.com",
        Address: {
            city: "jabalpur",
            state: "mp",
        }

    }
}
console.log(regularuser.fullname);

// two and moore object connect
// const obj1 = { 1: 'a', 3: 'b' };
// const obj2 = { 2: 'q', m: '9' };
// const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users = [
    {
        id: "xyz",
        email: "abc@gmail.com",

    },
]
users[0].id
console.log(regularuser.fullname);
// output is aaray this mtd keys
console.log(Object.keys(regularuser.fullname));

// denote key value
console.log(Object.values(regularuser.fullname));
// check property
console.log(Object.hasOwnProperty('logdin'));



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
};

// Destructuring assignment
const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

const company = {
    lname: "shailu",
    email: "abhk@gmail.com",
    price: 369,

}
const { lname, email, price } = company;
console.log(lname);
console.log(price);
