let button = document.querySelector('.burger');
let nav = document.querySelector('nav');
let lien = document.querySelectorAll('a');
let icon = document.querySelectorAll('i');
let trait1 = document.querySelector('.trait1');
let trait2 = document.querySelector('.trait2');
let trait3 = document.querySelector('.trait3');

let main =document.querySelector('main');



// au click du burger


button.addEventListener('click', () => {
    nav.classList.toggle('opened');
    button.classList.toggle('opened-burger');
    button.classList.toggle('btn');
    
    for (let i = 0; i < lien.length; i ++) {
        lien[i].classList.toggle('lien')
    }
    for (let i = 0; i < icon.length; i ++) {
        icon[i].classList.toggle('icon')
    }
    
    trait1.classList.toggle('trans1');
    trait2.classList.toggle('trans2');
    trait3.classList.toggle('trans3');
} )

main.addEventListener('click' , () => {
    nav.classList.remove('opened')
    button.classList.remove('opened-burger')
});

