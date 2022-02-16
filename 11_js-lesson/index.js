// /**
//  *
//  * @param {array} arr
//  * @param {function} callback
//  * @returns array
//  */

// // input: el, index, arr
// // output: el

// const array = [1, 2, 3, 4, 5, 6, 7];

// const mapArrayElements = (arr, callback) => {
//   const entireArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const arrElement = arr[index];
//     entireArr.push(callback(arrElement, index, entireArr));
//   }
//   return entireArr;
// };

// console.log(mapArrayElements(array, (el) => el * el));
// console.log(mapArrayElements(array, (el, i, arr) => el / el));
// console.log(mapArrayElements(array, (el, i, arr) => el + el));
// console.log(array);

// input: el, index, arr
// output: el

const array = [1, 2, 3, 4, 5, 6, 7];

/**
 *
 * @param {array} arr
 * @param {function} callback
 * @returns newArray
 */

const mapArrayElements = (arr, callback) => {
  const entireArr = arr;
  const newArray = [];
  for (let index = 0; index < arr.length; index += 1) {
    const arrElement = arr[index];
    newArray.push(callback(arrElement, index, entireArr));
  }
  return newArray;
};

console.log(mapArrayElements(array, (el, i, arr) => el * el));
console.log(mapArrayElements(array, (el, i, arr) => el / el));
console.log(mapArrayElements(array, (el, i, arr) => el + el));
console.log(array);
