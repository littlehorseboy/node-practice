const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(14, 1);

const buf3 = Buffer.alloc(18, 255);

console.log(buf1);

console.log(buf2);

console.log(buf3);

const totalLength = buf1.length + buf2.length + buf3.length;

console.log(totalLength);

const bufA = Buffer.concat([buf1, buf2, buf3], totalLength);

console.log(bufA);

console.log(bufA.length);
