const buyBtn = document.querySelectorAll(".brand__cards-btn--buy");

const card = document.querySelectorAll(".brand__cards");

const basketBtn = document.querySelector(".header__menu-basket");

const modal = document.querySelector(".modal-second");

const modalWindow = document.querySelector(".modal__window-basket");

const page = document.querySelector(".page");

const closeBtn = document.querySelector(".modal__close-basket");

const modalWindowBasket = document.querySelector(".modal__window-basket");

let basketArr = [];

buyBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".brand__cards");
    let product = {
      title: card
        .querySelector(".brand__cards-footer-title")
        .textContent.trim(),
      price: Number(card.querySelector(".price").textContent),
      img: card.querySelector(".brand__cards-img").src,
      id: card.dataset.id,
      amount: 1,
    };
    const existingProduct = basketArr.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      basketArr.push(product);
    }
  });
});

basketBtn.addEventListener("click", () => {
  modal.classList.remove("close");
  page.classList.add("body__lock");
  renderBasket();
});

modal.addEventListener("click", (event) => {
  if (!modalWindow.contains(event.target)) {
    modal.classList.add("close");
    page.classList.remove("body__lock");
  }
});

function renderBasket() {
  if (basketArr.length === 0) {
    modalWindowBasket.innerHTML = `<div class="modal__window-header">
          <button class="modal__close modal__close-basket">
            <svg class="modal__close-icon">
              <use class="modal__close-cross" href="./icons/cross.svg"></use>
            </svg>
          </button>
          <div class="modal__window-basket__empty">
      <svg width="60px" height="60px">
        <use class="modal__window-basket__empty-icon" href="./icons/sprite.svg#card"></use>
      </svg>
      <p class="modal__window-basket__empty-title">Корзина пустая</p>
      <p class="modal__window-basket__empty-text">Добавьте товары, чтобы оформить заказ</p>
      <a class="modal__window-basket__empty-btn" href="#new-arrivals">В каталог</a>
    </div>`;

    const empty = modalWindowBasket.querySelector(
      ".modal__window-basket__empty",
    );
    const closeBtnBasketCross = modalWindowBasket.querySelector(
      ".modal__close-basket",
    );

    const closeBtnBasket = modalWindowBasket.querySelector(
      ".modal__window-basket__empty-btn",
    );
    closeBtnBasket.addEventListener("click", () => {
      modal.classList.add("close");
      page.classList.remove("body__lock");
    });

    closeBtnBasketCross.addEventListener("click", () => {
      modal.classList.add("close");
      page.classList.remove("body__lock");
    });

    empty.classList.add("empty__basket");
    return;
  }

  modalWindowBasket.innerHTML = `<div class="modal__window-basket--wrapper modal__window-basket--full">
          <div class="modal__window-basket--header">
            <p class="modal__window-basket-title">КОРЗИНА</p>
            <svg class="modal__close-icon">
              <use class="modal__close-cross" href="./icons/cross.svg"></use>
            </svg>
          </div>
          <div class="modal__window-basket--list">
            <div class="modal__window-basket--card">
              <div class="modal__window-basket-card--wrapper">
                <div class="modal__window-card--img">
                  <img
                    class="modal__window-card--pic"
                    src="/img/brand__card-img7.png"
                    alt=""
                  />
                </div>
                <div class="modal__window-card--title">
                  <span>Свободные бермуды</span>
                  <span>1 шт</span>
                </div>
              </div>
              <div class="modal__window-card--price"><span>₽4000</span></div>
            </div>
          </div>
        </div>`;
}
