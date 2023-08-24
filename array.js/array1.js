

const myarr=[1,2,4,9,3,"shailu",false];
console.log(myarr);

const newarr=new Array(1,8,2,6,547,7,5);
console.log(newarr);

const array=[1,8,3,4,2,7];
console.log(array);

// // add new element last 
array.push(9,2);
console.log(array);

// // delete last element
array.pop();
console.log(array);


const array1=[1,2,3,5,8];
array1.shift();
console.log( "shift",array1);

array1.unshift(9,12);
console.log(array1);
console.log("unshift", array1);


// concat element
const array3=[44,54];
const array4=[25,78];
const combined=array3.concat(array4);
console.log(combined);

// element spread and more array connect
   const arraythree=[56,50];
   const arrayfour=[40,45];
   const arrayfive=[30,35];
   const combine34=[...arraythree,...arrayfour,...arrayfive];
   console.log(combine34);

const array5=[12,14,15,16,13,20];
const Sliceone=array5.slice(0,3);
console.log(Sliceone);

const array6=[20,30,40,50,60];
const Spliceone=array6.splice(1,4);
console.log(Spliceone);

const array7 = ["hello", "world"];
const arrayJoin = array7.join(" ");
console.log(arrayJoin);

const array8 = [17, 12, 14, 16, 18, 25, 29, 30];
const arrayeigth = array8.includes(9);
console.log(arrayeigth);

// reverse element
array8.reverse();
console.log(array8);

const array9=[90,93,92,95,98,94,100];
const arraynine=array9.indexOf(12); 
console.log(arraynine);

const array10=[1,2,3,[10,50,40],20,80,[10,20],90];
const arrayten=array10.flat(Infinity);
console.log(arrayten);

