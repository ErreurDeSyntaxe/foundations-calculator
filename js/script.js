let firstTerm = "";
let secondTerm = "";
let operator = "";

function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    if (num2 == 0)
        return "IDK";
    else
        return +((num1 / num2).toFixed(6));
}

function operate(num1, operator, num2) {
    let result = 0;
    switch (operator) {
        case "+":
            result =  add(num1, num2);
            break;
        case "-":
            result =  subtract(num1, num2);
            break;
        case "*":
            result =  multiply(num1, num2);
            break;
        case "/":
            result =  divide(num1, num2);
            break;
        default:
            result = "error??";
            break;
    }
    // rounds the result to 7 decimals IF there was no divide by zero
    if (typeof result == "number")
        result = Math.floor(result * 10000000) / 10000000;
    return result;
}

function turnOffDecimal() {
    let decimalPoint = document.querySelector(".decimalPoint");
    decimalPoint.disabled = true;
}

function turnOnDecimal() {
    let decimalPoint = document.querySelector(".decimalPoint");
    decimalPoint.disabled = false;
}

function clearAll() {
    updateDisplay("clearAll");
    turnOnDecimal();
}

function updateDisplay(string) {
    let display = document.querySelector(".display");

    switch (string) {
        case "clearAll":
            firstTerm = "";
            secondTerm = "";
            operator = "";
            display.textContent = "0";
            turnOnDecimal();
            break;
        case "negative":
            display.textContent = display.textContent * -1;
            break;
        case "percent":
            display.textContent = ((display.textContent) / 100).toFixed(6);
            display.textContent = +display.textContent;
            break;
        case ".":
            if (display.textContent == "+" ||
                display.textContent == "-" ||
                display.textContent == "*" ||
                display.textContent == "/") {
                    display.textContent = "0.";
                    turnOffDecimal();
            }
            if (display.textContent.indexOf(".") == -1) {
                display.textContent += string;
                turnOffDecimal();
            }
            break;
        case "+":
        case "*":
        case "/":
        case "-":
            if (operator != "") {
                secondTerm = display.textContent;
                firstTerm = operate(+firstTerm, operator, +secondTerm);
                secondTerm = "";
                operator = string;
                display.textContent = string;
                turnOnDecimal();
                break;
            }
            firstTerm = display.textContent;
            display.textContent = string;
            operator = string;
            break;
        case "=":
            if (display.textContent == "+" ||
                display.textContent == "-" ||
                display.textContent == "*" ||
                display.textContent == "/") break;
            else if (operator == "") break;
            else {
                secondTerm = display.textContent;
                display.textContent = operate(+firstTerm, operator, +secondTerm);
                secondTerm = "";
                operator = "";
                firstTerm = display.textContent;
                turnOnDecimal();
                break;
            }
        default:
            if (display.textContent == "0" ||
                display.textContent == "+" ||
                display.textContent == "-" ||
                display.textContent == "*" ||
                display.textContent == "/") display.textContent = string;
            else display.textContent += string;
            break;
    }

    if (display.textContent.length > 9) {
        display.textContent = "Can'tFit!";
    }
}

function activateButtons() {
    let numberButtons = document.querySelector(".numberButtons").children;
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", () => {
            updateDisplay(numberButtons[i].textContent);
            if (numberButtons[i].textContent == ".") turnOffDecimal();
        });
    }

    let operations = document.querySelector(".operationButtons").children;
    for (let i = 0; i < operations.length; i++) {
        operations[i].addEventListener("click", () => {
            updateDisplay(operations[i].textContent);
            turnOnDecimal();
        });
    }

    let functions = document.querySelector(".functionButtons").children;
    functions[0].addEventListener("click", () => clearAll());
    functions[1].addEventListener("click", () => updateDisplay("negative"))
    functions[2].addEventListener("click", () => updateDisplay("percent"));
}

activateButtons();