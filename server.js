const http = require('http');
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const port = 6060;
let stuff = '';

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  axios
    .get('https://www.mappedometer.com/?maproute=853562')
    .then((res) => {
      // console.log(res.data);
      const dom = new JSDOM(res.data);
      const theMap = dom.window.document.querySelector('#map_canvas2');
      return theMap;
    })
    .then((map) => {
      res.setHeader('Content-Type', 'text/html');
      res.end(`<section>hello ${map.outerHTML}</section>`);
    })
    .catch((err) => {
      console.log(err);
    });
});

// axios
//   .get('https://www.mappedometer.com/?maproute=853562')
//   .then((res) => {
//     // console.log(res.data);
//     const dom = new JSDOM(res.data);
//     const theMap = dom.window.document.querySelector('#map_canvas2');
//     console.log(theMap);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

server.listen(port, () => {
  console.log(`Server running at PORT:${port}/`);
});
