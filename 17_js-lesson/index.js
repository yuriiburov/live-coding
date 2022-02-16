/* eslint-disable */

// lex env
// {
//   environmentRecord: {
//     message: 'Test';
//     weight: 55
//     run: {
//       console.log('run')
//     }
//     createMessenger: {
//       ...
//     }
//   }
//   'outerLexicalEnvironment': null
// }

// createMessenger1 lex env
// {
//   environmentRecord: {
//     message: hello
//     sender
//     sendMessage
//
//   }
//   'outerLexicalEnvironment': global
// }

// createMessenger2 lex env
// {
//   environmentRecord: {
//     message: just learn it!
//     sender
//     sendMessage
//
//   }
//   'outerLexicalEnvironment': global
// }

// set message lex env
// {
//   environmentRecord: {
//     text: hello
//   }
//   'outerLexicalEnvironment': createMessenger1
// }

// printer lex env
// {
//   environmentRecord: {
//     ...
//   }
//   'outerLexicalEnvironment': createMessenger1
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  function printer() {
    console.log(weight);
  }

  return {
    sendMessage,
    setMessage,
    setSender,
    printer,
  };
}

const messanger = createMessenger();

messanger.printer();
run();
