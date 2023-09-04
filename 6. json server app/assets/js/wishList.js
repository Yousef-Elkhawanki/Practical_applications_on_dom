let wishList_container;
function get_data_from_localStorage() {
  if (localStorage.getItem("wishList")) {
     wishList_container = JSON.parse(localStorage.getItem("wishList")) ;
}
display_wishList();
}
window.addEventListener("DOMContentLoaded", get_data_from_localStorage);
// console.log(wishList_container);

function display_wishList() {
  let tem = "";
  for (let i = 0; i < wishList_container.length; i++) {
    tem += `
    <div class="col-md-4">
                    <div class="product bg-body">
                        <div class="product_img position-relative">
                        <i class="fas fa-xmark close" onClick="remove_from_wishList(${i})"></i>
                            ${
                              wishList_container[i].onSale
                                ? "<span>onSale</span>"
                                : ""
                            }
                            <img class="w-100" src=${
                              wishList_container[i].product_url
                            } alt="">
                            <div class="product_serive d-flex gap-3 position-absolute">
                                <div class="icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product__details text-center p-3">
                            <h2>${wishList_container[i].product_name}</h2>
                            <div class="product__price d-flex justify-content-between align-items-center mt-3">
                                <h6>price:${wishList_container[i].price}</h6>
                                <h6>Count:${wishList_container[i].count}</h6>
                            </div>
                        </div>
                    </div>
                </div>`;
  }
  document.getElementById("show_data").innerHTML = tem;
}

function remove_from_wishList(index) {
  //   console.log("Removed", index);
  wishList_container.splice(index, 1);
  localStorage.setItem("wishList", JSON.stringify(wishList_container));
  display_wishList();
  //   console.log(wishList_container);
}
