// input: obj, obj
// output: boolean

// algo

// compare length, if not equal => false
// itterate obj1 keys
// compare if(value1 != value2) => false

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  return keys1.length === keys2.length
    ? keys1.every((el) => obj1[el] === obj2[el])
    : false;
}
// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  age: 17,
  name: 'BOB',
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
