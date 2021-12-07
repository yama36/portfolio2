const btn = document.querySelector('.HB__btn');
const menu = document.querySelector('.HB__menu');
const back = document.querySelector('.HB__back');


// スクロール禁止
function disableScroll(event) {
  event.preventDefault();
}

function hbMenu() {
  if (btn.className !== "HB__btn inview") {
    btn.classList.add('inview');
    menu.classList.add('inview');
    back.classList.add('inview');
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('hidden');
  } else {
    btn.classList.remove('inview');
    menu.classList.remove('inview');
    back.classList.remove('inview');
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.remove('hidden');
  }
}

btn.addEventListener('click', () => {
  hbMenu();
});

menu.addEventListener('click', () => {
  hbMenu();
});

back.addEventListener('click', () => {
  hbMenu();
});