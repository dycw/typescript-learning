console.log("Hello from main.ts");

const myHeading = document.querySelector("h1");

if (myHeading !== null) {
  console.log("Changing h1");
  myHeading.textContent = "Hello world!";

  // alert("hello!");
}

const myHtml = document.querySelector("html");

if (myHtml !== null) {
  console.log("Adding onClick to HTML");

  myHtml.onclick = function () {
    alert("Ouch! Stop poking me!");
  };
}
