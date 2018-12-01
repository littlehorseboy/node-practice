const arr = new Uint16Array(2);

console.log(arr);

arr[0] = 5000;

console.log(arr);

arr[1] = 4000;

console.log(arr);

const buf1 = Buffer.from(arr);

console.log(buf1);

const buf2 = Buffer.from(arr.buffer);

console.log(buf2);

arr[1] = 6000;

console.log(buf1);

console.log(buf2);

console.log('------');

const arr20 = new Uint16Array(20);

const buf20 = Buffer.from(arr20.buffer, 0, 16);

console.log(buf20);

console.log(buf20.length);
