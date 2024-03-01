// // Задание 1
// const el = document.querySelector(".js-button");
// console.log(el.classList.contains("js-button"));

// // Задание 2
// const color = document.querySelector(".green");

// function play() {
//   if (color.innerText === "Off") {
//     color.innerHTML = "ON";
//     color.style.backgroundColor = "green";
//   } else {
//     color.innerHTML = "Off";
//     color.style.backgroundColor = "red";
//   }
// }

// Задание 3
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
let text = (document.getElementsByClassName("text")[0].textContent =
  "Your name: ");

function vuvod() {
  const inputValue = input.value;
  const a = text + inputValue;
  text.innerHTML = a;
  console.log(a);
}

// Задание 4

// Задание 5

// Задание 6

// Задание 7
