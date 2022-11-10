let el = document.getElementById("img");
let el2 = document.getElementById("section-moveup");
let elSection3 = document.getElementsByClassName('bg-section-3')[0];
let currentRight1 = 0;
let currentRight2 = 0;
let isFirst = false;

let section1Height = document.getElementsByClassName('bg-section-1')[0].offsetHeight;

window.onscroll = (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if(st >= section1Height) {
    el.style.display = 'block';
    el.style.animation = 'show-first 2s forwards';

    if(!isFirst) {
      setTimeout(() => {
        el2.style.display = 'flex';
        el2.style.alignItems = 'center';
        el2.style.animation = 'fadeup 5s forwards';
      }, 2100)

      setTimeout(() => {
        elSection3.style.display = 'block';
      }, 5100)
    }
    isFirst = true;
  } else if(isFirst) {
    isFirst = false;

    el2.style.display = 'flex';
    el2.style.animation = 'fadedown 2s forwards';
    setTimeout(() => {
      el2.style.display = 'none';
      el.style.display = 'block';
      el.style.animation = '';
    }, 1000)
  }
};
