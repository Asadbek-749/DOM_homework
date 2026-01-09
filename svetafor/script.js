const qizil = document.getElementById("1");
const sariq = document.getElementById("2");
const yashil = document.getElementById("3");

let step = 0;

setInterval(() => {
  qizil.style.background = "transparent";
  sariq.style.background = "transparent";
  yashil.style.background = "transparent";

  switch (step) {
    case 0:
      qizil.style.background = "red";
      break;
    case 1:
      qizil.style.background = "red";
      sariq.style.background = "yellow";
      break;
    case 2:
      yashil.style.background = "green";
      break;
    case 3:
      yashil.style.background = "green";
      sariq.style.background = "yellow";
      break;
  }

  step = (step + 1) % 4;
}, 5000);
