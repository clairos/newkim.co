const menuBtn = document.querySelector('.menu-nav');
let menuOpen = false;

menuBtn.addEventListener('click', function() {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


function onClickMenu() {
    document.getElementById('menu').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change');
    document.getElementById('menu-bg').classList.toggle('change');
    document.getElementById('nav').addEventListener('blur', (event) => {
        event.target.style.display = 'none';
    })
}
