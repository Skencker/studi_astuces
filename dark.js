let input = document.querySelector('input[name="theme"]');
let body = document.querySelector('body');
let darkmode = localStorage.getItem('darkmode')

const enableDarkmode = () => {
        body.classList.add('dark')
        localStorage.setItem('darkmode', 'enabled')
}
const disableDarkmode = () => {
        body.classList.remove('dark')
        localStorage.setItem('darkmode', null)
}

if (darkmode === 'enabled') {
        enableDarkmode();
}

input.addEventListener('click', () => {
        darkmode = localStorage.getItem('darkmode')
       if (darkmode !== 'enabled') {
               console.log('activé')
               enableDarkmode();
        } else {
                disableDarkmode();
                console.log('desactivé')
       }
})


