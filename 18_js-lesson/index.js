const createLogger = () => {
  const messages = [];

  // input: str
  // output: undefined
  const warn = (message) => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'warn',
    });
  };

  const error = (message) => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'error',
    });
  };

  const log = (message) => {
    messages.push({
      message,
      dateTime: new Date(),
      type: 'log',
    });
  };

  // input: string
  // output: array of obj
  const getRecords = (str) => {
    const res = str ? messages.filter((elem) => elem.type === str) : messages;
    return res.sort((a, b) => b.dateTime - a.dateTime);
  };

  return { warn, log, error, getRecords };
};

// export { createLogger };

// test data

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');

logger.error('Unexpected error on the site');

logger.log('User logged out');

console.log(logger.getRecords());
console.log(logger.getRecords('log'));

// console.log(logger.getRecords('error'));
// console.log(logger.getRecords('warn'));
// console.log(logger.getRecords('warnc'));
// console.log(logger.getRecords('log'));
// console.log(logger.getRecords('log'));

//

// function makeCounter() {
//   let count = 0;

//   return () => {
//     return count++;
//   };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// //
// /* eslint-disable */

// console.log(message);
// var message = 'Hoisting is here!';

// // hoisting var example 2
// var a = 55;
// console.log(a);

// if (a) {
//   var a = 1;

//   console.log(a);
// }

// console.log(a);

// //

// var a = 77;
// console.log(a);

// function print() {
//   var a = 2;
//   console.log(a);
// }
// print();

// console.log(a);
