// // // // // // // import _ from 'lodash'

const {
  first
} = require("lodash")

// // // // // // // console.log('hello world');
// // // // // // // console.log(_.camelCase('hello world'));


// // // // // // const a = 1
// // // // // // const b = '1'

// // // // // // console.log(a === b);


// // // // // function sum(x, y) {
// // // // //   console.log(x + y);

// // // // // }

// // // // const a = 7

// // // // double();


// // // // function double(){
// // // //   console.log(a * 2 );
// // // // } 

// // // // const heropy = {
// // // //   firstName: 'Heropy',
// // // //   lastName : 'Park',
// // // //   getFulName: function(){
// // // //     return `${this.firstName} ${this.lastName}`
// // // //   }
// // // // }
// // // // console.log(heropy)

// // // function user(first, last){
// // //   this.firstName = first;
// // //   this.lastName = last;
// // // }

// // // const heropy = new user("Heropy", "Park")

// // // user.prototype.getFullName = function () {
// // //   return `${this.firstName} ${this.lastName}`
// // // }

// // // console.log(heropy.getFullName());

// // function User(name){
// //   this.name = name
// // }

// // User.prototype.normal = function () {
// //   console.log(this.name);
// // }
// // User.prototype.arrow = () => {
// //   console.log(this.name)
// // }

// // const heropy = new User('Heropy')

// // heropy.normal()
// // heropy.arrow()

// const timer = {
//   name : "heropy!!",
//   timeout : function () {
//     setTimeout( ()=> {
//       console.log(this.name)
//     } , 2000)
//   }
// }

// timer.timeout();

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const Kwon = new User('YoungMin', 'Kwon')

// console.log(Kwon.getFullName())


// let printTree = function (randomCount) {
//   for (let i = 0; i < randomCount; i++) {
//     let result = ""
//     for (let j = randomCount - 1; j >= i - 1; j--) {
//       result += ' '
//     }
//     for (let x = 0; x < i * 2 + 1; x++) {
//       result += '*'
//     }
//     console.log(result)
//   }
// }
// printTree(5)



// console.log(Math.floor(Math.random()*100))

// var randomnum = Math.floor(Math.random()*100)

// for (let i = 2 ; i <= 100 ; i+= 4){
//   console.log(i)
//   i+= 3;
//   if (i<= 100){
// //     console.log(i);
// //   }
// // }

// // console.log(2%2)

// // var min = function (a,b){
// //   if ( a <= b){
// //     return a;
// //   }else if( b <= a){
// //     return b;
// //   }
// // }

// // // function min(a,b){
// // //   if (a <= b ? return a : )
// // // }


// // min(2,5)


const add = first => second => {return first + second}


function add(first) {
  return function (second) {
    return first+second;
  }
}
add(1);


let test =  (bool , func1, func2) =>{
  if (bool){
    return func1(trueFunc);
  }else{
    return func2(falseFunc);
  }
}
function trueFunc() {console.log(`true!`)}
function falseFunc() {console.log(`false!`)}


checkBoolean(true,falseFunc, trueFunc)


const printHello = ()=>{
  console.log('hello world')
}


const obj = {
  a: {
    b: {
      c: () => {
        console.log("Hello World")
      }
    }
  }
}