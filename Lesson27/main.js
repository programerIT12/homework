// Задачка 1

function digitize(n) {
  let arr = [...String(n)].map(Number);
  arr.reverse();
  return arr;
}

console.log(digitize(1234567));

// Задачка 2

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  }
  return false;
};

// Задачка 3

function fakeBin(x) {
  let res = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      res += "0";
    } else {
      res += "1";
    }
  }

  return res;
}

// Задачка 4

function rentalCarCost(d) {
  let sum = 0;
  let price = 40;
  let discound = 0;
  if (d >= 3) {
    discound = 20;
  }
  if (d >= 7) {
    discound = 50;
  }
  return (sum = price * d - discound);
}

// Задачка 5

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

console.log(removeExclamationMarks("Hello World!"));

// Задачка 6

function hoopCount(n) {
  switch (true) {
    case n < 10:
      return "Keep at it until you get it";

    case n >= 10:
      return "Great, now move on to tricks";
  }
}

console.log(hoopCount(10));

// Задачка 7

function updateLight(current) {
  let res;
  switch (current) {
    case "green":
      return (res = "yellow");

    case "yellow":
      return (res = "red");

    case "red":
      return (res = "green");
  }
}

console.log(updateLight("red"));

// Задачка 8

function setAlarm(employed, vacation) {
  if (employed === true && vacation !== true) {
    return true;
  } else {
    return false;
  }
}

console.log(setAlarm(true, false));

// Задачка 9

function basicOp(operation, value1, value2) {
  let result;
  if (operation === "+") {
    return (result = value1 + value2);
  }
  if (operation === "-") {
    return (result = value1 - value2);
  }
  if (operation === "*") {
    return (result = value1 * value2);
  }
  if (operation === "/") {
    return (result = value1 / value2);
  }
  return result;
}

console.log(basicOp("+", -4, 5));

// Задачка 10

function grow(x) {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    result.push(x[i]);
  }
  result.sort((a, b) => {
    return a - b;
  });
  let sum = 1;
  for (let i = 0; i < result.length; i++) {
    sum *= result[i];
  }
  return sum;
}
console.log(grow([1, 5, 3, 2, 62]));

// Задачка 11

function invert(array) {
  let invert = [];
  for (let i = 0; i < array.length; i++) {
    invert.push(array[i]);
  }

  return invert.map((num) => -num);
}
console.log(invert([1, 5, 2, 6, 3, 5]));

// Задачка 12

function findAverage(array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i] / array.length;
  }
  return res;
}
console.log(findAverage([5, 1, 63, 5]));

// Задачка 13

function paperwork(n, m) {
  let result = 0;
  if (n < 0 || m < 0) {
    return result;
  } else {
    result = n * m;
  }
  return result;
}

console.log(paperwork(0, 0));
