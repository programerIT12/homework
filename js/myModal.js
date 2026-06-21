const buyBtn = document.querySelector(".hero__btn-buy");

const closeBtn = document.querySelector(".modal__close");

const modal = document.querySelector(".modal");

const modalWindow = document.querySelector(".modal__window");

const page = document.querySelector(".page");

buyBtn.addEventListener("click", () => {
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
