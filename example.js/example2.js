

const score=[10,20,30,40,50,60,70,24,15,60,70,95,]

// const score1=score.filter( (item) =>item>35)
//     console.log(score1) ;
  
  const score1=score.filter( (item) =>{
       return item>=30
  }   )

// console.log(score1);


const score2=[1,2,3,4,5,6,7,8,9]
score2.forEach(   (item)=> {
  // console.log('rangila',item+20);
  
});

const name3={
  name:'shailu',
  sub:'java',
  greet:function(){
    // console.log('hello',this.name)
  }
}
name3.greet()

const filterone=[10,20,14,13,58,96,74,52,25,35,10,54,64,60,35,74,84,98]

const filter1=filterone.filter(  (item)  =>{
  return item>50+10
}           )
console.log(filter1);



const books = [
      { title: 'book1', gener: 'history', publish: 1980, edition: 2000 },
      { tiele: 'book2', gener: 'politics', publish: 1989, edition: 2004 },
      { title: 'book3', gener: 'history', publish: 1990, edition: 2010 },
      { title: 'book4', gener: 'maths', publish: 1995, edition: 2015 },
      { title: 'book5', gener: 'science', publish: 2000, edition: 2020 },
      { title: 'book6', gener: 'politics', publish: 1999, edition: 2010 },
  ]
   const book = books.filter((item) => item.gener==='history'&& item.edition>=2000)
   console.log(book);

   const scoreten=[10,20,40,30,50,60,70,80,90,100]

   const score10=scoreten.map(  (item)=> item>=30 )
   console.log(score10);