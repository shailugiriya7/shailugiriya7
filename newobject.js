const biodata={
    name:"shailu",
    lname:"giriya",
    email:"java@gmail.com",
    std:123654,
   add: {
      city:"jabalpur",
      state:"mp",
      pin:8526,


    }
}
console.log(Object.keys(biodata.add));
console.log(Object.values(biodata.add));

const myaar=[
    {
     pin:123,
     name:"shailu",

    }
]
console.log(myaar);

function sumtwo(num1,num2){
    console.log(num1+num2);
}
sumtwo(20,50)
sumtwo(20,80)
sumtwo("shailu"," giriya")
const result=sumtwo(80,20);
console.log(result);


function score(num3,num4){
    return(num3+num4)
}
const result1=score(10,20);
console.log("value:",result1);


const user={
    name:"shailu",
    pin:201584,
}

function addUser(anyobject){
    console.log('user name ${anyobject.name}, and pin this${anyobject.pin}');
}
addUser(user);