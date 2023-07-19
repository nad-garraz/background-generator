var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("button");

// starts the page with the css.textContent and original
// hardcoded colors.
backgroundGenerator();

// assigns the style to the instances (Dom elements?) of
// body, css and button.
function backgroundGenerator() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  // .textContent gives the actual sintax of the css instance.
  css.textContent = body.style.background + ";";

  button.style.background =
    "linear-gradient(to left, " + color1.value + ", " + color2.value + ")";
}

// Generates a random string in the form #rrggbb with hex values.
function randomColorGenerator() {
  var hexRandom = Math.floor(Math.random() * 16777215).toString(16);
  while (hexRandom.length < 6) hexRandom = "0" + hexRandom;
  return "#" + hexRandom;
}

function randomBackgroundGenerator() {
  color1.value = randomColorGenerator();
  color2.value = randomColorGenerator();
  backgroundGenerator();
}

// Evets:
// mouse and input events are passed directly  to the function in
// the second argument
button.addEventListener("click", randomBackgroundGenerator);
color1.addEventListener("input", backgroundGenerator);
color2.addEventListener("input", backgroundGenerator);
