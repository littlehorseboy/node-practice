const buf1 = Buffer.from('buffer');

const buf2 = Buffer.from(buf1);

console.log(buf1);

buf1[0] = 0x61;

console.log(buf1);

console.log(buf1.toString());

console.log(buf2.toString());

console.log('------');

const buf3 = Buffer.from('this is a tést');

const buf4 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf3.toString());

console.log(buf4.toString());

console.log(buf3.toString('ascii'));

console.log(buf3.toString('hex'));

console.log(buf3.toString('hex') === '7468697320697320612074c3a97374');

console.log('------');

const buf5 = Buffer.from(new String('this is a test'));

console.log(buf5);

console.log(Buffer.from('this is a test'));

class Foo {
  [Symbol.toPrimitive]() {
    return 'this is a test';
  }
}

const buf6 = Buffer.from(new Foo());

console.log(buf6);
