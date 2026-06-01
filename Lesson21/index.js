const firstName = "Kyrylo";
const lastName = "Pelekhatyi";
const fullName = firstName + " " + lastName;
const isStudent = Boolean(1);

let age = 20;

let currentYear = 2026;

let birthYear = currentYear - age;

console.log(
  "Меня зовут " +
    fullName +
    ", мне " +
    age +
    " лет. Я ученик курса: " +
    isStudent,
);

console.log(
  `Меня зовут ${fullName}, мне ${age} лет. Я ученик курса: ${isStudent}`,
);

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean("");
let result = a + b + c + d + e;
console.log(result);
