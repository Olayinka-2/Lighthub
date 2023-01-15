const links = document.querySelector('.nav-menu');
const bar = document.querySelector('.menu');

bar.addEventListener('click', function() {
    links.classList.toggle('isactive');
    bar.classList.toggle('active');
})