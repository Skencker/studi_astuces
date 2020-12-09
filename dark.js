let input = document.querySelector('input[name="theme"]');

let bg_color_footer = document.querySelector('footer');
let bg_color_main = document.querySelector('main');
let bg_color_wrapper = document.querySelector('.wrapper');
let bg_color_header = document.querySelector('header');

input.addEventListener('change', () => {
    if (input.checked) {
        bg_color_footer.classList.toggle('dark')
        bg_color_main.classList.toggle('dark')
        bg_color_header.classList.toggle('dark')
        bg_color_wrapper.classList.toggle('dark')


    }
})



