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