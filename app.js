const value = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const btn = document.querySelectorAll(".btn");
let numValue = 0;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", numberChanger);
}

function numberChanger(e) {
  switch (e.target.classList[1]) {
    case "decrease":
      numValue--;
      value.textContent = `${numValue}`;
      break;
    case "reset":
      numValue = 0;
      value.textContent = `${numValue}`;
      break;
    case "increase":
      numValue++;
      value.textContent = `${numValue}`;
    default:
      break;
  }
  if (numValue < 0) {
    value.style.color = "red";
  } else if (numValue === 0) {
    value.style.color = "hsl(209, 61%, 16%)";
  } else if (numValue > 0) {
    value.style.color = "green";
  } else {
  }
}
