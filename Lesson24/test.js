// Задача 1

function calculateFinalPrice(num1, num2, num3) {
  let discountAmount = num1 * (num2 / 100);
  let priceAfterDiscount = num1 - discountAmount;
  let taxAmount = priceAfterDiscount * num3;
  let finalPrice = priceAfterDiscount + taxAmount;

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2

function CheckAccess(login, password) {
  if (login === "admin" && password === "123456") {
    return "Доступ Разрешен";
  } else {
    return "Доступ запрещен";
  }
}
console.log(CheckAccess("admin", "123456"));

// Задача 3

function getTimerOfDay(num) {
  return num >= 0 && num <= 5
    ? "Ночь"
    : num >= 6 && num <= 11
      ? "Утро"
      : num >= 12 && num <= 17
        ? "День"
        : num >= 18 && num <= 23
          ? "Вечер"
          : "Неверное значение";
}
console.log(getTimerOfDay(12));

// Задача 4

function findFirstEven(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return null;
}
console.log(findFirstEven(5, 10));
