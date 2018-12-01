const assert = require('assert');

assert.ifError();

assert.ifError(null);

assert.ifError(0);

// assert.ifError('error');

// assert.ifError(new Error());

let err;

(function errorFrame() {
  err = new Error('test error');
})();

(function ifErrorFreame() {
  assert.ifError(err);
})();

console.log('end');
