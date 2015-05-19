
(function(){
  "use strict";



var calculation = 0;
var displayCalculation = '0';
var $display = document.querySelector('.display');
var pendingOperation;
var buttonPressedLast;
var input;

// function for number press
function numberPress(event){
  var number=Number(event.target.textContent);
  $display.textContent = number;
  var input=number;
  console.log(input);
}


//switch statement for operators
function operatorPress(event){
  var operator=event.target.textContent;

    switch (operator) {
      case "+":
        calculation += input;
        break;
      case "-":
        calculation -= input;
        break;
      case "*":
        calculation *= input;
        break;
      case "/":
        calculation /= input;
        break;
      }
      console.log("operator clicked is"+ operator);
}


function equalsPressed(event){
  var button= event.target.textContent;
  var text=button.textContent;
  $display.textContent = calculation;
  console.log("calc is" + calculation);
}

[].forEach.call(document.querySelectorAll('.number'), function(element){
  element.addEventListener('click', numberPress);
},false);

[].forEach.call(document.querySelectorAll('.operator'), function(element){
  element.addEventListener('click', operatorPress);
},false);

document.querySelector('.equals').addEventListener('click', equalsPressed)


})();
