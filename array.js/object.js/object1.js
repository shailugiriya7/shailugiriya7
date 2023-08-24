// symbole defind
const mysym = Symbol('key1');
const mysym1 = Symbol('key2');


// object defind
const details = {
    name: "shailesh",
    email: "shailu@gmail.com",
    logedin: "monday",

    // key syntax
    // [mysym]: "mykey1",
    // [mysym1]: "mykey2",



}
// other object defind
// console.log(details.logedin);

// console.log(details["name"]);
// console.log(details.email);
// console.log(details[mysym]);
// console.log(details[mysym1]);

// change element this
// details.email="shailesh13@gmial.com";
// console.log(details);

// // freeze object this
// Object.freeze(details);
// details.email="babugiriya@gmail.com";
// console.log(details.email);

details.greeting = function () {
    console.log("hello say");

}


details.greeting2=function(){
    console.log("hello,${this.name}");
}
console.log(details.greeting2());
console.log(details.greeting());
