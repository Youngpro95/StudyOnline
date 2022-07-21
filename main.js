// // // // // // // // import _ from 'lodash'

const { functionsIn } = require("lodash");

// const { reject } = require("lodash")

// const { first } = require("lodash");

// // // // // // // // console.log('hello world');
// // // // // // // // console.log(_.camelCase('hello world'));

// // // // // // // const a = 1
// // // // // // // const b = '1'

// // // // // // // console.log(a === b);

// // // // // // function sum(x, y) {
// // // // // //   console.log(x + y);

// // // // // // }

// // // // // const a = 7

// // // // // double();

// // // // // function double(){
// // // // //   console.log(a * 2 );
// // // // // }

// // // // // const heropy = {
// // // // //   firstName: 'Heropy',
// // // // //   lastName : 'Park',
// // // // //   getFulName: function(){
// // // // //     return `${this.firstName} ${this.lastName}`
// // // // //   }
// // // // // }
// // // // // console.log(heropy)

// // // // function user(first, last){
// // // //   this.firstName = first;
// // // //   this.lastName = last;
// // // // }

// // // // const heropy = new user("Heropy", "Park")

// // // // user.prototype.getFullName = function () {
// // // //   return `${this.firstName} ${this.lastName}`
// // // // }

// // // // console.log(heropy.getFullName());

// // // function User(name){
// // //   this.name = name
// // // }

// // // User.prototype.normal = function () {
// // //   console.log(this.name);
// // // }
// // // User.prototype.arrow = () => {
// // //   console.log(this.name)
// // // }

// // // const heropy = new User('Heropy')

// // // heropy.normal()
// // // heropy.arrow()

// // const timer = {
// //   name : "heropy!!",
// //   timeout : function () {
// //     setTimeout( ()=> {
// //       console.log(this.name)
// //     } , 2000)
// //   }
// // }

// // timer.timeout();

// // class User {
// //   constructor(first, last) {
// //     this.firstName = first
// //     this.lastName = last
// //   }
// //   getFullName() {
// //     return `${this.firstName} ${this.lastName}`
// //   }
// // }

// // const Kwon = new User('YoungMin', 'Kwon')

// // console.log(Kwon.getFullName())

// // let printTree = function (randomCount) {
// //   for (let i = 0; i < randomCount; i++) {
// //     let result = ""
// //     for (let j = randomCount - 1; j >= i - 1; j--) {
// //       result += ' '
// //     }
// //     for (let x = 0; x < i * 2 + 1; x++) {
// //       result += '*'
// //     }
// //     console.log(result)
// //   }
// // }
// // printTree(5)

// // console.log(Math.floor(Math.random()*100))

// // var randomnum = Math.floor(Math.random()*100)

// // for (let i = 2 ; i <= 100 ; i+= 4){
// //   console.log(i)
// //   i+= 3;
// //   if (i<= 100){
// // //     console.log(i);
// // //   }
// // // }

// // // console.log(2%2)

// // // var min = function (a,b){
// // //   if ( a <= b){
// // //     return a;
// // //   }else if( b <= a){
// // //     return b;
// // //   }
// // // }

// // // // function min(a,b){
// // // //   if (a <= b ? return a : )
// // // // }

// // // min(2,5)

// // const add = first => second => {return first + second}

// // function add(first) {
// //   return function (second) {
// //     return first+second;
// //   }
// // }
// // add(1);

// // let test =  (bool , func1, func2) =>{
// //   if (bool){
// //     return func1(trueFunc);
// //   }else{
// //     return func2(falseFunc);
// //   }∏
// // }
// // function trueFunc() {console.log(`true!`)}
// // function falseFunc() {console.log(`false!`)}

// // checkBoolean(true,falseFunc, trueFunc)

// // const printHello = ()=>{
// //   console.log('hello world')
// // }

// // const obj = {
// //   a: {
// //     b: {
// //       c: () => {
// //         console.log("Hello World");
// //       },
// //     },
// //   },
// // };

// // const phoneNum = (first) => (second) => (third) => {
// //   console.log("전화번호는 : " + first + "-" + second + "-" + third);
// // };

// // let firstPhone = phoneNum("010")
// // console.log(firstPhone(3300)(9850))

// const pipe = require("ramda").pipe;

// const add5 = (num) => num+5;
// const mul5 = (num) => num*5;

// const add5AndMul5 = (num) => mul5(add5(num));
// const testAdd5Mul5 = pipe(add5, mul5)
// console.log(add5AndMul5(5));
// console.log(testAdd5Mul5(5,5));


// const square = (num) => num*num;
// const add5andSquare1 = pipe(add5, square)
// const add5andSqaure = (num) => square(add5(num));

// console.log(add5andSqaure(5));
// console.log(add5andSquare1(5,5));

// const Maybe = val => ({
//   val,
//   // fmap(f) {
//   //     if (this.val === null) return Maybe(null);
//   //     return Maybe(f(this.val));
//   // }
// });

// // lets create some containers with our Maybe factory
// let user = Maybe("Slacker George McFly");
// let noUser = Maybe(null);

// console.log(user.val);    // "Slacker George McFly"
// console.log(noUser.val);  // null
  
// const g = JSON.parse
// const f = k => k.temp
// const fg = x => new Promise((resolve, reject) => resolve(x)).then(g).then(f)
// const log = x => console.log(x)

// fg(`{"temp" : 36.5}`).catch(_=> `JSON PARSE is not working`).then(log)

// const log = console.log
// const users = [{name: '영민'},{name: '민호'},{name: '동준'},{name : '승태'},{name : '세민'}]
// const getUserByName = (name) => users.find( u => u.name === name) || Promise.reject("객체에 없습니다.")

// const g = getUserByName
// const f = ({name})=> `${name}이가 있습니다.`
// const fg = x => new Promise((resolve,reject)=> resolve(x)).then(g).then(f)

// // fg("정민").catch(_ => _).then(log) // 객체에 없습니다.
// // fg("영민").catch(_ => _).then(log) // 영민이가 있습니다.

// const arr = [{
//   name : 'kim',
//   age : 10
// }, {
//   name : 'park',
//   age : 15
// }, {
//   name : 'lee',
//   age : 12
// }, {
//   name : 'choi',
//   age : 13
// }, {
//   name : 'jin',
//   age : 20
// },{
//   name : 'woo',
//   age : 30
// },
// ]

// a= String("hello world");
// console.log(a.includes('w'));
// console.log(a.includes('hello'));




// function findAge(name){
//   return (item)=>{
//     return item.name === name;
// }};

// console.log(arr.find(findAge('jin')).age)
// console.log(arr.find(findAge('woo')).age)

// const str = '0123'
// console.log(str.length)

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// function inBetween( a,b ){
//   return function (x){
//     return x >= a && x<= b;
//   }
// }

// function inArray(arr){
//   return function(x){
//     return arr.includes(x);
//   }
// }

// const btn=document.getElementById('yongseongBtn');

// let myInfo={
//    name:"yongseong",
//    show: function(){
//       console.log(this.name);
//       btn.addEventListener('click',(function(){
//          console.log(this);
//       }).bind(this));
//    }
// };

// myInfo.show();

// const c = "c";

// function outer() {
//   const a = "a";
//   const b = "b";

//   function inner() {
//     const a = "a2";
//     console.log(c);
//   }

//   return inner;
// }

// const closureFunction = outer();
// console.log(c)
// closureFunction();

// var a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     var a = 3;
//   }
//   inner();
//   console.log(a);
// }

// outer();
// console.log(a)

// let createDiv = document.createElement('div')
// document.body.appendChild(createDiv)

// function repeat(n,f){
//   for(var i = 0; i < n ; i++){
//     f(i);
//     console.log(typeof f)
//   }
// }
// var logAll = function (i){
//   console.log(i);
  
// }

// repeat(5, logAll);
// function foo() {
//   console.log('global foo');
// }

// function bar() {
//   function foo() {
//     console.log('local foo');
//   }
//   foo();
// }
// bar();
// console.log('----');
// console.log(foo());

// var x = 1;

// function testX() {
//   var x = 30;
//   return x
// }
// if ( true ) {
//   var x = 10;
// }
// for ( var x = 0; x <20; x++){}
// console.log(x);
// console.log(testX());

var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}

foo();
bar();
