/// Business Logic ///

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

/// Everything below this line is user interface logic //

$(document).ready(function () {
    $("form#add").submit(function (event) {
        event.preventDefault();
        const number1 = parseInt($("#add1").val());
        const number2 = parseInt($("#add2").val());
        const resultAdd = add(number1, number2);
        $("#output").text(resultAdd)
    });
});

// const resultSub = substract(number1, number2);
// const resultMul = multiply(number1, number2);
// const resultDiv = divide(number1, number2);

