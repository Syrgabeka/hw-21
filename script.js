// Задание 1
const el = document.querySelector(".js-button");
console.log(el.classList.contains("js-button"));

// Задание 2
const color = document.querySelector(".green");

function play() {
  if (color.innerText === "Off") {
    color.innerHTML = "ON";
    color.style.backgroundColor = "green";
  } else {
    color.innerHTML = "Off";
    color.style.backgroundColor = "red";
  }
}

// Задание 3
// Задание 4
const input = document.querySelector(".input");
let textValue = document.querySelector(".text");

function vuvod() {
  textValue.innerHTML = "Your name: " + input.value;
}

// Задание 5
function showText() {
  document.querySelector(".notebook").innerHTML = event.target.value;
}

// Задание 6

// Задание 7
