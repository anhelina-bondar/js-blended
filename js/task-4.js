// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumNumbers(numbers) {
  const newArray = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    let res = numbers[i] + numbers[i + 1];
    newArray.push(res);
  }
  return newArray;
}

console.log(sumNumbers(someArr));
