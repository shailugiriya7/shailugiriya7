

const user = {
    username: "shailu",
    email: "we@gmail.com",
    welcomemsg: function () {
        console.log(`Welcome, ${this.username}`);
        console.log(this)
    }
}

user.welcomemsg();
user.username = "babu rangila"
user.welcomemsg();


// arrow function
// {} mein retun ke andar hi excute hoga 
// explite return

const two = (num1 ,num2) => {
    return num1+num2

}
console.log(two(4,5));

// other mtd esme {} nhi h to simple excute kar skte hai
const three=(num3,num4) => num3+num4
// const three=(num1)=>({username:"shailu"})

// const three=(num3.num4) => (num3+num4) difrent typ write
// implicite return()

console.log(three(10,80))