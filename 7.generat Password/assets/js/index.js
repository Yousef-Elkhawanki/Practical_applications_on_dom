const generate__btn = document.querySelector(".generate__btn button");
const random_input = document.querySelector(".random_input input");
const copy = document.querySelector(".random_input i");
const clipboard = document.querySelector(".clipboard ");

const charcters = "ABCDEFGHIJKLMNOIZPQV";
const special_characters = "!@#$%^&*()_+(/|";
const numbers = "0123456789";
const allChar = charcters + special_characters + numbers;
const length_password = 12;
generate__btn.addEventListener("click", () => {
  let password = "";
  while (length_password > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  random_input.value = password;
});
copy.addEventListener("click", () => {
  let random_password = random_input.value;
  random_input.select();
  navigator.clipboard.writeText(random_password);
  setTimeout(() => {
    clipboard.style.bottom = "2rem";
    setTimeout(() => {
      clipboard.style.bottom = "-100%";
    }, 2500);
  });
});
