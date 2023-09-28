let paginate_num = 1;
async function getPostFromApi(paginate_num) {
  document.getElementById("showPosts").innerHTML = `<div class="text-center">
  <i class="fas fa-spinner fa-spin fa-3"></i>
  </div>`;
  let res = await fetch(
    `http://localhost:3000/posts?_page=${paginate_num}`
  ).then((res) => res.json());
  displayPosts(res);
}
getPostFromApi(paginate_num);

function displayPosts(res) {
  let postTemp = "";
  res.forEach(
    (post) =>
      (postTemp += `<div class="col-md-3">
                    <div class="post bg-info p-2 rounded-3 shadow">
                        <h6>${post.title}</h6>
                        <h6>${post.body}</h6>
                    </div>
                </div>`)
  );
  document.getElementById("showPosts").innerHTML = postTemp;
}

const paginate_item = document.querySelectorAll(".paginate_item");

function handleActivePaginte() {
  paginate_item.forEach((paginate) =>
    paginate.addEventListener("click", (e) => {
      removeActiveClass();
      e.target.classList.add("active");
      paginate_num = e.target.textContent;
      console.log(paginate_num);
      getPostFromApi(paginate_num);
    })
  );
}
handleActivePaginte();

function removeActiveClass() {
  paginate_item.forEach((paginate) => {
    paginate.classList.remove("active");
  });
}
