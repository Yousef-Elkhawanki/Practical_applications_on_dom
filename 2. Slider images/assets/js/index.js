const hero__banner = document.querySelector('.hero__banner');
const hero__heading =document.querySelector ('.hero__banner h1')
const nextBtn =document.querySelector('.hero__banner i:nth-child(3)');
const prevBtn =document.querySelector('.hero__banner i:nth-child(1)');
let imgIndex = 0;
let productContainer = [{
    urlImage: '2.jpg',
    content: 'DOM Practical 2 Slider #2',
}
,{
    urlImage: '3.jpg',
    content: 'DOM Practical 2 Slider #3',
},
{
    urlImage: '4.jpg',
    content: 'DOM Practical 2 Slider #4',
}]

let nextSlider = ()=>{
    imgIndex ++
    if(imgIndex > productContainer.length -1){
        imgIndex =0
    }
    hero__banner.style.backgroundImage = `url(assets/images/${productContainer[imgIndex].urlImage})`
    hero__heading.textContent =`${productContainer[imgIndex].content}`
    
}

let prevSlider = ()=>{
    imgIndex--
    if (imgIndex<0){
        imgIndex =productContainer.length -1
    }
    hero__banner.style.backgroundImage = `url(assets/images/${productContainer[imgIndex].urlImage})`
    hero__heading.textContent =`${productContainer[imgIndex].content}`

}

nextBtn.addEventListener('click' ,nextSlider)
prevBtn.addEventListener('click' ,prevSlider)