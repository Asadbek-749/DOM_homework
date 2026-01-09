const btnO = document.querySelector(".my-btn");
const btnC = document.querySelector(".my-btn2");
// const bg = document.querySelector(".door-frame");
const door = document.querySelector(".door");

btnO.addEventListener("click", () => {
  door.style.width = "220px";
//   bg.style.background="white"
});

btnC.addEventListener("click", () => {
  door.style.width = "320px";
//   bg.style.background="#222"
});
