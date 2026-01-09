const sk = document.querySelector(".sk");
const skBtnStart = document.querySelector(".start");
const skStopBtn = document.querySelector(".stop");
const skRestartBtn = document.querySelector(".restart");
let id = null;

skBtnStart.addEventListener("click", () => {
  clearInterval(id);
  id = setInterval(() => {
    sk.textContent = (Number(sk.textContent) + 0.1).toFixed(1);
  }, 100);
});

skStopBtn.addEventListener("click", () => {
  clearInterval(id);
  id = null;
});

skRestartBtn.addEventListener("click", () => {
  clearInterval(id);
  id = null;
  sk.textContent = "0";
});
