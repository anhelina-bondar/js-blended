// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...params) {
  let sum = 0;
  let count = 0;

  for (let param of params) {
    // console.log(param);
    if (!isNaN(param)) {
      sum += param;
      count += 1;
    } else {
      return 'not a number';
    }
  }
  return sum / count;
}

console.log(caclculateAverage(2, 9, 44, 90));
