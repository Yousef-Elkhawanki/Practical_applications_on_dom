const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;
if (index == 0) {
  prevBtn.setAttribute("disabled", "disabled");
}
const handleAfterClassNext = (type) => {
  const style = document.createElement("style");
  style.innerHTML = `
    .progress:nth-of-type(${type})::after {
      background:#6499E9;
      color:#fff
    }
  `;
  document.head.appendChild(style);
};
const handleAfterClassPrev = (type) => {
  const style = document.createElement("style");
  style.innerHTML = `
    .progress:nth-of-type(${type})::after {
      background:#ececec;
      color:#000
    }
  `;
  document.head.appendChild(style);
};

nextBtn.addEventListener("click", () => {
  switch (index) {
    case 0: {
      handleAfterClassNext(1);
      document.querySelector(".progress:nth-of-type(1)").style.width =
        "calc(100% / 3)";
      index++;
      prevBtn.removeAttribute("disabled");
      break;
    }
    case 1: {
      handleAfterClassNext(2);
      document.querySelector(".progress:nth-of-type(2)").style.width =
        "calc(100% / 3)";

      index++;
      break;
    }
    case 2: {
      document.querySelector(".progress:nth-of-type(3)").style.width =
        "calc(100% / 3)";
      nextBtn.textContent = "Finished";
      index++;
      console.log(index);
      break;
    }
    case 3: {
      Swal.fire("Good job!", "You clicked the button!", "success");
    }
  }
});
prevBtn.addEventListener("click", () => {
  switch (index) {
    case 3: {
      nextBtn.textContent = "Next";
      document.querySelector(".progress:nth-of-type(3)").style.width = "0";
      index--;
      console.log(index);
      break;
    }
    case 2: {
      handleAfterClassPrev(2);
      document.querySelector(".progress:nth-of-type(2)").style.width = "0";
      index--;
      console.log(index);
      break;
    }
    case 1: {
      handleAfterClassPrev(1);
      document.querySelector(".progress:nth-of-type(1)").style.width = "0";
      index--;
      console.log(index);
      break;
    }
  }
});
