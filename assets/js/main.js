document.addEventListener('DOMContentLoaded', () => {
  console.log('Document ready.');
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 310) {
    document.querySelector('.mobile-menu').classList.add('hide');
  } else {
    document.querySelector('.mobile-menu').classList.remove('hide');
  }
  console.log(window.scrollY);
});
