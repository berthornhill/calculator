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
  return numTwo == 0 ? "Nice try ;D" : +numOne / +numTwo;
}

// "operate()" to take in 2 numbers and call the appropriate mathmatical operator function.

let numOne = "";
let numTwo = "";
let operator = "";

function operate(numOne, numTwo, operator) {
  return operator == "+"
    ? addition(numOne, numTwo)
    : operator == "⁻"
    ? subtraction(numOne, numTwo)
    : operator == "*"
    ? multiplication(numOne, numTwo)
    : operator == "/"
    ? division(numOne, numTwo)
    : "Opps! :(";
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
    if (btn.dataset.value == "negative") {
      posNegToggle();
    } else if (btn.dataset.value == ".") {
      decimalToggle(btn.dataset.value);
    } else if (hasNumberInput == true) {
      //skips,
      displayField.innerText = btn.dataset.value;
      hasNumberInput = false;
    } else {
      displayField.innerText += btn.dataset.value; // 1,
    }
  });
});

// When clicked, operator buttons should store previously input number string ("displayField.innerText")
// as a variable. If another operator button is used before executing function, the most recent operator
// clicked will be displayed.

operatorButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (operator == "") {
      numOne = displayField.innerText;
      operator = btn.dataset.value;
    } else {
      numTwo = displayField.innerText;
      equals();
      operator = btn.dataset.value;
    }
    hasNumberInput = true;
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
  operator = "";
  decimal = false;
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
  // if (numOne != "" || numTwo != "") {
  if (operator == "") {
    return;
  } else {
    numTwo = displayField.innerText;
    numOne = operate(numOne, numTwo, operator);
    displayField.innerText = numOne;
    numTwo = "";
    operator = "";
    quack();
  }
}
// toggle for positive and negative number input.
let negative = false;
function posNegToggle() {
  if (negative == false) {
    displayField.innerText = "-" + displayField.innerText;
    negative = true;
  } else {
    displayField.innerText = displayField.innerText.substring(1);
    negative = false;
  }
}

// toggles decimal to be placed once but not multiple times.
let decimal = false;
function decimalToggle(deci) {
  if (decimal == false) {
    displayField.innerText += deci;
    decimal = true;
  }
}

function quack() {
  const audio = document.querySelector("audio");
  audio.play();
}
