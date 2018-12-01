const assert = require('assert');

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });

assert.notDeepStrictEqual({ a: 1 }, { b: 1 });
