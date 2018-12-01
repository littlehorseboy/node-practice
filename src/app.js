const http= require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  
  request.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.log(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
  });

  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/plain');
  // response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
