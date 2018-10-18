const assert = require('assert');

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   SyntaxError
// );

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   TypeError
// );

assert.doesNotThrow(
  () => {
    throw new TypeError('Wrong value');
  },
  /Wrong value/,
  'Whoops',
);
