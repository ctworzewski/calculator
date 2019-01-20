const screenRef = document.querySelector(".screen");
const numberRef = document.querySelectorAll(".number");
const operatorRef = document.querySelectorAll(".operator");
const clearRef = document.querySelectorAll(".clear");

// screenRef.textContent = "dd";

const num = numberRef.forEach(function(number) {
  number.addEventListener("click", function() {
    // parseInt((screenRef.textContent = number.value));
    screenRef.textContent = number.value;
    console.log(typeof num);
  });
});

const oper = operatorRef.forEach(function(operator) {
  operator.addEventListener("click", function() {
    screenRef.textContent = operator.value;
    // console.log(typeof operator);
  });
});
console.log(oper);

function add() {}
function sub() {}
function multi() {}
function div() {}

clearRef.addEventListener("click", function() {
  screenRef.value = "";
});
