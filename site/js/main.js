document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.main-nav').classList.toggle('open');
  this.setAttribute('aria-expanded', document.querySelector('.main-nav').classList.contains('open'));
});
