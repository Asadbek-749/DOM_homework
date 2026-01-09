const light = document.querySelector(".box2");
const on = document.querySelector(".on");
const off = document.querySelector(".off");

on.addEventListener("click", () => {
  on.style.background = "red";
  off.style.background = "white";
  on.style.color = "white";
  off.style.color = "red";
  light.style.background = "yellow";
  light.style.boxShadow = "0 0 40px 10px yellow";
  light.style.border = "0";
});

off.addEventListener("click", () => {
  on.style.background = "white";
  off.style.background = "red";
  on.style.color = "red";
  off.style.color = "white";
  light.style.background = "white";
  light.style.boxShadow = "none";
  light.style.border = "2px solid rgb(0, 0, 0)";
});
