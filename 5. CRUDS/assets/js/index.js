const productNameInput =document.getElementById('productNameInput');
const productCategoryInput =document.getElementById('productCategoryInput');
const productPriceInput =document.getElementById('productPriceInput');
const productDiscountInput =document.getElementById('productDiscountInput');
const productQuantityInput =document.getElementById('productQuantityInput');
const productDescriptionInput =document.getElementById('productDescriptionInput')
const addProductBtn = document.getElementById('addProductBtn');
const updateProductBtn = document.getElementById('updateProductBtn');
const searchInput =document.getElementById('searchInput')
let productContainer = [];

// display data from localStorage 

if(localStorage.getItem('products')){
    productContainer = JSON.parse(localStorage.getItem('products'))
    dispalyProduct()
}

// start add product logic 
function addProduct (){
    if( checkProductName()){
        const product = {
            name:productNameInput.value,
            category:productCategoryInput.value,
            price:productPriceInput.value,
            discount:productDiscountInput.value,
            quantity:productQuantityInput.value,
            description:productDescriptionInput.value,
        }
        productContainer.push(product)
        console.log(productContainer);
        localStorage.setItem('products' ,JSON.stringify(productContainer))
        dispalyProduct();
        clearInputs();
    }
    else {
        // alert('Sorry')
        productNameInput.placeholder = `Ivalid...`
    }
    
    
}
addProductBtn.addEventListener('click' ,addProduct);


// dispaly Product 
function dispalyProduct (){
    let zo7la2a = ``;
        for (let i = 0; i < productContainer.length; i++) {
            zo7la2a+= `
            <tr>
                            <td>${productContainer[i].name}</td>
                            <td>${productContainer[i].category}</td>
                            <td>${productContainer[i].price}</td>
                            <td>${productContainer[i].discount}</td>
                            <td>${productContainer[i].quantity}</td>
                            <td>${productContainer[i].description}</td>
                            <td><button onclick='setForm(${i})' class="fas fa-pen-to-square btn btn-success"></button></td>
                            <td><button onclick='deleteProduct(${i})' class="fas fa-xmark btn btn-danger"></button></td>
                        </tr>`
            
        }
        document.getElementById('showData').innerHTML = zo7la2a ;
    }

// Remove Product From CRUDs 

function deleteProduct (productIndex){
    // console.log(`Delete ${productIndex}`);
    productContainer.splice(productIndex,1);
    localStorage.setItem('products' ,JSON.stringify(productContainer));
    dispalyProduct();
}


// clear Inputs 
function clearInputs (){
    productNameInput.value = '';
    productCategoryInput.value = '';
    productPriceInput.value = ''
    productDiscountInput.value = ''
    productQuantityInput.value = ''
    productDescriptionInput.value = ''
}


// search Function 
function searchProduct (term){
    // if (x.toLowerCase().includes(term.toLowerCase())){

    // }
    let zo7la2a = ``;
    for (let i = 0; i < productContainer.length; i++) {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            zo7la2a+= `
            <tr>
                            <td>${productContainer[i].name}</td>
                            <td>${productContainer[i].category}</td>
                            <td>${productContainer[i].price}</td>
                            <td>${productContainer[i].discount}</td>
                            <td>${productContainer[i].quantity}</td>
                            <td>${productContainer[i].description}</td>
                            <td><button class="fas fa-pen-to-square btn btn-success"></button></td>
                            <td><button onclick='deleteProduct(${i})' class="fas fa-xmark btn btn-danger"></button></td>
                        </tr>`
        }
        
        
    }
    document.getElementById('showData').innerHTML = zo7la2a ;

}
searchInput.addEventListener('input' , ()=>{
    searchProduct (searchInput.value)
});

// set Data 
let x  =0;
function setForm (productIndex){
    x =productIndex
    // console.log('Set From' + productIndex);
    productNameInput.value = productContainer[productIndex].name;
    productCategoryInput.value =productContainer[productIndex].category;
    productPriceInput.value = productContainer[productIndex].price;
    productDiscountInput.value = productContainer[productIndex].discount;
    productQuantityInput.value = productContainer[productIndex].quantity;
    productDescriptionInput.value = productContainer[productIndex].description;
    addProductBtn.classList.add('d-none')
    updateProductBtn.classList.remove('d-none')
}
// update Product 

function updateProduct (){
    console.log(x);
    productContainer[x].name = productNameInput.value
    productContainer[x].category =productCategoryInput.value
    productContainer[x].price = productPriceInput.value
    productContainer[x].discount = productDiscountInput.value
    productContainer[x].quantity = productQuantityInput.value
    productContainer[x].description = productDescriptionInput.value
    addProductBtn.classList.remove('d-none')
    updateProductBtn.classList.add('d-none')
    localStorage.setItem('products' ,JSON.stringify(productContainer));
    dispalyProduct();
    clearInputs();
}
updateProductBtn.addEventListener('click' ,updateProduct);


// Regex 


function checkProductName(){
    let regx = /^\w{4,15}$/
    if(regx.test(productNameInput.value)){
        return true
    }
    else {
        return false
    }
}



