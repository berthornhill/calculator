// CALCULATOR PROJECT //

//FUNCTIONS FOR MATHMATICAL OPERATORS :: "+" "-" "/" "*"

// Addition
function addition(numOne, numTwo) {
  return numOne + numTwo;
}

// Subtraction
function subtraction(numOne, numTwo) {
  return numOne - numTwo;
}

// Multiplication
function multiplication(numOne, numTwo) {
  return numOne * numTwo;
}

// Division
function division(numOne, numTwo) {
  return numOne / numTwo;
}

// "operate()" to take in 2 numbers and call the appropriate mathmatical operator function.

function operate(numOne, numTwo, operator) {
  return operator == "+"
    ? addition(numOne, numTwo)
    : operator == "-"
    ? subtraction(numOne, numTwo)
    : operator == "*"
    ? multiplication(numOne, numTwo)
    : operator == "/"
    ? division(numOne, numTwo)
    : "Opps! Something went wrong.";
}

// Access to DOM Elements
const display = document.querySelector(".calc-display");
const displayField = document.querySelector(".calc-inner-display");
const numbers = document.querySelector(".calc-numbers");
const operators = document.querySelector(".calc-operators");
const executables = document.querySelector(".calc-executables");

const numbersButtons = numbers.querySelectorAll("button");
const operatorButtons = operators.querySelectorAll("button");
const executableButtons = executables.querySelectorAll("button");

displayField.innerText = "";

// Listener for button press
numbersButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayField.innerText += btn.dataset.value;
  });
});

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayField.innerText += btn.dataset.value;
  });
});

executableButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    displayField.innerText += "We have to see the Great Deku";
  });
});

// Display for button press.

// Button Objects Key/Values

const buttonPress = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  0: 0,
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
};
