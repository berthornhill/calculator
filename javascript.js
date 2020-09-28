// CALCULATOR PROJECT //

//FUNCTIONS FOR MATHMATICAL OPERATORS :: "+" "-" "/" "*"

// Addition
function addition(numOne, numTwo) {
  return +numOne + +numTwo;
}

// Subtraction
function subtraction(numOne, numTwo) {
  return +numOne - +numTwo;
}

// Multiplication
function multiplication(numOne, numTwo) {
  return +numOne * +numTwo;
}

// Division
function division(numOne, numTwo) {
  return +numOne / +numTwo;
}

// "operate()" to take in 2 numbers and call the appropriate mathmatical operator function.

let numOne = "";
let numTwo = "";
let operator = "";

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

// Listener for button press and displaying of number input.
// if displaying operator, stores operator in variable.
//-- sets variable hasNumberInput. this variable will be switched between true/flase for storing operator variables and clearing display without clearing required variables.
let hasNumberInput = false;

numbersButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (hasNumberInput == true) {
      displayField.innerText = btn.dataset.value;
      hasNumberInput = false;
    } else {
      displayField.innerText += btn.dataset.value;
    }
  });
});

// When clicked, operator buttons should store previously input number string ("displayField.innerText")
// as a variable. If another operator button is used before executing function, the most recent operator
// clicked will be displayed.

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (numOne == "") {
      numOne = displayField.innerText; // 1
      displayField.innerText = btn.dataset.value; // +
      operator = btn.dataset.value;
    } else if (numTwo == "") {
      numTwo = displayField.innerText;
      displayField.innerText = btn.dataset.value;
      operator = btn.dataset.value;
    } else {
      numTwo = displayField.innerText;
      displayField.innerText = btn.dataset.value;
      operator = btn.dataset.value;
      // numOne = operate(numOne, numTwo, operator);
      equals();
    }
    hasNumberInput = true; // true
  });
});

executableButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.dataset.value == "CLEAR") {
      clearButton();
    } else if (btn.dataset.value == "BACKSPACE") {
      backspace();
    } else {
      numTwo = displayField.innerText;
      equals();
      hasNumberInput = true;
    }
  });
});

// "CLEAR" button function. Resets "displayField.innerText" to empty str.
function clearButton() {
  displayField.innerText = "";
  numOne = "";
  numTwo = "";
}

// "BACKSPACE" button function. Removes last num/char in "displayField.innerText"
function backspace() {
  displayField.innerText = displayField.innerText.substring(
    0,
    displayField.innerText.length - 1
  );
}

// EQUALS/EXECUTE button function

function equals() {
  if (numOne != "" || numTwo != "") {
    numTwo = displayField.innerText;
    numOne = operate(numOne, numTwo, operator);
    displayField.innerText = numOne;
    numTwo = "";
  }
}

// Button Objects Key/Values
// const buttonPress = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   0: 0,
//   "+": "+",
//   "-": "-",
//   "*": "*",
//   "/": "/",
// };
