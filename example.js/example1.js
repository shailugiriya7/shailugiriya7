
// for of

const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (const item of score) {
    // console.log(item)

}
const artical = "hello babes"

for (const item of artical) {
    // console.log(item)

}

// for in

const scoretwo = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (const key in scoretwo) {
    // console.log(scoretwo[key]);

}
const scorethree = {
    sachin: 100,
    rohit: 200,
    virat: 30,
    ritu: 100,
};

for (const key in scorethree) {
    // console.log(`${key}:- ${scorethree[key]}`);
}

const score10=[10,20,30,40,50,60,70,80,90]

for (const item of score10) {
    // console.log('babu',item);
    
}

const score11=['ram','sita', 'gopal','vishal']

for (const key in score11) {
    // console.log('gobar',score11);
   
}

  

//  map
const map=new Map()

map.set('in','india')
map.set('us', 'united state ')
map.set('jp','japan')

for (const [key, value] of map) {
    //   console.log(key, ':-', value) ;  
}

const mapone= new Map()
mapone.set('subject','fullname')
mapone.set('js', 'java script')
mapone.set('c','case cading')
mapone.set('p','programing')
mapone.set('hist','history')
mapone.set('bio','biography')
mapone.set('rj','rajsthan')

for (const [key,value] of mapone) {
    // console.log(key,':', value);
    
}


const score19=[10,20,30,40,50,60,70,80,90]

score19.forEach( (item) =>{
    // console.log(item+10);
}   )

const name1=['shailesh','shilu','vikrambabu', 'gobar']

name1.forEach((item) => {
    console.log(item)
})


const person={
    name:' shailu',
    greet:function(){
        console.log('hello'+this.name);


    }
   

}
person.greet()