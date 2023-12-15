let num1;
num1 = prompt("Enter first number");
num1 = Number(num1);

let operator;
operator = prompt("Enter operator");

let num2;
num2 = prompt("Enter second number");
num2 = Number(num2);

function operate(num1,operator,num2){
    switch(operator){
        case '+':
            console.log(add(num1,num2));
            break;
        case '-':
            console.log(subtract(num1,num2));
            break;
        case '*':
            console.log(multiply(num1,num2));
            break;
        case '/':
            console.log(divide(num1,num2));
            break;
    }
}

function add(number1,number2){
    return number1+number2;
}
function subtract(number1,number2){
    return number1-number2;
}
function multiply(number1,number2){
    return number1*number2;
}
function divide(number1,number2){
    if(number2 === 0){
        console.log("Divide by zero Error!");
        return;
    }
    return number1/number2;
}

operate(num1,operator,num2);