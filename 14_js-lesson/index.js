/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

// algo
// 1. create empty obj
// 2. itterate arrays
// 3. put key and value in the obj
/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

function buildObject(keysList, valuesList) {
  const res = {};
  return keysList.reduce(
    (acc, key, i) => ({ ...acc, [key]: valuesList[i] }),
    {}
  );
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

console.log(buildObject(['name', 'address', 'age'], ['Tom', 'Ukraine', 24]));
