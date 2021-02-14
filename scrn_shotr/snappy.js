'use strict;';

let count = 0;
let frames = 500;

const mult = document.getElementById('mult');
mult.addEventListener('click', takeMultScreenShots);

function fourDigitStr(num) {
  let str = '';
  let numDigits = 4;
  // https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
  const len = numDigits - ((Math.log(num) * Math.LOG10E + 1) | 0); // num of digits for any positive integer

  for (let i = 0; i < len; i++) {
    str = str + '0';
  }
  str = str + num.toString();

  return str;
}

function getPaddingAmts() {
  let padStrArr = [];

  // creating random px amounts to add to padding to image
  for (let i = 0; i < 4; i++) {
    let amt = Math.floor(Math.random() * 4) + 1;
    // amt = i % 2 === 1 ? amt : amt - 2;
    // console.log(i, 'i', amt, 'amt');
    padStrArr.push(amt.toString() + 'px');
  }
  return padStrArr;
}

function takeMultScreenShots() {
  let intId = setInterval(clickyclicky, 200);

  function clickyclicky() {
    if (frames < 2) {
      clearInterval(intId);
      frames = 501;
    }
    console.log(frames, 'frames');
    html2canvas(document.getElementById('img-bucket'), {
      onrendered: function (canvas) {
        let padding = getPaddingAmts();

        // default is png which is not lossy
        // webp and jpg are lossy, so 2nd argument is the image quality
        // 0.92 is default
        // let time = Date.now();
        // let deltaQual = Math.sin(Date.now());
        let deltaQual = 0.3;
        // deltaQual = deltaQual < 0 ? Math.cos(time) : deltaQual;
        console.log('deltaQ', deltaQual);
        var img = canvas.toDataURL('image/jpeg', deltaQual);
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
      logging: true,
    });
    frames = frames - 1;
    count = count + 1;
    return false;
  }
  // }
}