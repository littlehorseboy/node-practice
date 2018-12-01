const store = [];

socket.on('readable', () => {
  const data = socket.read();

  const sb = Buffer.allocUnsafeSlow(10);

  data.copy(sb, 0, 0, 10);

  store.push(sb);
});
