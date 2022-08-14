// for (let i = 0; i < 5; i++){
//   var colorDiv = document.createElement('div');
//   if(i%2){
//     document.body.appendChild(colorDiv).style.backgroundColor="blue";

//   } else{
//     document.body.appendChild(colorDiv).style.backgroundColor="red";

//   }
// }

// let createDiv = document.createElement('div')
// document.body.appendChild(createDiv)
// // document.getElementsByClassName('div').className = "div2"
// createDiv.className = "div2"
// const numBtn = document.querySelector('.inNum');
// const addBtn = document.querySelector('#button')
// const numBtnValue = numBtn.value

// numBtn.addEventListener('change' , function(e){
//   console.log('change : ' ,  e.target.value)
// })
// // numBtn.addEventListener('keydown' , function(e){
// //   console.log('change : ' ,  e.target.value)
// // })
// // numBtn.addEventListener('keyup' , function(e){
// //   console.log('change : ' ,  e.target.value)
// // })
// // numBtn.addEventListener('keypress' , function(e){
// //   console.log('change : ' ,  e.target.value)
// // })

// addBtn.addEventListener('click', function(){
//   console.log(numBtnValue)
// })
// const addBtn = document.querySelector('button')

// function addNum(){
// const firstNum = document.getElementsByClassName('first').value;
// console.log(firstNum);

// const secondNum = document.getElementsByClassName("second").value;
// var result = parseInt(firstNum)+parseInt(secondNum)
// document.getElementsByClassName("addResult").value = result;
// }
// addBtn.addEventListener("click", addNum())

// const person = {
//   name : 'Lee'
// }
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// const person = {
//   firstName: "Ungmo",
//   lastName: "Lee",

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     return ([this.firstName, this.lastName] = name.split(" "));
//   },
// };

// // console.log(person.firstName + ' ' + person.lastName);
// person.fullName = `Heegun Lee`;
// // console.log(person);
// // console.log(person.fullName);

// let descriptor = Object.getOwnPropertyDescriptor(person, 'fristName');
// console.log(descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);

// // Object.defineProperty(person, "fullName", {
// //   set(name) {
// //     [this.firstName, this.lastName] = name.split(" ");
// //   },
// //   enumerable: true,
// // });
// // console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

// const a = 7(function () {
//     console.log(a * 2)
// })()

// let test = 1;
// {
//   console.log(test);
//   let test = 2;
// }

// var funcs = [];
// for(let i = 0; i<3 ; i++){
//   funcs.push(function() { console.log(i);})
// }
// for ( var j = 0; j < 3; j++){
//   console.dir(funcs[j]);
//   funcs[j]();
// }
// console.log(funcs)

// var funcs = [];
// for(var i = 0; i<3 ; i++){
//     funcs.push(function () { console.log(i);})
// }
// for ( var j = 0; j < 3; j++){
//   funcs[j]();
// }
// console.log(funcs)
// 1. 아래의 콘솔 결과와 이유
// console.log(showVarText);
// var showVarText;

// console.log(showLetText);
// let showLetText;
// console.log(showLetText);
// 2 . showLetText 가 undefined로 나오는 이유는?
// var x = 'global';
// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }
// foo();
// console.log(x);

//   const obj = { a: 'default' };
// Object.seal(obj);
// obj.b = 'add';
// console.log(obj); // 1.
// obj.a = 'seal';
// console.log(obj); // 2.
// delete obj.a;
// console.log(obj);  // 3.
// Object.freeze(obj);
// obj.b = 'add';
// console.log(obj); // 4.
// obj.a = 'freeze';
// console.log(obj); // 5.
// delete obj.a;
// console.log(obj); // 6.
// /* change */
// Object.seal(obj);
// obj.a = 'change seal';
// console.log(obj);  // 7.

// function foo(){
//   x = 10;
// }
// foo();
// console.log(x); // 변수선언이 없었음에도 불구하고 왜 실행될까요? JS엔진은 암묵적으로 전역 객체에 x 프로퍼티를 생성하므로 전역 변수처럼 사용할 수 있다.
// 이러한 현상을 암묵적  전역이라고 합니다.
// 다만 개발의도와 다르게 오류가 생길 수 있기에 var, let, const 키워드를 사용해야 합니다.

// var test = 1;
// console.log(window.test) //1
// let test2 = 2
// console.log(window.test2); // ?

// const me = {
//   sayHi(){
//     return "안녕하세요. 저는 [       ]이고, MBTI는 [        ]입니다.";
//   }
// };
// new me();
// console.log(me.sayHi());

// const me = new Object();
// me.name = "영민";
// me.mbti = "ISTJ";
// me.sayHi = function() {
// return `안녕하세요 저는 ${this.name}이고 MBTI는 ${this.mbti}입니다.`
// }

// function test(){
//   if(!(this instanceof test)){
//     return new test();
//   }
//   this.name = "영민";
//   this.mbti = "ISTJ";
//   this.sayHi = function() {
//     return `안녕하세요 저는 ${this.name}이고 MBTI는 ${this.mbti}입니다.`
//   }
// }

// const test55 = test();
// console.log(test55.sayHi());

// function Person(name, mbti) {
// 	this.name = name;
// 	this.mbti = mbti;
//   this.getHi = function () {
//     return "안녕하세요 저는" + this.name + "이고, MBTI는" + this.mbti + "입니다."
//   }
// }
// const hayoungpark = Person('hayoung', 'enter');
// console.log(hayoungpark());

// function func1(a){}
// var func2 = function(a, b){};
// var funcfunc = function func3(a, b, c){};
// console.log(function(){}.name);
// console.log(func1.name);
// console.log(func2.name);
// console.log(funcfunc.name);

// const Person = name => {
// 	this.name = name;
// };
// console.log(Person.prototype);

// var a = 10;
// const obj = {
//   a: 1,
//   x(){
//     var a = 2;
//     console.log(a);
//     return this.z(this.a);
//   },
//   y: function(){
//     console.log(this.a);
//   },
//   z: function(a){
//     console.log(a);
//     console.log(this.a);
//   }
// }
// obj.x();
// const foo = obj.y;
// foo();

// const x = 1;
// function foo() {
//   const x = 10;
//   bar()
// }
// function bar(){
//   console.log(x);
// }

// foo();
// bar();

// const increase = (function () {
//   let num =0;
//   return function () {
//     return ++num;
//   }
// }());
// console.log(increase());
// console.log(increase());
// console.log(increase());

// function makeCounter(aux){
//   let counter = 0;

//   return function (aux){
//     counter = aux(counter);
//     return counter;
//   }
// }

// function increase(n){
//   return ++n;
// }
// function decrease(n){
//   return --n;
// }

// function counter() {
//   let count = 0;
//   return{
//   up(){
//     this.count++;
//     console.log(this.count);
//   },
// };
// }

// const exam = (func) => (x) => (y) => test(x, y);

// const myTest = exam(sum);
// const plusFive = myTest(5)
// plusFive(5)

// function factory_movie(title){
//   return {
//       get_title : function (){
//           return title;
//       },
//       set_title : function(_title){
//           title = _title
//       }
//   }
// }

// // ** 클로저 반환 값을 할당
// roundup = factory_movie('범죄도시2');
// topGun = factory_movie('TopGun');

// console.log(roundup.get_title()); // 
// console.log(topGun.get_title()); // topGun

// // ** 반환 객체의 메서드를 통한 내부 변수 변경
// roundup.set_title('트랜스포머');

// console.log(roundup.get_title()); // 공각기동대
// console.log(topGun.get_title()); // topGun

// // ** roundup 변수에는 클로저를 메서드로 가지는 객체가 담김
// console.log(roundup);
// // {get_title: ƒ, set_title: ƒ}

// const increaser = makeCounter(increase);
// console.log(increaser());

// const counter = (function(){
//   let counter = 0;

//   return function (aux){
//     counter = aux(counter);
//     return counter;
//   }
// }());

// function increase(n){
//   return ++n;
// }
// function decrease(n){
//   return --n;
// }

// console.log(counter(increase));
// console.log(counter(decrease))

// var funcs = [];
//   for ( let i = 0 ; i < 3 ; i++){
//     funcs[i] = function(){return i;}
//   }
//   for( let j = 0; j< funcs.length; j++){
//     console.log(funcs[j]());
//   }


// const counter = {
//   num : 1,
//   increase : () => ++this.num
// }

// console.log(counter.increase());


// let test = {
//   0 : "Test",
//   1 : "World",
//   length : 2
// }
// // for (let item of test){}

// let arr = Array.from(test)
// console.log(arr.pop());

// 문제1 웃는 이모지만 나오게 해주세요 여러가지 방법이 있습니다~
let str ='ሽ문제😄';

const [,,,item] = str;
console.log(item);
// let cnt = 0
// for(let x of str){
//   cnt++
//   if(cnt === 4) console.log(x)
// }

let sol = Array.from(str);
console.log(sol[3]);

let sol2 = [];
for( let item of str){
  sol2.push(item)
}
console.log(sol2[3]);



// const whiteWater = {
//   name: '흰색물',
//   attribute: '물',
//   color: '흰색'
// };

// const { color, ...water } = whiteWater;
// console.log(color);
// console.log(water);

// const { attribute, ...pureName } = water;
// console.log(attribute);
// console.log(pureName);

// const obj = {
//   [Symbol("a")]:"a"
// }
// console.log(obj[Symbol("a")])
// console.log(Symbol.for(obj[Symbol("a")]));

// const s1 = Symbol.for(obj)
// Symbol.keyFor(s1)

// function sumAll(...item) {
//   return item.reduce((acc,current)=>acc+current,0)
// }
// console.log( sumAll(1) ); // 1
// console.log( sumAll(1, 2) ); // 3
// console.log( sumAll(1, 2, 3) ); // 6

// let arr1 = [3, 5, 1];
// let arr2 = [8, 9, 15];
// let merged = '0,'+[...arr1]+',2,'+[...arr2]
// console.log(merged);
// 0,3,5,1,2,8,9,15

const user = {
  name: 'Ssong',
  address: {
      city: {
          section : 'gangnam'
      }
  }
};
// 코드 작성
const  {address : {city : {section}}} = user
console.log(section);
