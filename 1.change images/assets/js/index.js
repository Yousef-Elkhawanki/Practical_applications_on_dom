const image__container = document.querySelector('.image__container img');
const image__list =document.querySelectorAll('.image__list img');
for (let i = 0; i < image__list.length; i++) {
    image__list[i].addEventListener('click' ,function(e){
        const imgSrc = e.target.getAttribute('src');
        image__container.setAttribute('src' ,`${imgSrc}`)
        console.log(e.target.getAttribute('src'));
    })
}
