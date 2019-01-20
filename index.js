const screenRef = document.querySelector(".screen");
const numberRef = document.querySelectorAll(".number");

// screenRef.textContent = "dd";

const num = numberRef.forEach(function(number) {
  number.addEventListener("click", function() {
    screenRef.textContent = number.value;
  });
});
