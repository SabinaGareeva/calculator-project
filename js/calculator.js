// import { sum, substraction, multiply, divide } from "/.calculator.js";
const output1 = document.querySelector("#output");
const output2 = document.querySelector("#output2");
const negative = document.querySelector("#negative");
const percent = document.querySelector("#percent");
const decimal = document.querySelector("#decimal");
const completeClean = document.querySelector("#complete-clean");
const cleanLast = document.querySelector("#clean-last-character");
let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;
let lastResult = 0; // Добавляем переменную для отслеживания последнего результата
output2.value = firstNumber;

// числа появляются в output2
document.querySelectorAll("#number").forEach((button) => {
  button.addEventListener("click", (event) => {
    let value = event.currentTarget.textContent;
    if (output2.value === "0") {
      output2.value = value;
      resetAfterOperation = false;
    } else {
      output2.value += value;
    }
  });
});

document.querySelectorAll("#operation").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (firstNumber === 0) {
      firstNumber = Number.parseFloat(output2.value, 10);
      operation = event.currentTarget.dataset.action;
      const operatorMap = {
        sum: "+",
        substraction: "-",
        multiply: "*",
        divide: "/",
      };
      output2.value += operatorMap[operation]; // Добавляем символ операции в строку
      resetAfterOperation = false;
    } else {
      // output1.value = ""; // Очищаем output1 перед следующей операцией
      // firstNumber = lastResult;
      // Сбрасываем первое число к lastResult
      operation = event.currentTarget.dataset.action;
      const operatorMap = {
        sum: "+",
        substraction: "-",
        multiply: "*",
        divide: "/",
      };
      output2.value += operatorMap[operation]; // Добавляем символ операции в строку
      resetAfterOperation = false;
    }
  });
});
// Кнопка для добавления отрицательных чисел
negative.addEventListener("click", () => {
  if (!isNaN(output2.value)) {
    output2.value = output2.value * -1;
  } else {
    alert("Недопустимое значение, в строке содержатся знаки!");
    output2.value = "0";
  }
});
// Кнопка для процентов
percent.addEventListener("click", () => {
  const pers = Number.parseFloat(output2.value) / 100;
  output2.value = pers;
});
// Кнопка точка для ввода дробных значений
decimal.addEventListener("click", () => {
  const regex = /^-?\d*\.?\d*$/; // Регулярное выражение для проверки числа с точкой
  if (regex.test(output2.value)) {
    let curReadOut = output2.value;
    if (curReadOut[curReadOut.length - 1] !== ".") {
      curReadOut += ".";
      output2.value = curReadOut;
    } else {
      alert("Точка уже присутствует в числе.");
    }
  } else {
    alert("В вводе должно быть только целое число");
  }
}); //доработать
// Полная очистка
completeClean.addEventListener("click", () => {
  output2.value = "0";
  output1.value = "";
});
// Очистка последнего значения в output2
cleanLast.addEventListener("click", () => {
  let cleanLast = output2.value.slice(0, -1);
   output2.value = cleanLast;
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
  const expression = output2.value;

  const parts = expression.split(/[+\-*/]/);
  const operators = expression.split(/[\d.]+/).filter(Boolean);
  let result = Number(parts[0]);
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = Number(parts[i + 1]);
    switch (operator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        if (number === 0) {
          alert("Divizion by zero is not allowed.");
          output2.value = "0";
          output1.value = "";
          return;
        }
        result /= number;
        break;
    }
  }
  output1.value = expression;
  // lastResult=result;
  output2.value = result;
});

