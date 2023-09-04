const menu__bar = document.querySelector('.menu__bar')
const menu__List = document.querySelector('.list')
menu__bar.addEventListener('click' ,function(){
    menu__List.classList.toggle ('toggle__menu__bar')
})