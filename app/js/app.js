document.addEventListener("DOMContentLoaded", function() {

  // Custom JS
  const burger = document.querySelector('.burger-btn')
  const menu = document.querySelector('.menu')
  burger.addEventListener('click', event => {
    burger.classList.toggle('open')
    menu.classList.toggle('menu-open')
  })

});
