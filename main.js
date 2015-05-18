(function(){
  "use strict";

})();

var calculation = 0;
var displayCalculation = '0';
var $display = document.querySelector('.display');

//function for number press
function numberPress(event){
  var number=Number(event.target.textContent);
  alert(numberPressed);
}

[].forEach.call(document.querySelectorAll('.keypad-button.number'), function(el){
  el.addEventListener('click', numberPress);
},false);
