// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
let total = 0;
function getNumbers(min, max) {
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
  console.log(total);
}

getNumbers(1, 10);
console.log(total);
