function add(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
const resultAdd = add(number1, number2);
const resultSub = substract(number1, number2);
const resultMul = multiply(number1, number2);
const resultDiv = divide(number1, number2);

alert(resultDiv);