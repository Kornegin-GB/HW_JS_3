//Задание 1
const cubing = (num) => num ** 3;
console.log(cubing(2) + cubing(3));

//Задание 2

const tax = (salary) => salary - (salary * 13 / 100);

let salaryUser = Number(prompt('Введите вашу зароботную плату'));

if (isNaN(salaryUser)) {
   console.log('Значение задано не верно');
} else {
   console.log(`Размер заработной платы за вычетом налогов равен ${tax(salaryUser)}`);
}

// Задание 3
let number1 = Number(prompt('Введите число 1'));
let number2 = Number(prompt('Введите число 2'));
let number3 = Number(prompt('Введите число 3'));

const maxNumber = (num1, num2, num3) => Math.max(num1, num2, num3);
console.log(maxNumber(number1, number2, number3));

//Задание 4
const addition = (num1, num2) => num1 + num2;
const difference = (num1, num2) => {
   if (num1 === num2) return 0;
   return (num1 > num2) ? num1 - num2 : num2 - num1;
}
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

console.log(addition(2, 7));
console.log(difference(2, 7));
console.log(difference(7, 2));
console.log(difference(7, 7));
console.log(multiplication(2, 7));
console.log(division(10, 5));