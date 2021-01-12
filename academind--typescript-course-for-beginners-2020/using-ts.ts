const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value, 1));
});
