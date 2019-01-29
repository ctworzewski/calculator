const screenRef = document.querySelector(".screen");
const numberRef = document.querySelectorAll(".number");
const operatorRef = document.querySelectorAll(".operator");
const clearRef = document.querySelector(".clear");

numberRef.forEach(function(number) {
  number.addEventListener("click", function() {
    let temp = number.value;
    // console.log(parseInt(temp, 10));
    temp = screenRef.textContent + number.value;
    screenRef.textContent = temp;
  });
});

/* function isEqualsOpeator(operator) {
  return operator === "=";
} */

const ENDING_WITH_DIGIT = /\d$/;

operatorRef.forEach(function(operatorButton) {
  operatorButton.addEventListener("click", function() {
    // if (isEqualsOpeator(operatorButton.value)) {
    if (operatorButton.value === "=") {
      // jeśli przyciskie '=' jest === '='
      screenRef.textContent = eval(screenRef.textContent); // to zwróc na wyświetlacz, zaktualizowaną wartość textContent
      return; // jeśli warunek jest prawdziwy to przerwij cały program
    }

    // warunek nie wykona się jeśli warunek wyżej jest true
    if (ENDING_WITH_DIGIT.test(screenRef.textContent)) {
      screenRef.textContent += operatorButton.value;
    }
  });
});

clearRef.addEventListener("click", function() {
  screenRef.innerHTML = "";
});
