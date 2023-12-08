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
        return "這樣不對嘍";
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