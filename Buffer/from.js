const buf1 = Buffer.from([1, 2, 255]);

console.log(buf1);

const buf2 = Buffer.from('tést');

console.log(buf2);

const buf3 = Buffer.from('tést', 'latin1');

console.log(buf3);

const buf4 = Buffer.from('hello world', 'ascii');

console.log('--- buf4 ---');

console.log(buf4);

console.log(buf4.toString('hex'));

console.log(buf4.toString('base64'));

console.log('--- fhqwhgads ---');

console.log(Buffer.from('fhqwhgads', 'ascii'));

console.log(Buffer.from('fhqwhgads', 'utf16le'));

console.log(Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]));

const ab = new ArrayBuffer(10);

console.log(Buffer.from(ab, 8, 2));
