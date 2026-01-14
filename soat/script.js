const clock = document.querySelector(".clock");
function updateClock() {
  const now = new Date();
  const formatted = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(now);
  clock.textContent = formatted;
};
setInterval(updateClock, 1000);
updateClock();
