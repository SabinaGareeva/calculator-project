// import { sum, substraction, multiply, divide } from "/.calculator.js";
let output1 = document.querySelector("#output");
let output2 = document.querySelector("#output2");
let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;
// числа появляются в output1
document.querySelectorAll("#number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.currentTarget.textContent;
    if (resetAfterOperation) {
      output1.value = value;
      resetAfterOperation = false;
    } else {
      output1.value += value;
    }
  });
});
document.querySelectorAll("#operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    if(firstNumber===0){firstNumber = Number.parseInt(output1.value, 10);
      operation = event.currentTarget.dataset.action;
      if(operation==='sum'){output1.value+='+'}
      if(operation==='substraction'){output1.value+='-'}
      if(operation==='multiply'){output1.value+='*'}
      if(operation==='divide'){output1.value+='/'}
      // output1.value+=`${if(operation=='sum'){return '+'}}`
       resetAfterOperation = false;}
    
    
  });
});
const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  if (!operation || firstNumber===0) {
    return;
  }
  resetAfterOperation = false;
const delimiter=output1.value.match(/[+\-*/]/)[0]; 
console.log(delimiter)
  const parts=output1.value.split(delimiter);
  let secondNumber = Number.parseInt(parts[1], 10);
  // output1.value+=`${operation}`
  function sum(a, b) {
    return a + b;
  }
  function substraction(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }

  if (operation === "sum") {
    output2.value = sum(firstNumber, secondNumber);
  } else if (operation === "substraction") {
    output2.value = substraction(firstNumber, secondNumber);
  } else if (operation === "multiply") {
    output2.value = multiply(firstNumber, secondNumber);
  } else if (operation === "divide") {
    const divideResult = divide(firstNumber, secondNumber);
    if (Number.isFinite(divideResult)) {
      output2.value = divideResult;
    } else {
      alert("Number is Infinity");
      output2.value = "";
    }
    output2.value = divide(firstNumber, secondNumber);
  }
  operation = null;
});
