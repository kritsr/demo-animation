let el = document.getElementById("img-section-2");
let el2 = document.getElementById("section-moveup");
let elSection3 = document.getElementsByClassName('bg-section-3')[0];
let el3 = document.getElementById("img-section-3");
let el4 = document.getElementById("section-moveup-2");
let currentRight1 = 0;
let currentRight2 = 0;
let isFirst = false;

let section1Height = document.getElementsByClassName('bg-section-1')[0].offsetHeight;

window.onscroll = (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if(st >= (section1Height - 20)) {
    el.style.display = 'block';
    el.style.animation = 'show-first 400ms forwards';

    setTimeout(() => {
      el2.style.display = 'flex';
      el2.style.alignItems = 'center';
      el2.style.animation = 'fadeup 2s forwards';
    }, 500)

    setTimeout(() => {
      elSection3.style.display = 'block';
    }, 600)
    // if(!isFirst) {
    //   setTimeout(() => {
    //     el2.style.display = 'flex';
    //     el2.style.alignItems = 'center';
    //     el2.style.animation = 'fadeup 5s forwards';
    //   }, 2100)

    //   setTimeout(() => {
    //     elSection3.style.display = 'block';
    //   }, 3100)
    // }
    // isFirst = true;
  } else if(isFirst) {
    // isFirst = false;

    // el2.style.display = 'flex';
    // el2.style.animation = 'fadedown 2s forwards';
    // setTimeout(() => {
    //   el2.style.display = 'none';
    //   el.style.display = 'block';
    //   el.style.animation = '';
    // }, 1000)
  }

  if(st >= ((section1Height*2) - 20)) {
    el3.style.display = 'block';
    el3.style.animation = 'show-second 600ms forwards';

    setTimeout(() => {
      el4.style.display = 'flex';
      el4.style.alignItems = 'center';
      el4.style.animation = 'fadeup-2 1s forwards';
    }, 600)

    // setTimeout(() => {
    //   elSection3.style.display = 'block';
    // }, 3100)

    // if(!isFirst) {
    //   setTimeout(() => {
    //     el2.style.display = 'flex';
    //     el2.style.alignItems = 'center';
    //     el2.style.animation = 'fadeup 5s forwards';
    //   }, 2100)

    //   setTimeout(() => {
    //     elSection3.style.display = 'block';
    //   }, 3100)
    // }
    // isFirst = true;
  }
};
