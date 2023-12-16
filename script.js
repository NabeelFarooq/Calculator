let num1,num2,operator,wait_on,valueToDisplay,gotN1,gotOp;
function reset() {
    displayValueToScreen("");
    num1 = 0;
    num2 = 0;
    operator = "";
    valueToDisplay = "";
    wait_on = 3;
    gotN1 = 1;
    gotOp = 1;
}
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        console.log("Divide by zero Error!");
        return -1;
    }
    return number1 / number2;
}
function displayValueToScreen(value) {
    display.style.fontWeight = "bold";
    if (value === "") {
        display.textContent = "";
        return;
    }
    display.textContent = value;
}

const digits = document.querySelector(".digits");
const display = document.querySelector(".display");
const operations = document.querySelector(".operations");

reset();
gotOp = 1;
digits.addEventListener('click', (e) => {
    if (e.target.id === 'equals') {
        displayValueToScreen("");
        num2 = Number(valueToDisplay);
        console.log("num2: "+num2);
        gotNum2();   // make wait_on = 0
    }
    if (e.target.id === "cancel") {
        reset();
        return;
    }
    if (wait_on === 3 || wait_on === 2 || wait_on === 1) {
        if (wait_on === 2 && gotOp === 1) {
            gotOperator(); // make wait_on = 1
            --gotOp;
            // num1 = Number(valueToDisplay);
            // console.log("num1: "+num1);
            valueToDisplay = "";
        }
        console.log("Inside digits.addEventListener");
        valueToDisplay += e.target.id;
        console.log("value to display: "+valueToDisplay);
        // valueToDisplay = Number(valueToDisplay).toString(); // remove trailing zeroes
        displayValueToScreen(valueToDisplay);
        // num1 = Number(valueToDisplay);
        // console.log("num1: "+num1);
    }
});
gotN1 = 1;
operations.addEventListener("click", (e) => {
    if(wait_on === 3 && gotN1 === 1){
        console.log("Inside operations.addEventListener");
        num1 = Number(valueToDisplay);
        console.log("num1: "+num1);
        gotNum1();  // make wait_on = 2
        --gotN1;
    }
    operator = e.target.id;
    displayValueToScreen(operator);
});

function gotNum1() {
    combinedExecution();
}

function gotNum2() {
    combinedExecution();
}

function gotOperator() {
    combinedExecution();

}

function combinedExecution() {
    wait_on--;
    if (wait_on === 0) {
        console.log("Inside combinedExecution");
        console.log("Before the call");
        console.log("num1: "+num1);
        console.log("num2: "+num2);
        console.log("operator: "+operator);
        let x = 0;
        x = operate(num1, operator, num2);
        if(x===-1){
            displayValueToScreen("Divide by zero Error!");
            console.log("After the call");
            console.log("num1: "+num1);
            console.log("num2: "+num2);
            console.log("operator: "+operator);
            console.log("Answer: Divide by zero Error!");
            return;
        }
        
        console.log("After the call");
        console.log("num1: "+num1);
        console.log("num2: "+num2);
        console.log("operator: "+operator);
        console.log("Answer: "+x);
        displayValueToScreen(x);
    }
}