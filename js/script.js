var add = (number1, number2) => number1 + number2;
var subtract = (number1, number2) => number1 - number2;
var multiply = (number1, number2) => number1 * number2;
var divide = (number1, number2) => number1 / number2;


$(document).ready(function () {
    $("form#add").submit(function (e) { 
        e.preventDefault();
        var num1 = parseInt($("#add1").val());
        var num2 = parseInt($("#add2").val());
        var result = add(num1, num2);
        alert(result);
    });
});