const array = [77, 66, 13, 4];

// input: arr, callback
// output: arr

// callback
// input: el, index, arr
// output: boolean

// 1. iterate arr
// 2. apply callback for every el
// 3. if callback true - add to the new array
const filterArrayElements = (arr, callback) => {
  const result = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    if (callback(el, index, arr)) {
      result.push(el);
    }
  }
  return result;
};

console.log(filterArrayElements(array, (el) => el > 50));

console.log(filterArrayElements(array, (el) => el % 2 === 1));

console.log(filterArrayElements(array, (el, index) => index >= 2));
