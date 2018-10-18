const assert = require('assert');

assert.deepStrictEqual({ a: 1 }, { a: 1 });

const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);

// assert.deepStrictEqual(object, fakeDate);

// assert.deepStrictEqual(date, fakeDate);

// assert.deepStrictEqual(NaN, NaN);

assert.deepStrictEqual(new Number(1), new Number(1));

console.log('end');

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(`symbol1 === symbol1 is ${symbol1 === symbol1}`);

assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });

console.log('end2');

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap([[{}, {}]]);
const weakMap3 = new WeakMap();
weakMap3.unequal = true;

assert.deepStrictEqual(weakMap1, weakMap2);

// assert.deepStrictEqual(weakMap1, weakMap3);

console.log('end3');
