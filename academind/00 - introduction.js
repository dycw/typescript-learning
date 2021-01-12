"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add_00(num1, num2, num3) {
    return num1 + num2 + num3;
}
button.addEventListener("click", function () {
    console.log(add_00(+input1.value, +input2.value, 1000));
});
