// Задача 1 //

let number = +prompt("Напишите любое число: ", 0);

if (!isNaN(number)) {
  if (number % 2 === 0 && number !== 0 && number > 0) {
    console.log("Ваше число делиться на два");
  } else if (number % 2 !== 0 && number > 0) {
    console.log("Ваше число не делиться на два");
  } else if (number === 0) {
    console.log("Ваше число 0");
  } else if (number < 0) {
    console.log("Ваше число со знаком -");
  }
} else console.log("Пожалуйста впишите число)");

// Задача 2 //

//let age = +prompt("Напишите пожалуйста ваш возраст:", 0);

//let message =
// age === 0
//   ? `Ваш точный возраст точно ${age}?)`
//   : age > 0 && age < 18
//     ? "Ваша скидка 10%"
//     : age >= 18 && age <= 65
//       ? "Ваша скидка 20%"
//       : age > 65 && age <= 120
//         ? "Ваша скидка 30%"
//         : age < 0
//           ? "Пожалуйста введите ваш правильный возраст"
//           : "Вам слишком много лет для скидки)";

//console.log(message);

let age = +prompt("Напишите пожалуйста ваш возраст:", 0);
let discount;

switch (true) {
  case age == 0:
    discount = 0;
    console.log(`Ваш точный возраст точно ${discount}?)`);
    break;
  case age > 0 && age < 18:
    discount = 10;
    console.log(`Ваша скидка ${discount}%`);
    break;
  case age >= 18 && age <= 65:
    discount = 20;
    console.log(`Ваша скидка ${discount}%`);
    break;
  case age > 65 && age <= 120:
    discount = 30;
    console.log(`Ваша скидка ${discount}%`);
    break;
  case age < 0:
    console.log("Пожалуйста введите ваш правильный возраст");
    break;
  default:
    console.log("Вам слишком много лет для скидки)");
}

// Задача 3 //

let username = prompt("Ведите имя пользователя", "user");
let password = +prompt("Ведите пароль пользователя", "123456");

if ((username === "user" || username === "admin") && password === 123456) {
  alert(`Добро пожаловать ${username}`);
} else {
  alert("Произошла ошибка");
}

// Задача 4  //

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
    let kef;

    switch (delivery) {
      case "Стандарт":
        kef = 1;
        break;

      case "Экспресс":
        kef = 1.5;
        break;

      case "Премиум":
        kef = 2;
        break;

      default:
        alert("Что-то пошло не так");
    }
    let result = price * kef;
    alert(`Итоговая стоимость доставки ${result}$`);
  }
}
