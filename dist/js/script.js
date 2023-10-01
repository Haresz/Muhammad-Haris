const navMenu = document.querySelector(".menu-selector");
const nav = document.querySelector("nav");
console.log("ini lis class", navMenu.classList);
nav.addEventListener("click", function () {
  // navMenu.classList.remove("menu");
  navMenu.classList.toggle("menu");
});
