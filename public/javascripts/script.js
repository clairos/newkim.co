// const close = document.querySelector('.menu-search');
// const open = document.querySelector('.ham');
// const menu = document.querySelector('.menu');

// close.addEventListener('click', () => {
//     menu.style.visibility = 'hidden';
// })

// open.addEventListener('click', () => {
//     menu.style.visibility = 'visible'
// });

// function openSearch(){
//     this.style.display = 'none'
// }

// function onClickMenu(){
//     document.getElementById('menu').classList.toggle('change');
//     document.getElementById('nav').classList.toggle('change');
//     document.getElementById('menu-bg').classList.toggle('change-bg');
// }
 //      MENU HAMBURGER
let navigation = document.querySelector('.navigation');
document.querySelector('.toggle').onclick = function (){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
//      SEARCH
let search = document.querySelector('.search');
let close = document.querySelector('.close');
let searchBox = document.querySelector('.searchBox');

search.onclick = function(){
    searchBox.classList.add('active');
}
close.onclick = function(){
    searchBox.classList.remove('active');
}    
