const http = require('http');
// const axios = require('axios');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
const puppeteer = require('puppeteer');
const path = require('path');

// const port = 6060;
let stuff = '';

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;

//   axios
//     .get('https://www.mappedometer.com/?maproute=853562')
//     .then((res) => {
//       // console.log(res.data);
//       const dom = new JSDOM(res.data);
//       const theMap = dom.window.document.querySelector('#map_canvas2');
//       return theMap;
//     })
//     .then((map) => {
//       res.setHeader('Content-Type', 'text/html');
//       res.end(`<section>hello ${map.outerHTML}</section>`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

let _browser;
let _page;
let _count = 1;
let _numFrames = 8;

let origPath = './orig/orig.png';

let htmlFrag = `
<section style="{background-color: green;, padding: 25px}">
  <img src="${origPath}" alt="original pic">
</section>
`;

// adding in puppeteer to take a screen shot.
// wrap puppeteer in a function to use setTimeout

// while (_count < 10) {

puppeteer
  .launch({
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 1034,
    },
  })
  .then((browser) => (_browser = browser))
  .then((browser) => (_page = browser.newPage()))
  .then(async (page) => {
    await page.goto('http://127.0.0.1:5500/index.html', {
      // await page.setContent(htmlFrag, {
      waitUntil: 'networkidle2',
    });

    // https://stackoverflow.com/questions/58040196/is-it-possible-to-pass-a-function-to-puppeteers-page-evaluate/58040978
    // evaluateHandle does not have access to the parent scope
    // page.exposeFunction to give access to functions
    // have to do this out of loop so it does not try to expose the function multiple times which will throw an error
    await page.exposeFunction('threeDigitStr', threeDigitStr);
    // await page.exposeFunction('getPaddingAmts', getPaddingAmts);
    await page.exposeFunction('path', path);
    await page.exposeFunction('pathJoin', path.join);
    console.log(__dirname);

    function threeDigitStr(num) {
      let str = '';
      let numDigits = 3;
      // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
      const len = numDigits - ((Math.log(num) * Math.LOG10E + 1) | 0); // num of digits for any positive integer

      for (let i = 0; i < len; i++) {
        str = str + '0';
      }
      str = str + num.toString();

      return str;
    }
    let something = '';
    for (i = 0; i < _numFrames; i++) {
      // https://stackoverflow.com/questions/46088351/how-can-i-pass-variable-into-an-evaluate-function/52012664
      // evaluateHandle does not have access to the parent scope
      // pass in the variables needed as parameters
      const handle = await page
        .evaluateHandle(
          (_count, __dirname, htmlFrag) => {
            // await page.setContent(htmlFrag, {
            //   waitUntil: 'networkidle2',
            // });
            function getPaddingAmts() {
              let padStrArr = [];

              // creating random px amounts to add to padding to image
              for (let i = 0; i < 4; i++) {
                padStrArr.push(
                  (Math.floor(Math.random() * 3) + 3).toString() + 'px'
                );
              }
              return padStrArr;
            }

            // `file:${path.join(__dirname, 'test.html')}`
            let padding = getPaddingAmts();
            const element = document.getElementById('bucket');
            let imgPath = `storage/example-${threeDigitStr(_count)}.png`;
            let imgFileName = `${threeDigitStr(_count)}`;
            element.setAttribute('src', `file:${pathJoin(__dirname, imgPath)}`);
            // element.setAttribute('src', `file:${path.join(__dirname, imgPath)}`);

            // code to prove that _count is working inside of evaluateHandle
            // const hello = document.createElement('p');
            // hello.innerHTML = _count;
            // hello.style.fontSize = '50px';
            // element.appendChild(hello);

            element.style.boxSizing = 'border-box';
            element.style.padding = `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`;
            element.style.border = '2px solid #DDDFE1';
            element.firstElementChild.style.border = '1px solid #DDDFE1';
            element.firstElementChild.style.borderRadius = '5px';

            element.style.backgroundColor = '#F0F2F5';

            return [element, imgPath, imgFileName];
          },
          _count,
          __dirname
        )
        .then((result) => {
          console.log('howdy');
          // console.log('result', result);
          return result;
        });

      const addStyle = await page.evaluate((e) => {
        // e[0].style.position = 'relative';
        // e[0].firstElementChild.style.position = 'relative';
        // e[0].firstElementChild.style.top = '100px';
        // e[0].firstElementChild.style.right = '30%';
        // e[0].style.padding = `${e[1][0]} ${e[1][1]} ${e[1][2]} ${e[1][3]}`;
        // e[0].style.width = '2000px';
        // e[0].style.backgroundColor = 'red';
        return e;
      }, handle);

      const theResolve = await addStyle[2];
      console.log('addStyle', theResolve);
      // something = addStyle[2];
      let htmlFrag = `
        <section style="{background-color: green;, padding: 25px}">
          <img src="${addStyle[2]}" alt="original pic">
        </section>
      `;

      let screenshot = await page.screenshot({
        path: `storage/example-${threeDigitStr(_count)}.png`,
        fullPage: true,
      });
      // console.log('screenshot', screenshot);

      // so this error message stops, seems to run more deliberatly
      // https://stackoverflow.com/questions/57583427/puppeteer-page-evaluate-randomly-fails-with-execution-context-was-destroyed
      await page.waitForNavigation();

      // htmlFrag = `
      //   <section style="{padding: ${padT} ${padR} ${padB} ${padL}; background-color: green; display: flex; justify-content: center; align-items: center;}">

      //     <img src="./example-${threeDigitStr(
      //       _count
      //     )}.png" alt="pic number${_count}">
      //   </section>
      //   `;
      _count += 1;
      console.log(_count);
    }
    console.log('after loop');
  })
  .then(() => _browser.close())
  .catch((err) => console.log(err));

// async function switchPic(path) {
//   axios
//     .get('http://127.0.0.1:5500/index.html')
//     .then((res) => {
//       const dom = new JSDOM(res.data);
//       const bucket = dom.window.document.querySelector('#bucket');
//       console.log('bucket', bucket);
//       console.log(dom.window.document.querySelector('#bucket').innerHTML);

//       let padR = Math.floor(Math.random() * 90) + 1;
//       let padL = Math.floor(Math.random() * 90) + 1;
//       let padT = Math.floor(Math.random() * 90) + 1;
//       let padB = Math.floor(Math.random() * 90) + 1;

//       bucket.innerHTML = `
//         <img src="${path}" alt="original pic" style="{padding: ${padT} ${padR} ${padB} ${padL}; background-color: green;}">
//         `;
//       console.log(bucket.innerHTML);
//       // return bucket;
//     })
//     .then((bucket) => {
//       // res.setHeader('Content-Type', 'text/html');
//       // res.end(`<img src="${path}" alt="pic"></img>`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// puppeteer
//   .launch()
//   .then((browser) => (_browser = browser))
//   .then((browser) => (_page = browser.newPage()))
//   .then((page) =>
//     page.goto('http://127.0.0.1:5500/index.html', {
//       waitUntil: 'networkidle2',
//     })
//   )
//   .then(() => _page)
//   .then((page) =>
//     page.screenshot({ path: `example-${threeDigitStr(_count)}.png` })
//   )
//   .then(() => {
//     console.log(_count);
//     _count += 1;
//     _browser.close();
//   })
//   .then(() => {
//     puppeteer
//       .launch()
//       .then((browser) => (_browser = browser))
//       .then((browser) => (_page = browser.newPage()))
//       .then((page) =>
//         page.goto('http://127.0.0.1:5500/index.html', {
//           waitUntil: 'networkidle2',
//         })
//       )
//       .then(() => _page)
//       .then((page) =>
//         page.screenshot({
//           path: `example-${threeDigitStr(_count)}.png`,
//           omitBackground: true,
//         })
//       )
//       .then(() => {
//         console.log(_count);
//         _count += 1;
//         _browser.close();
//       });
//   });

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

// server.listen(port, () => {
//   console.log(`Server running at PORT:${port}/`);
// });
