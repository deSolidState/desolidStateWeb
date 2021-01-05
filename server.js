const http = require('http');
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const port = 6060;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

axios
  .get('https://www.mappedometer.com/?maproute=853562')
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

server.listen(port, () => {
  console.log(`Server running at PORT:${port}/`);
});
