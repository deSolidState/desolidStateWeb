'use strict';

let count = 0;
let numFrames = 500;
let deltaQual = 0.3;
let deltaPad = 1;
let rShiftFactor1 = 17;
let rShiftFactor2 = 18;
let rShiftFactor3 = 19;
let iterFactor = 1;

// // for dithering tests
// var opts = {
//   colors: 8 /*  desired palette size  */,
//   dithering: true /*  whether to use dithering or not  */,
//   pixels: pixels /*  source pixels in RGBA 32 bits  */,
//   width: _width,
//   height: _height,
// };

// let bestQuality = false;
// var quant = bestQuality ? new PnnLABQuant(opts) : new PnnQuant(opts);

// /*  reduce image  */
// var img8 = quant.quantizeImage(); /*  Uint32Array  */
// var pal8 = quant.getPalette(); /*  RGBA 32 bits of ArrayBuffer  */
// var indexedPixels = quant.getIndexedPixels(); /*  colors > 256 ? Uint16Array : Uint8Array  */

// const canvas = document.getElementById('img-canvas');
// const ctx = canvas.getContext('2d');

// grab elements on page and add listeners
const quality = document.getElementById('quality');
quality.addEventListener('change', updateNum);

const padFactor = document.getElementById('padding');
padFactor.addEventListener('change', updateNum);

const frames = document.getElementById('frames');
frames.addEventListener('change', updateNum);

const redShift1 = document.getElementById('red-shift-1');
redShift1.addEventListener('change', updateNum);

const redShift2 = document.getElementById('red-shift-2');
redShift2.addEventListener('change', updateNum);

const redShift3 = document.getElementById('red-shift-3');
redShift3.addEventListener('change', updateNum);

const iFactor = document.getElementById('i-factor');
iFactor.addEventListener('change', updateNum);

const mult = document.getElementById('mult');
mult.addEventListener('click', takeMultScreenShots);

const imgLoad = document.getElementById('img-load');
imgLoad.addEventListener('change', uploadImg, false);

const sides = document.querySelector('#sides');
sides.addEventListener('change', changeBorder, false);

function updateNum(e) {
  let numSpot = e.target.previousSibling.previousSibling;

  let text = numSpot.innerHTML;

  let numStr = text.slice(-4);
  let beginStr = text.slice(0, -4);

  numSpot.innerHTML = beginStr + fourDigitStr(e.target.value);

  switch (e.target.name) {
    case 'quality':
      deltaQual = e.target.value / 100;
      break;
    case 'padding':
      deltaPad = Math.floor(e.target.value / 2);
      break;
    case 'frames':
      numFrames = e.target.value;
      break;
    case 'red-shift-1':
      rShiftFactor1 = e.target.value;
      break;
    case 'red-shift-2':
      rShiftFactor2 = e.target.value;
      break;
    case 'red-shift-3':
      rShiftFactor3 = e.target.value;
      break;
    case 'i-factor':
      iterFactor = e.target.value / 4;
      break;
    default:
      console.log('you have a problem with the code');
  }
}

// help from this stack overflow: https://stackoverflow.com/questions/10906734/how-to-upload-image-into-html5-canvas/10906961
function uploadImg(e) {
  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      const resultImage = document.querySelector('#result-image');
      resultImage.setAttribute('src', event.target.result);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}

function changeBorder(e) {
  e.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.style.borderStyle =
    e.target.value;
}

function fourDigitStr(num) {
  let str = '';
  let numDigits = 4;
  // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
  let len = numDigits - ((Math.log(num) * Math.LOG10E + 1) | 0); // num of digits for any positive integer
  len = len === 4 ? 3 : len;

  for (let i = 0; i < len; i++) {
    str = str + '0';
  }

  str = str + num.toString();

  return str;
}

function getPaddingAmts(factor) {
  let padStrArr = [];

  // creating random px amounts to add to padding to image
  for (let i = 0; i < 4; i++) {
    let amt = factor * Math.floor(Math.random() * 4) + 1;
    // amt = i % 2 === 1 ? amt : amt - 2;
    padStrArr.push(amt.toString() + 'px');
  }
  return padStrArr;
}

function takeMultScreenShots() {
  let intId = setInterval(clickyclicky, 200);

  function clickyclicky() {
    if (numFrames < 2) {
      clearInterval(intId);
      numFrames = parseInt(
        frames.previousSibling.previousSibling.innerHTML.slice(-4),
        10
      );
    }
    html2canvas(document.getElementById('img-bucket'), {
      onrendered: function (canvas) {
        let padding = getPaddingAmts(deltaPad);
        var context = canvas.getContext('2d');

        // default is png which is not lossy
        // webp and jpg are lossy, so 2nd argument is the image quality
        // 0.92 is default
        // let time = Date.now();
        // let deltaQual = Math.sin(Date.now());
        // let deltaQual = 0.3;
        // deltaQual = deltaQual < 0 ? Math.cos(time) : deltaQual;
        // console.log('deltaQ', deltaQual);

        // hacky way to toggle between red & green colors
        shiftColor(context, canvas);
        var img = canvas.toDataURL('image/jpeg', deltaQual);

        const resultImage = document.querySelector('#result-image');
        resultImage.setAttribute('src', img);
        resultImage.parentElement.style.padding = `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`;

        // canvas.toBlob(function (blob) {
        //   saveAs(blob, `screenshot${threeDigitStr(count)}.png`);
        // });
      },
      allowTaint: true,
      imageTimeout: 0,
      useCORS: true,
      // logging: true,
    });
    numFrames = numFrames - 1;
    count = count + 1;
    return false;
  }
  // }
}

// function changeImg(png) {
//   let begin = 'data:image/jpeg;base64,';

//   let rtnImg = png.slice(23);
//   console.log('before', rtnImg.length);
//   let rtnImgTop = png.slice(rtnImg.length / 1.5);
//   console.log('top', rtnImgTop.length);
//   let sliceAmt = (-1 * rtnImg.length) / 2.5;
//   console.log('spiced', sliceAmt);
//   let rtnImgBottom = png.slice(-1 * (rtnImg.length / 2.5));
//   console.log('bottom', rtnImgBottom.length);

//   rtnImgTop = png.slice(rtnImgTop.length / 2);
//   rtnImgBottom = png.slice(-1 * (rtnImgBottom.length / 2));

//   rtnImg = begin + rtnImgTop + rtnImgBottom;
//   console.log('after', rtnImg.length);
//   return rtnImg;
// }

// example of a function that allows us to pixel sort!
// https://codepo8.github.io/canvas-images-and-pixels/
function shiftColor(context, canvas) {
  let iteration = iterFactor * 4;
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = pixels.data;
  const length = data.length;
  // for (let i = 0; i < length; i += iteration) {
  //   let firstAvg = (data[i] + data[i + 1] + data[i + 2]) / 3;
  //   let secondAvg = (data[i + 4] + data[i + 5] + data[i + 6]) / 3;

  //   if (i % 3 === 1) {
  //     data[i] = data[i + 4];
  //     data[i + 1] = data[i + 5];
  //     data[i + 2] = data[i + 6];
  //   }

  //   // if (i % 3 === 0) {
  //   //   data[i * rShiftFactor1] = 'ff';
  //   //   // parseInt(data[i * rShiftFactor1], 16) <= 16 || 16;
  //   //   data[i * rShiftFactor2] = 'ff';
  //   //   // parseInt(data[i / rShiftFactor1] <= 16)
  //   //   //   ? data[i * rShiftFactor1]
  //   //   //   : 16;
  //   // } else {
  //   if (i % 3 <= 1 || i % 3 <= 0) {
  //     data[i * rShiftFactor1] = firstAvg;
  //     data[i * rShiftFactor2] = (firstAvg + secondAvg) / 2;
  //     data[i * rShiftFactor3] = secondAvg;
  //   }

  for (let i = 0; i < length; i += iteration) {
    let firstAvg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    let secondAvg = (data[i + 4] + data[i + 5] + data[i + 6]) / 3;

    if (firstAvg > secondAvg) {
      let stash1 = data[i];
      let stash2 = data[i + 1];
      let stash3 = data[i + 2];

      data[i] = data[i + 4];
      data[i + 1] = data[i + 5];
      data[i + 2] = data[i + 6];

      data[i + 24] = stash1;
      data[i + 30] = stash2;
      data[i + 40] = stash3;

      // let fact1 = i + rShiftFactor1;
      // let fact2 = i + rShiftFactor2;
      // let fact3 = i + rShiftFactor3;
      data[i + rShiftFactor1] = stash1;
      data[i * 100 - rShiftFactor2] = stash2;
      data[i + rShiftFactor3] = stash3;
      // data[fact1] = stash1;
      // data[fact2] = stash2;
      // data[fact3] = stash3;
    }
  }

  // }

  // data[i * rShiftFactor2] = parseInt(data[i * rShiftFactor2] <= 16)
  // data[i * rShiftFactor2] = parseInt(data[i * rShiftFactor2] <= 16)
  // data[i * rShiftFactor2] = parseInt(data[i * rShiftFactor2] <= 16)
  //   ? data[i * rShiftFactor2]
  //   : 16;
  // data[i * rShiftFactor3] = data[i * rShiftFactor3] <= 16 || 16;
  // }
  // } else {

  context.putImageData(pixels, 0, 0);
  canvas.style.display = '';
}
