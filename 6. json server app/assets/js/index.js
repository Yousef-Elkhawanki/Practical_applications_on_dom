let my__data;
let get_data_from_api = async () => {
  let res = await fetch("http://localhost:3000/products", {
    method: "GET",
  }).then((res) => res.json());
  console.log(res);
  my__data = res;
  diplay__product(res);
};

window.addEventListener("DOMContentLoaded", () => {
  get_data_from_api();
});

function diplay__product(data) {
  let tem = "";
  for (let i = 0; i < data.length; i++) {
    tem += `
    <div class="col-md-4">
                    <div class="product bg-body">
                        <div class="product_img position-relative">
                            ${data[i].onSale ? "<span>onSale</span>" : ""}
                            <img class="w-100" src=${
                              data[i].product_url
                            } alt="">
                            <div class="product_serive d-flex gap-3 position-absolute">
                                <div class="icon">
                                    <i onClick="save_data_to_wishList(${i})" class="fas fa-heart"></i>
                                </div>
                                <div class="icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <div class="icon" x>
                                    <i class="fas fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                        <div class="product__details text-center p-3">
                            <h2>${data[i].product_name}</h2>
                            <div class="product__price d-flex justify-content-between align-items-center mt-3">
                                <h6>price:${data[i].price}</h6>
                                <h6>Count:${data[i].count}</h6>
                            </div>
                        </div>
                    </div>
                </div>`;
  }
  document.getElementById("show_data").innerHTML = tem;
}
//   هنا انا شيلت خليته يبدء بالداتا اللي متخزنة ع طول عشان ميعملش عليها اوفر رايت
let wishList_container = JSON.parse(localStorage.getItem("wishList")) || [];
function save_data_to_wishList(index) {
  wishList_container.push(my__data[index]);
  save_data_to_localStorage(wishList_container);
  console.log(wishList_container);
}

function save_data_to_localStorage(dataContainer) {
  //   wishList_container = JSON.parse(localStorage.getItem("wishList"));
  localStorage.setItem("wishList", JSON.stringify(dataContainer));
  console.log(wishList_container);
}
