// input: obj
// iutput:  array

// ALGO
// 1. get keys & values
// 2. add id to every value (map)
// 3. sort

// NOT BAD
// const getCustomersList = (obj) => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

// VERY GOOD
const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);

const consumers = {
  'consumer-id-1': {
    name: 'William',
    age: 54,
  },
  'consumer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
console.log(Object.entries(consumers));
console.log(getCustomersList(consumers));
