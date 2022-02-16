const numbersList = [5, 15, 8, 10, 5, -4, 50, 220];

// input: function
// output: array

// bad version

// const mapRes = numbersList.map((el) => {
//   const res = el * el;
//   return res;
// });

// ggood version

console.log(numbersList.map((el) => el * el));

// forEach

// input: function
// output: array

// callback:
// input: el, index (optional), array (optional)
// output: undefined

// console.log(
//   numbersList.forEach((el) => {
//     if (el > 100) {
//       console.log(el);
//     }
//     return el;
//   })
// );

// find

// input: el, i(o), arr(o)
// output: boolean

// BAD
// console.log(
//   numbersList.find((el) => {
//     if (el % 2 === 0) {
//       return true;
//     }
//     return false;
//   })
// );

// wrong method
// console.log(numbersList.filter((el) => el % 2 === 0)[0]);

// good method
console.log(numbersList.find((el) => el % 2 === 0));

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

console.log(transactions.reduce((acc, el) => acc + el));
