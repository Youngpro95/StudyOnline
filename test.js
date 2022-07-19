

for (let i = 0; i < 5; i++){
  var colorDiv = document.createElement('div');
  if(i%2){
    document.body.appendChild(colorDiv).style.backgroundColor="blue";
    
  } else{
    document.body.appendChild(colorDiv).style.backgroundColor="red";
    
  }
}

let createDiv = document.createElement('div')
document.body.appendChild(createDiv)
// document.getElementsByClassName('div').className = "div2"
createDiv.className = "div2"