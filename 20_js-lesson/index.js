/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

function printMessage(country, city) {
  console.log(this);

  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
  return 'return';
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// // option1
// const binded1 = printMessage.bind(user);
// binded1('Ukraine', 'Odesa');

// // option2
// const binded2 = printMessage.bind(user, 'UK');
// binded2();

// // option3
// const binded3 = printMessage.bind(user, 'UK', 'Liverpool');
// binded3();

// input: func, obj, args (optional)
// output: func
function myBind(func, context, ...args) {
  return function (...funcArgs) {
    return func.call(context, funcArgs, args);
  };
}

const binded1 = myBind(printMessage, user, 'UK', 'Liverpool');
binded1();

const binded2 = myBind(printMessage, user);
console.log(binded2('UK', 'Liverpool'));

const binded3 = printMessage.bind(user, 'UK');
binded3('London');

//

/* eslint-disable lines-around-directive */
/* eslint-disable strict */
// 'use strict';

// function printMessage(country, city) {
//   console.log(this);

//   console.log(
//     `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
//   );
// }

// const user = {
//   firstName: 'Andrey',
//   age: 111,
//   tempFunc: 'some secret data',
// };

// // option1
// const binded1 = printMessage.bind(user);
// binded1('Ukraine', 'Odesa');

// // option2
// const binded2 = printMessage.bind(user, 'UK');
// binded2();

// // option3
// const binded3 = printMessage.bind(user, 'UK', 'Liverpool');
// binded3();

// input: func, obj, args (optional)
// output: func
// export function bind(func, context, ...argn) {
//   return function (...funcArgs) {
//     // return func.call(context, argn. funcArgs);
//     return func.apply(context, [...argn, ...funcArgs])
//   };
// }

// const binded1 = bind(printMessage, user, 'UK', 'Liverpool');
// binded1();

// const binded2 = bind(printMessage, user);
// binded2('UK', 'Liverpool');

// const binded3 = bind(user, 'UK');
// binded3('London');
