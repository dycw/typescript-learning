var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function intro_add(num1, num2, num3) {
    return num1 + num2 + num3;
}
button.addEventListener("click", function () {
    console.log(intro_add(+input1.value, +input2.value, 1000));
});
