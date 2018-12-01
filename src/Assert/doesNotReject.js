const assert = require('assert');

// node v10.0.0

(async () => {
  await assert.doesNotReject(
    async () => {
      throw new TypeError('Wrong value');
    }, SyntaxError
  );
})();

assert.doesNotReject(Promise.reject(new TypeError('Wrong value')))
  .then(() => {

  });
