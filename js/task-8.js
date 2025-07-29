// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   } else {
//     return 'Not a number!';
//   }
// }
// console.log(min(3, 5));

function min(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) {
      console.log(a);
    } else {
      console.log(b);
    }
  } else {
    console.log('Not a number!');
  }
}
min(3, 5);
