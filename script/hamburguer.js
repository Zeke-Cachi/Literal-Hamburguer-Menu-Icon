let button = document.getElementById('btn');
let showMenu = document.getElementById('nav');

button.addEventListener('click', function changeOnClick() {
    button.classList.toggle('focus');
    showMenu.classList.toggle('no-display');
    showMenu.classList.toggle('active');

    

})

