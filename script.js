// /*let num1, num2, operator, wait_on, valueToDisplay, gotN1, gotOp;
// function reset() {
//     displayValueToScreen("");
//     num1 = 0;
//     num2 = 0;
//     operator = "";
//     valueToDisplay = "";
//     wait_on = 3;
//     gotN1 = 1;
//     gotOp = 1;
//     // numOpNum = 3;
// }

// function displayValueToScreen(value) {
//     display.style.fontWeight = "bold";
//     if (value === "") {
//         display.textContent = "";
//         return;
//     }
//     display.textContent = value;
// }


// const display = document.querySelector(".display");


// reset();
// gotOp = 1;
// /*
// number
// operator
// number
// eval
// numOpNum
// */
// // numOpNum = 3;
// let inputArray = [];
// let outputArray = [];
// digits.addEventListener('click', (e) => {
//     if (e.target.id === 'equals') {
//         if (wait_on > 1) {
//             displayValueToScreen("Please enter number(operator)number!");
//             return;
//         }
//         displayValueToScreen("");
//         num2 = Number(valueToDisplay);
//         console.log("num2: " + num2);
//         inputArray.push(num2);
//         gotNum2();   // make wait_on = 0 and get the answer of the calculation
//     }
//     if (e.target.id === "cancel") {
//         reset();
//         return;
//     }
//     if (wait_on === 3 || wait_on === 2 || wait_on === 1) {
//         if (wait_on === 2 && gotOp === 1) {
//             gotOperator(); // make wait_on = 1
//             inputArray.push(operator);
//             --gotOp;
//             // num1 = Number(valueToDisplay);
//             // console.log("num1: "+num1);
//             valueToDisplay = "";
//         }
//         console.log("Inside digits.addEventListener");
//         valueToDisplay += e.target.id;
//         console.log("value to display: " + valueToDisplay);
//         // valueToDisplay = Number(valueToDisplay).toString(); // remove trailing zeroes
//         displayValueToScreen(valueToDisplay);
//         // num1 = Number(valueToDisplay);
//         // console.log("num1: "+num1);
//     }
// });
// gotN1 = 1;

// operations.addEventListener("click", (e) => {
//     if (wait_on === 3 && gotN1 === 1) {
//         console.log("Inside operations.addEventListener");
//         num1 = Number(valueToDisplay);
//         console.log("num1: " + num1);
//         gotNum1();  // make wait_on = 2
//         inputArray.push(num1);
//         --gotN1;
//     }
//     operator = e.target.id;
//     displayValueToScreen(operator);
// });

// function gotNum1() {
//     combinedExecution();
// }

// function gotNum2() {
//     combinedExecution();
// }

// function gotOperator() {
//     combinedExecution();

// }

// function combinedExecution() {
//     wait_on--;
//     if (wait_on === 0) {
//         console.log("Inside combinedExecution");
//         console.log("Before the call");
//         console.log("num1: " + num1);
//         console.log("num2: " + num2);
//         console.log("operator: " + operator);
//         let x = 0;
//         x = operate(num1, operator, num2);
//         outputArray.push(x);
//         inputArray = [];

//         if (x === -1) {
//             displayValueToScreen("Divide by zero Error!");
//             console.log("After the call");
//             console.log("num1: " + num1);
//             console.log("num2: " + num2);
//             console.log("operator: " + operator);
//             console.log("Answer: Divide by zero Error!");
//             return;
//         }

//         console.log("After the call");
//         console.log("num1: " + num1);
//         console.log("num2: " + num2);
//         console.log("operator: " + operator);
//         console.log("Answer: " + x);
//         displayValueToScreen(x);
//         num1 = x;
//     }
// }
// */

/*
12 + 7 - 5 * 3 = should yield 42
Your calculator should not evaluate more than a single pair of numbers at a time. 
Example: you press a number button (12), followed by an operator button (+), a second number button (7),
 and finally a second operator button (-). Your calculator should then do the following: first, evaluate 
 the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, 
 use that result (19) as the first number in your new calculation, along with the next operator (-).
*/
// function evaluateSinglePair(a,b,c){

// }
// let p = 0;
// let q = "";
// let r = 0;
// loop for first number -> num1
// loop for operator -> operator
// loop for second number -> num2
// evaluate single pair // call to evaluateSinglePair(a,b,c)
// result is num1
// store all keyPresses in array
// when first call to evaluateSinglePair(a,b,c) returns and updates num1,flush the array 
// of these first three items .
// search the array/program  for next num1 operator num2.
// until evaluateSinglePair(a,b,c) returns and flushes the input array and updates num1 keep storing 
// and displaying inputs to the screen.
// whatever is inputted display simultaneously  display it and when = is pressed run the above algorithm ,
// if same operator pressed >1 times, ignore those times, if other than that operator is pressed then change and update the display 
// and stored array. 

let arr = [];
//call it twice for  num1 and then for num 2
let m, abc;
const digits = document.querySelector(".digits");
// event listener for number
digits.addEventListener('click', (e) => {
    if ((e.target.id === "equals") || (e.target.id === "cancel")) {
        m = arr.length;
        if (arr[m - 1] === "equals") {
            return;
        }
        if (arr[m - 1] === "cancel") {
            return;
        }
        arr.push(String(e.target.id));
    }
    if ((e.target.id === "0") || (e.target.id === "1") || (e.target.id === "2")
        || (e.target.id === "3") || (e.target.id === "4")
        || (e.target.id === "5") || (e.target.id === "6") || (e.target.id === "7")
        || (e.target.id === "8") || (e.target.id === "9")
    ) {
        arr.push(String(e.target.id));
    }
});

const operations = document.querySelector(".operations");
let operatorString = "";
// event listener for operator
operations.addEventListener("click", (e) => {
    abc = Number(arr.length); // calculate length of array

    // to avoid adding the same operator to array 
    // if clicked multiple times by user
    let oldOperatorPresentInTheArray = arr[abc - 1];
    let newOperatorClicked = String(e.target.id);
    if (oldOperatorPresentInTheArray === newOperatorClicked) {
        return;
    }

    //change of operator
    if ((arr[abc - 1] === "+") || (arr[abc - 1] === "-") || (arr[abc - 1] === "*")
        || (arr[abc - 1] === "/")) {
        arr.pop();
        arr.push(String(e.target.id));
        return;
    }

    // first time operator pressed
    arr.push(String(e.target.id));
});

// jo bhi input hoga, display it and store it!
// console.log(arr);
//operate(num1, operator, num2)

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
function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            console.log(`num1: ${num1} + num2: ${num2} gives ${add(num1, num2)}`);
            return add(num1, num2);
        case '-':
            console.log(`num1: ${num1} + num2: ${num2} gives ${subtract(num1, num2)}`);
            return subtract(num1, num2);
        case '*':
            console.log(`num1: ${num1} * num2: ${num2} gives ${multiply(num1, num2)}`);
            return multiply(num1, num2);
        case '/':
            console.log(`num1: ${num1} / num2: ${num2} gives ${divide(num1, num2)}`);
            return divide(num1, num2);
    }
}

// Array manipulation begins
// Parse Array to obtain num1,num2
function isComma(val){
    if(val===","){
        return true;
    }else{
        return false;
    }
}
function parseArray(index, op) {
    console.log(`Entered parseArray()`);
    console.log(`Parameters passed to parseArray() ; index is ${index}, op is ${op}`);
    let obj = {
        number1,
        number2,
        operator,
    };
    let idx = index;
    // parse left side of operator for number1
    let slicedArray = [];
    slicedArray = arr.slice(0, idx);
    console.log(`slicedArray is ${slicedArray}`);

    let filteredArray = [];
    
    filteredArray = slicedArray.filter(isComma);
    console.log(`filteredArray is ${filteredArray}`);

    let stringFromArray = "";
    stringFromArray = filteredArray.toString();
    console.log(`stringFromArray is ${stringFromArray}`);
    let numberFromString = 0;
    numberFromString = Number(stringFromArray);
    console.log(`numberFromString is ${numberFromString}`);
    obj.number1 = numberFromString;
    console.log(`obj.number1 is ${obj.number1}`);


    obj.operator = String(op);
    console.log(`obj.operator is ${obj.operator}`);


    // parse right side of operator for number2
    let slicedArray2 = arr.slice(idx + 1, arr.indexOf("equals"));
    console.log(`slicedArray2 is ${slicedArray2}`);
    let filteredArray2 = slicedArray2.filter(i => i !== ",");
    console.log(`filteredArray2 is ${filteredArray2}`);
    let stringFromArray2 = filteredArray2.toString();
    console.log(`stringFromArray2 is ${stringFromArray2}`);
    let numberFromString2 = Number(stringFromArray2);
    console.log(`numberFromString2 is ${numberFromString2}`);
    obj.number2 = numberFromString2;
    console.log(`obj.number2 is ${obj.number2}`);
    
    
    console.log(`Will leave parseArray() after this log`);
    return obj;
}
let number1, number2, operator, ans;
function emptyArray(){
    console.log(`Inside emptyArray() , before emptying array: ${arr}`);
    arr = [];
    console.log(`Inside emptyArray() , after emptying array: ${arr}`);
}
function calculate() {
    console.log(`Entered calculate()`);
    if (arr.includes("equals")) {
        console.log(`Entered if() block inside calculate()`);
        let idxPlus = arr.indexOf("+");
        let idxMinus = arr.indexOf("-");
        let idxMultiply = arr.indexOf("*");
        let idxDivide = arr.indexOf("/");
        if (idxPlus > 0) {
            let obP = parseArray(idxPlus,"+");
            ans = operate(obP.number1, obP.operator, obP.number2);
            console.log(`Value of ans: ${ans}`);
            emptyArray();
        }
        if (idxMinus > 0) {
            let obM = parseArray(idxMinus,"-");
            ans = operate(obM.number1, obM.operator, obM.number2);
            console.log(`Value of ans: ${ans}`);
            emptyArray();
        }
        if (idxMultiply > 0) {
            let obMul = parseArray(idxMultiply,"*");
            ans = operate(obMul.number1, obMul.operator, obMul.number2);
            console.log(`Value of ans: ${ans}`);
            emptyArray();
        }
        if (idxDivide > 0) {
            let obDiv = parseArray(idxDivide,"/");
            ans = operate(obDiv.number1, obDiv.operator, obDiv.number2);
            console.log(`Value of ans: ${ans}`);
            emptyArray();
        }
    }
    console.log(`Will leave calculate() after this log!`);
}

