let intervalId = undefined;

function runWather(mode = "rain") {
  console.log(mode);
  if (intervalId) {
    clearInterval(intervalId);
  }
  const contEl = document.getElementById("container");
  if (mode !== "stop") {
    intervalId = setInterval(() => {
      const rand = Math.random() * 100;
      console.log(rand);

      let el = document.createElement("div");
      if (mode === "rain") {
        el.innerHTML = `<i class="fa-solid fa-droplet"></i>`;
      } else {
        el.innerHTML = `<i class="fa-regular fa-snowflake"></i>`;
        el.style.color = "#d9d9d9";
      }
      el.classList.add("animated-element");
      el.style.left = rand + "%";
      contEl.append(el);
      setTimeout(() => {
        el.remove();
      }, 5000);
    }, 1);
  }
}
