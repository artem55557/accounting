document.addEventListener("DOMContentLoaded", function() {

  // Custom JS
  const burger = document.querySelector('.burger-btn')
  const menu = document.querySelector('.menu')

  if(burger) {
    burger.addEventListener('click', event => {
      event.preventDefault()
      burger.classList.toggle('open')
      menu.classList.toggle('menu-open')
    })
  }

});
