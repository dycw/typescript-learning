console.log("Hello from main.ts");

/*A Hello world! example*/

const myHeading = document.querySelector("h1");
if (myHeading !== null) {
  myHeading.textContent = "Hello world! (set by script)";

  // alert("hello!");
}

/*Events*/

const myHtml = document.querySelector("html");
if (myHtml !== null) {
  console.log("Adding onClick to HTML");

  // myHtml.onclick = function () {
  //   alert("Ouch! Stop poking me!");
  // };
}

/*Adding an image changer*/

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

/*Adding a personalized welcome message*/

const myButton = document.querySelector("button");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (myName !== null) {
    localStorage.setItem("name", myName);
    if (myHeading !== null) {
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  } else {
    setUserName();
  }
}

if (myButton !== null) {
  myButton.onclick = function () {
    setUserName();
  };
}
