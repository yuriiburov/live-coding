// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate numbers from 2 to num => i
// 2. iterate from 2 to i ==> number
// 3. если остаток от деления i на number ровно 0 - то не простое
// 4. если на все числа деление с остатком - то число простое,
// вывести в консоль

// check 1 - 9
// 2 -> true
// 3 ( 3 / 2, 3 / 3) -> true
// 4 ( 4 / 2 (!), 4 / 3, 4 / 4 ) -> false

// input: number;
// output: boolean;
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

// input: num
// output: undefined
const getPrimes = (num) => {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

getPrimes(12);
