let button = document.querySelector('.burger');
let nav = document.querySelector('nav');
let lien = document.querySelectorAll('a')
let icon = document.querySelectorAll('i')


button.addEventListener('click', () => {
    nav.classList.toggle('opened');
    button.classList.toggle('btn');
    for (let i = 0; i < lien.length; i ++) {
        lien[i].classList.toggle('lien')
    }
    for (let i = 0; i < icon.length; i ++) {
        icon[i].classList.toggle('icon')
    }
    
   

} )