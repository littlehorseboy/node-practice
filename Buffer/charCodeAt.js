const str = 'Node.js';

const buf = Buffer.allocUnsafe(str.length);

console.log(buf);

for (let i = 0; i < str.length; i += 1) {
  buf[i] = str.charCodeAt(i);
}

console.log(buf);

console.log(buf.toString('ascii'));
