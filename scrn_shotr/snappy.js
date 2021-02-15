'use strict;';

let count = 0;
let numFrames = 500;
let deltaQual = 0.3;
let deltaPad = 1;

// grab elements on page and add listeners
const quality = document.getElementById('quality');
quality.addEventListener('change', updateNum);

const padFactor = document.getElementById('padding');
padFactor.addEventListener('change', updateNum);

const frames = document.getElementById('frames');
frames.addEventListener('change', updateNum);

const mult = document.getElementById('mult');
mult.addEventListener('click', takeMultScreenShots);

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
      console.log(frames);
      break;
    default:
      console.log('you have a problem with the code');
  }
}

function fourDigitStr(num) {
  let str = '';
  let numDigits = 4;
  // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
  let len = numDigits - ((Math.log(num) * Math.LOG10E + 1) | 0); // num of digits for any positive integer
  len = len === 4 ? 3 : len;
  console.log('len', len);

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
    // console.log(i, 'i', amt, 'amt');
    padStrArr.push(amt.toString() + 'px');
  }
  console.log(padStrArr);
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
      // numFrames = 501;
    }
    console.log(numFrames, 'numFrames');
    html2canvas(document.getElementById('img-bucket'), {
      onrendered: function (canvas) {
        let padding = getPaddingAmts(deltaPad);

        // default is png which is not lossy
        // webp and jpg are lossy, so 2nd argument is the image quality
        // 0.92 is default
        // let time = Date.now();
        // let deltaQual = Math.sin(Date.now());
        // let deltaQual = 0.3;
        // deltaQual = deltaQual < 0 ? Math.cos(time) : deltaQual;
        console.log('deltaQ', deltaQual);
        var img = canvas.toDataURL('image/jpeg', deltaQual);
        console.log(padding);
        $('#result-image')
          .attr('src', img)
          .css(
            'padding',
            `${padding[0]} ${padding[1]} ${padding[2]} ${padding[3]}`
          )
          .show();

        console.log('3digits', fourDigitStr(count));

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
