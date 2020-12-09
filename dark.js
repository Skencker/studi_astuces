let input = document.querySelector('input[name="theme"]');
let body = document.querySelector('body')

input.addEventListener('change', () => {
    if (input.checked) {
  
        body.classList.toggle('dark')
    }
})



