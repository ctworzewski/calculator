const display = document.querySelector(".display");
const input = document.querySelector(".button");

console.log(input);

input.addEventListener("click", function() {
  display.textContent = input.value;
  console.log("teścik");
});
