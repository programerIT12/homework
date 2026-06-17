const buyBtn = document.querySelectorAll(".brand__cards-btn--buy");

const card = document.querySelectorAll(".brand__cards");

const basketBtn = document.querySelector(".header__menu-basket");

const modal = document.querySelector(".modal-second");

const modalWindow = document.querySelector(".modal__window-basket");

const page = document.querySelector(".page");

const closeBtn = document.querySelector(".modal__close-basket");

buyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".brand__cards");
    console.log(card);
  });
});

basketBtn.addEventListener("click", () => {
  modal.classList.remove("close");
  page.classList.add("body__lock");
});

modal.addEventListener("click", (event) => {
  if (!modalWindow.contains(event.target)) {
    modal.classList.add("close");
    page.classList.remove("body__lock");
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("close");
  page.classList.remove("body__lock");
});
