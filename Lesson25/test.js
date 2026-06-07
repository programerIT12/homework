// Задание 1

const person = {
  name: "Kyrylo",
  age: 20,
  weight: 90,
  isProgramer: true,
};

// Задание 2

const person1 = {};

function isEmpty(object) {
  for (let key in object) {
    return false;
  }
  return true;
}

console.log(isEmpty(person1));

// Задание 3

const task = {
  title: "Bob",
  description: "aaa",
  isCompleted: false,
};

function cloneAndModify(task, modifications = {}) {
  const newTask = { ...task, ...modifications };
  newTask.title = "John";
  newTask.description = "bbb";
  newTask.isCompleted = true;
  for (let key in newTask) {
    console.log(newTask[key]);
  }
  return newTask;
}

console.log(cloneAndModify(task));

// Задание 4

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  method3() {
    console.log("Метод 3 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (object) => {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};
console.log(callAllMethods(myObject));
