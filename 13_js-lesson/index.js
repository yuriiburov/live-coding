/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// test data
console.log(addPropertyV1({}, 'city', 'nocity'));

const addPropertyV2 = (obj, key, value) => Object.assign(obj, { [key]: value });

console.log(addPropertyV2({}, 'city', 'nocity'));

//

const addPropertyV3 = (obj, key, value) =>
  Object.assign({}, obj, { [key]: value });

console.log(addPropertyV3({}, 'city', 'nocity'));

const addPropertyV4 = (obj, key, value) => ({ ...obj, [key]: value });

console.log(addPropertyV4({}, 'city', 'nocity'));

// put your code here

// put your code here

// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
