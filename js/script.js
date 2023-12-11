let firstTerm = "";
let secondTerm = "";
let operator = "";

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) 
        return "IDK";
    return num1 / num2;
}

//This feature is not necessary
function displayOperation(num1, operator, num2) {
    let operation = String.toString(num1) + " " +
        String.toString(operator) + " " +
        String.toString(num2);
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
            result = 0;
            break;
    }
    //rounds the result to two decimals IF there was no divide by zero
    if(typeof result == "number") result = Math.floor(result * 100) / 100;
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

    if (string == "clearAll") {
        display.textContent = "0";
        firstTerm = "";
        secondTerm = "";
        operator = "";
    }

    if (display.textContent.length >= 9) {
        display.textContent = "Can'tFit!";
        return;
    }

    switch (string) {
        case "percent":
            display.textContent = display.textContent / 100;
            break;
        case "negative":
            display.textContent = -1 * display.textContent;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (operator != "") break;
            if (firstTerm == "") firstTerm = display.textContent;
            operator = string;
            display.textContent = string;
            break;
        case "=":
            secondTerm = display.textContent;
            display.textContent = operate(firstTerm, operator, secondTerm);
            turnOnDecimal();
            break;
        case ".":

        default:
            if (display.textContent == "+" ||
                display.textContent == "/" ||
                display.textContent == "*" ||
                display.textContent == "-") display.textContent = string;
            else if (display.textContent == "0" && string != ".") {
                display.textContent = string;
            }
            else display.textContent += string;
            break;
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

function setTheme() {
    /* Earth Tones
    Frame Background: #8c756a
    Display Background: #7c6a65
    Function Buttons: #a1887f
    Number Buttons: #bcaaa4
    Operation Buttons: #8c7b75

    Ocean Vibes
    Frame Background: #607d8b
    Display Background: #546e7a
    Function Buttons: #80cbc4
    Number Buttons: #90a4ae
    Operation Buttons: #78909c

    Pastel Paradise
    Frame Background: #c5e1a5
    Display Background: #aed581
    Function Buttons: #81c784
    Number Buttons: #ffcc80
    Operation Buttons: #90a4ae

    Midnight Noir
    Frame Background: #121212
    Display Background: #333
    Function Buttons: #2196f3 (Royal Blue)
    Number Buttons: #ff9800 (Orange)
    Operation Buttons: #ff4081 
    */
}

activateButtons();