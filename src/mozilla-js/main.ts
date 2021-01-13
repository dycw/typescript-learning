console.log("Hello from main.ts");

const myHeading = document.querySelector("h1");

if (myHeading !== null) {
  myHeading.textContent = "Hello world! (set by script)";

  // alert("hello!");
}

const myHtml = document.querySelector("html");

if (myHtml !== null) {
  console.log("Adding onClick to HTML");

  // myHtml.onclick = function () {
  //   alert("Ouch! Stop poking me!");
  // };
}

const myImage = document.querySelector("img");

if (myImage !== null) {
  myImage.onclick = function () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "src/mozilla-js/images/firefox-icon.png") {
      console.log("Setting path 1");
      myImage.setAttribute("src", "src/mozilla-js/images/firefox2.png");
    } else {
      console.log("Setting path 2");
      myImage.setAttribute("src", "src/mozilla-js/images/firefox-icon.png");
    }
  };
}

const myButton = document.querySelector("button");
// (myRow.querySelector('.myClass') as HTMLInputElement).value = " a vaule";
// const myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.") as string;
  localStorage.setItem("name", myName);
  (myHeading as HTMLInputElement).textContent = "Mozilla is cool, " + myName;
}
