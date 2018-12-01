const buf = Buffer.from([1, 2, 255]);

console.log(buf);

for (const b of buf) {
  console.log(b);
}
