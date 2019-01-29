const screenRef = document.querySelector(".screen");
const numberRef = document.querySelectorAll(".number");
const operatorRef = document.querySelectorAll(".operator");
const clearRef = document.querySelector(".clear");

const num = numberRef.forEach(function(number) {
  number.addEventListener("click", function() {
    let temp = number.value;
    temp = screenRef.textContent + number.value;
    screenRef.textContent = temp;
    parseInt(temp, 10);
  });
});

const oper = operatorRef.forEach(function(operator) {
  operator.addEventListener("click", function() {
    if (operatorRef === isNaN) {
      console.log("podaj liczbę");
    } else {
      console.log("klik podczas wcisnięcia operatora");
      let temp = operator.value;
      temp = screenRef.textContent + operator.value;
      screenRef.textContent = temp;
    }
    // screenRef.textContent = temp;
  });
});

/* function add() {}
function sub() {}
function multi() {}
function div() {} */

const clear = clearRef.addEventListener("click", function() {
  screenRef.innerHTML = "";
});
