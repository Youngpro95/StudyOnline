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