const myname="Date:Time:Month";
console.log(myname);

const myDate=new Date();
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

const dateCreate=new Date(2023,08,15);
console.log(dateCreate.toDateString());

const fulldate=new Date(2023,0,15,5,3);
console.log(fulldate.toLocaleString());


const newdate=new Date();
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getFullYear());
console.log(newdate.getMonth());
console.log(newdate.getTime());

