const body = document.querySelector("body");

const burgerBtn = document.querySelector(".header__burger");

const burgerNav = document.querySelector(".header__menu");

const navLink = document.querySelectorAll(".header__menu-item");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger--open");
  burgerNav.classList.toggle("header__menu--open");
  body.classList.add("body__lock");
});

body.addEventListener("click", (event) => {
  if (!burgerNav.contains(event.target) && !burgerBtn.contains(event.target)) {
    burgerBtn.classList.remove("burger--open");
    burgerNav.classList.remove("header__menu--open");
    body.classList.remove("body__lock");
  }
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    burgerNav.classList.remove("header__menu--open");
    burgerBtn.classList.remove("burger--open");
    body.classList.remove("body__lock");
  }),
);
