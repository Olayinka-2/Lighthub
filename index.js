const menuLinks = document.getElementsByClassName('nav-menu')[0]
const bar = document.getElementsByClassName('menu')[0]

bar.addEventListener('click', function() {
    menuLinks.classList.toggle('isactive');
    bar.classList.toggle('active');
});