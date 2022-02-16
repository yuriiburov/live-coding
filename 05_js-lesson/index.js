/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

function getSenseOfLife() {
  return 42;
}

console.log(getSenseOfLife());

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

const getSquared = (num) => num * num;

console.log(getSquared(0));

/* ф-ция sum должна принимать два числа и вернуть их сумму */

const sum = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

console.log(sum(6, -9));

/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

const printMessage = function (num) {
  console.log(`I am ${num} years old`);
};

console.log(printMessage(6));

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */

const mult = (num1, num2) => num1 * num2;

console.log(mult(-6.07, 1));

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

const square = (num) => num * num;

console.log(square(2));

/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */

const getMagicNumber = () => 17;

console.log(getMagicNumber());
