let el = document.getElementById("img");
let el2 = document.getElementById("section-moveup");
let currentRight1 = 0;
let currentRight2 = 0;
let isFirst = false;

window.onscroll = (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let timeOut;
  if(st > 1300) {
    el.style.display = 'block';
    el.style.animation = 'show-first 1.4s forwards';

    !isFirst && setTimeout(() => {
      el2.style.display = 'flex';
      el2.style.alignItems = 'center';
      el2.style.animation = 'fadeup 5s forwards';
    }, 1500)
    isFirst = true;
  } else if(isFirst) {
    isFirst = false;

    el2.style.display = 'flex';
    el2.style.animation = 'fadedown 2s forwards';
    setTimeout(() => {
      el2.style.display = 'none';
      hideFirst();
    }, 1000)

    function hideFirst() {
      el.style.display = 'block';
      el.style.animation = 'hide-first 1.5s forwards';
      setTimeout(() => {
        el.style.display = 'none';
      }, 1400)
    }
  }
};
