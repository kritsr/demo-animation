let el = document.getElementById('img');
let difTop = el.getBoundingClientRect().top;
let stage = 1;
let stage2ScrollY = 0;
let nStage3 = 0;
let lastScrollTop = 0;
window.onscroll = e => {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

    let cch = (window.scrollY*2)-10;
    let inEl = document.getElementById('img');
    let inDifTop = inEl.getBoundingClientRect().top;
    let inDifLeft = inEl.getBoundingClientRect().left;

    // stage 1
    if(inDifTop > -120 && cch < window.innerHeight) {
        stage = 1;
        el.style.top = `calc(${difTop}px - ${window.scrollY}px)`;
        el.style.left = '50%';
    }

    // stage 2
    if(inDifTop < -50) {
        stage = 2;
        el.style.left = 0;
    }
    if(stage === 2) {
        el.style.top = `${difTop}px`;
        el.style.left = `${cch/5}px`;
    }

    // stage 3
    if(inDifLeft > window.innerWidth && stage === 2) {
        stage = 3;
        stage2ScrollY = window.scrollY;
    } else if(inDifTop > window.innerHeight && stage === 3) {
        stage = 2;
    }

    if(stage === 3){
        el.style.left = '50%';
        el.style.top = `calc(100% - ${nStage3}px)`;

        nStage3 = st > lastScrollTop ? nStage3 += 20 : nStage3 -= 20;
        lastScrollTop = st <= 0 ? 0 : st;
    }

    document.getElementsByClassName('container')[0].style.background = `rgba(255, 0, 0, ${window.scrollY / 3000})`;
}