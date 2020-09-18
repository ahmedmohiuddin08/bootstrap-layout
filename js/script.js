window.addEventListener('scroll', function () {
  let menu = document.getElementById('menu-bar');
  let windowPosition = window.scrollY > 0;
  menu.classList.toggle('scroll-active', windowPosition);
});
