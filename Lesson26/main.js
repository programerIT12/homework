"use strict";

// Задание 1

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2

function getUserAverageAge(users) {
  let AverageAge = 0;
  users.forEach(function (user) {
    AverageAge += user.age / users.length;
  });
  return AverageAge;
}

console.log(getUserAverageAge(users));

// Задание 3

function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }
  return admins;
}

console.log(getAllAdmins(users));
