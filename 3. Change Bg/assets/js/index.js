const hero__banner  =document.querySelector('.hero__banner')
const container__images  =document.querySelectorAll('.container__images img');
for (let i = 0; i < container__images.length; i++) {
    container__images[i].addEventListener('click' , function(e){
            console.log(e.target.getAttribute('src'));
            const imgSrc = e.target.getAttribute('src');
            hero__banner.style.backgroundImage = `url(${imgSrc})`
    })
}
