

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
const addBtn = document.querySelector('button')

function addNum(){
const firstNum = document.getElementsByClassName('first').value;
console.log(firstNum);

const secondNum = document.getElementsByClassName("second").value;
var result = parseInt(firstNum)+parseInt(secondNum)
document.getElementsByClassName("addResult").value = result;
}
addBtn.addEventListener("click", addNum())