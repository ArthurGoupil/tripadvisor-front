document.addEventListener('DOMContentLoaded', () => {
  console.log('Document ready.');
});

window.addEventListener('scroll', () => {
  if (window.scrollY < 310) {
    document.querySelector('.scroll-menu').classList.add('hide');
  } else {
    document.querySelector('.scroll-menu').classList.remove('hide');
  }
});

const switchModal = () => {
  document.querySelector('.modal').classList.toggle('hide');
};
