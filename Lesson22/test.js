let weight = +prompt("Ведите вес посылки в килограммах: ", "0");

if (weight <= 0) {
  alert("Некорректный вес посылки");
} else {
  let delivery = prompt("Ведите вид доставки", "Премиум, Экспресс, Стандарт");

  if (
    delivery !== "Премиум" &&
    delivery !== "Экспресс" &&
    delivery !== "Стандарт"
  ) {
    alert("Неверный тип доставки");
  } else {
    let price;

    if (weight <= 1) {
      price = 5;
    } else if (weight > 1 && weight <= 5) {
      price = 10;
    } else {
      price = 15;
    }
    console.log(`Базовая цена на данный момент ${price}$`);
  }
}
