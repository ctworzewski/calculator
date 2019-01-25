const screenRef = document.querySelector(".screen");
const numberRef = document.querySelectorAll(".number");
const operatorRef = document.querySelectorAll(".operator");
const clearRef = document.querySelector(".clear");

// screenRef.textContent = "dd";

const num = numberRef.forEach(function(number) {
  number.addEventListener("click", function() {
    // parseInt(number.value);
    // parseInt((screenRef.textContent = number.value));
    // screenRef.textContent = number.value;
    // console.log(number.value);

    let temp = number.value;

    // console.log(temp);
    temp = screenRef.textContent + number.value;
    // screenRef.textContent = temp + number.value;
    screenRef.textContent = temp;
    parseInt(temp, 10);
    // console.log(temp);
    console.log(typeof screenRef.value);
    console.log(typeof number.value);
    console.log(typeof temp);
    // temp.textContent += number.value;
    // console.log('to: ', temp.textContent += number)
  });
});

const oper = operatorRef.forEach(function(operator) {
  operator.addEventListener("click", function() {
    let temp = operator.value;
    temp = screenRef.textContent + operator.value;
    // screenRef.textContent = operator.value;
    screenRef.textContent = temp;
    // console.log(typeof operator);
  });
});
console.log(oper);

function add() {}
function sub() {}
function multi() {}
function div() {}

const clear = clearRef.addEventListener("click", function() {
  screenRef.value = "";
});
