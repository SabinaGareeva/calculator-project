import { sum, substraction, multiply, divide } from "./calculator";
let output2 = document.querySelector("#output2");
let firstNumber = 0;
let operation = null;
let resetAfterOperation = false;

document.querySelectorAll("#number").forEach(
  (button) =>{button.addEventListener("click",
  (event) => {
    let value = event.curentTarget.textContent;
    if (resetAfterOperation) {
      output2.value = value;
      resetAfterOperation;
    } else {
      output2.value += value;}
    })
  }
);
document.querySelectorAll("#operation").forEach((button)=>{button.addEventListener("click",(event) => {
    firstNumber=Number.parseInt(output2.value,10);
    operation=event.curentTarget.dataset.action;
    resetAfterOperation = true;})
});
