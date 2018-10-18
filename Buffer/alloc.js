const buf1 = Buffer.alloc(10);

console.log(buf1);

const buf2 = Buffer.alloc(10, 1);

console.log(buf2);

const buf3 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');

console.log(buf3);
