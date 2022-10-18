let el = document.getElementById("img");
let currentRight1 = 0;
let currentRight2 = 0;

window.onscroll = (e) => {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  let difTop = el.getBoundingClientRect().top;
  let difPerTop = (difTop / screen.height) * 100;

  el.style.width = (50 + (st/2.85)) + "px";
  el.style.height = (47 + (st/3)) + "px";

  if (difPerTop < 10) {
    el.style.transform = "scaleX(-1)";
    el.style.right = st * 4 + "px";
    el.style.top = st + "px";
  }

  if (difPerTop >= 10 && difPerTop < 20) {
    if (!currentRight1) currentRight1 = el.style.right.split("px")[0];

    el.style.transform = "scaleX(1)";
    el.style.right = currentRight1 - st + "px";
    el.style.top = st + "px";
  }

  if (difPerTop >= 20) {
    if(!currentRight2) currentRight2 = el.style.right.split("px")[0];
    el.style.transform = "scaleX(-1)";
    el.style.right = st * 2 + "px";
    el.style.top = st + "px";
  }

  console.log(st);
};
