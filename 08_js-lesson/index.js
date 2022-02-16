const numbersList = [1, 2, 3, 4, 5];

// input: num;
// output: num;

const numbersList4 = [1, 2, 3, 4, 5];

// console.log(numbersList4.filter());

// input: num, num, func;
// output: undefined;

// callback
// input: num
// output: undefined
function sum(from, to, printer) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  printer(result);
}

const num1 = 5;
const num2 = 10;

function printResult(res) {
  console.log('Result is: ' + res);
  // alert(res);
}

sum(num1, num2, printResult);

const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// input: num;
// output: boolean;

// test data
console.log(anotherNumbersList.filter((num) => num > 5));
