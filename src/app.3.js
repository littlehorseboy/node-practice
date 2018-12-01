const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'PUT' && url === '/echo') {
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

      response.end(`PUT: ${body}`);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
