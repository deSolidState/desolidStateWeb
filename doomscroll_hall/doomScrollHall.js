'use strict';

let picArr0 = [
  '2020-04-16-am10.20.07.webp',
  '2020-04-16-am11.16.28.webp',
  '2020-04-16-am9.43.12.webp',
  '2020-04-16-pm12.20.48.webp',
  '2020-04-16-pm8.37.35.webp',
  '2020-04-19-pm11.08.21.webp',
  '2020-04-20-am1.24.08.webp',
  '2020-04-20-am7.00.35.webp',
  '2020-04-20-pm3.11.56.webp',
  '2020-04-21-am11.28.19.webp',
  '2020-04-21-am7.26.20.webp',
  '2020-04-21-pm3.56.56.webp',
  '2020-04-21-pm9.47.25.webp',
  '2020-04-22-am9.52.40.webp',
  '2020-04-22-pm12.39.00.webp',
  '2020-04-22-pm4.47.50.webp',
  '2020-04-22-pm9.05.08.webp',
  '2020-04-23-am11.47.12.webp',
  '2020-04-23-am6.24.02.webp',
  '2020-04-23-pm9.37.22.webp',
  '2020-04-24-am6.43.13.webp',
  '2020-04-24-pm3.28.44.webp',
  '2020-04-24-pm9.19.00.webp',
  '2020-04-25-am6.40.02.webp',
  '2020-04-25-pm3.56.19.webp',
  '2020-04-26-am5.35.36.webp',
  '2020-04-26-pm5.14.21.webp',
  '2020-04-27-am6.56.02.webp',
  '2020-04-27-pm6.59.54.webp',
  '2020-04-28-am6.56.05.webp',
  '2020-04-29-am8.46.31.webp',
  '2020-04-30-am5.26.34.webp',
  '2020-04-30-pm5.22.52.webp',
  '2020-05-01-am8.45.39.webp',
  '2020-05-02-am1.12.22.webp',
  '2020-05-04-pm3.28.13.webp',
  '2020-05-05-am6.05.47.webp',
  '2020-05-06-am5.31.03.webp',
  '2020-05-07-am7.47.15.webp',
  '2020-05-07-pm2.39.43.webp',
  '2020-05-08-am8.00.44.webp',
  '2020-05-10-pm3.46.28.webp',
  '2020-05-11-am6.22.11.webp',
  '2020-05-11-pm9.48.41.webp',
  '2020-05-12-am7.57.36.webp',
  '2020-05-13-am8.27.52.webp',
  '2020-05-14-am6.47.58.webp',
  '2020-05-16-am7.27.21.webp',
  '2020-05-17-am7.24.21.webp',
  '2020-05-18-am7.40.23.webp',
  '2020-05-18-pm4.50.30.webp',
  '2020-05-20-am11.04.21.webp',
  '2020-05-20-am7.46.59.webp',
  '2020-05-21-am7.28.09.webp',
  '2020-05-23-am6.13.34.webp',
  '2020-05-28-am7.34.21.webp',
  '2020-05-28-pm10.46.43.webp',
  '2020-05-28-pm4.06.08.webp',
  '2020-05-29-am5.53.45.webp',
  '2020-05-29-pm2.14.26.webp',
  '2020-05-31-am6.30.44.webp',
  '2020-05-31-pm7.27.56.webp',
  '2020-05-31-pm7.29.19.webp',
  '2020-06-01-am6.07.39.webp',
  '2020-06-01-pm7.03.38.webp',
  '2020-06-01-pm7.26.42.webp',
  '2020-06-03-am7.50.04.webp',
  '2020-06-04-pm2.22.16.webp',
  '2020-06-05-pm3.47.38.webp',
  '2020-06-06-am7.15.35.webp',
  '2020-06-09-am7.27.03.webp',
  '2020-06-09-am9.54.17.webp',
  '2020-06-09-pm2.12.20.webp',
  '2020-06-11-am10.30.14.webp',
  '2020-06-12-am7.36.58.webp',
  '2020-06-12-pm12.15.07.webp',
  '2020-06-13-am7.50.02.webp',
  '2020-06-13-pm12.00.52.webp',
  '2020-06-14-am11.30.36.webp',
  '2020-06-14-pm2.13.12.webp',
  '2020-06-15-pm1.51.10.webp',
  '2020-06-16-pm10.18.15.webp',
  '2020-06-17-pm4.23.10.webp',
  '2020-06-18-pm10.46.33.webp',
  '2020-06-19-am6.12.59.webp',
  '2020-06-20-am7.47.04.webp',
  '2020-06-20-pm1.12.28.webp',
  '2020-06-20-pm10.32.50.webp',
  '2020-06-21-pm2.25.26.webp',
  '2020-06-22-pm1.05.17.webp',
  '2020-06-23-pm7.06.42.webp',
  '2020-06-24-am7.06.03.webp',
  '2020-06-25-pm5.14.20.webp',
  '2020-06-26-am8.24.40.webp',
  '2020-06-26-pm1.49.57.webp',
  '2020-06-26-pm6.48.49.webp',
  '2020-06-27-am5.22.36.webp',
  '2020-06-29-am6.15.10.webp',
  '2020-06-29-pm2.04.59.webp',
  '2020-06-29-pm5.26.22.webp',
  '2020-06-30-am6.55.37.webp',
  '2020-07-03-pm12.26.31.webp',
  '2020-07-04-am11.14.31.webp',
  '2020-07-05-am9.09.24.webp',
  '2020-07-05-pm7.53.40.webp',
  '2020-07-06-pm5.43.22.webp',
  '2020-07-08-pm3.51.01.webp',
  '2020-07-09-am11.53.32.webp',
  '2020-07-09-am7.28.38.webp',
  '2020-07-09-pm9.54.29.webp',
  '2020-07-10-am6.02.59.webp',
  '2020-07-17-pm2.52.09.webp',
  '2020-07-17-pm9.23.31.webp',
  '2020-07-18-am11.03.22.webp',
  '2020-07-20-pm12.30.37.webp',
  '2020-07-21-am6.30.11.webp',
  '2020-07-22-am8.19.18.webp',
  '2020-07-22-pm1.07.22.webp',
  '2020-07-23-am6.58.33.webp',
  '2020-07-23-pm2.59.00.webp',
  '2020-07-24-pm1.09.14.webp',
  '2020-07-24-pm10.16.16.webp',
  '2020-07-25-pm12.52.23.webp',
  '2020-07-25-pm9.23.11.webp',
  '2021-01-10-am11.52.43.webp',
  '2021-01-11-pm10.23.35.webp',
  '2021-01-12-am6.57.26.webp',
  '2021-01-13-pm6.45.18.webp',
  '2021-01-14-am8.15.51.webp',
  '2021-01-15-pm8.14.26.webp',
  '2021-01-16-pm6.20.06.webp',
  '2021-01-17-pm2.58.47.webp',
  '2021-01-18-pm5.44.34.webp',
  '2021-01-18-pm7.13.51.webp',
  '2021-01-19-am6.04.17.webp',
  '2021-01-19-pm1.32.27.webp',
  '2021-01-20-am7.35.08.webp',
  '2021-01-21-am6.19.41.webp',
  '2021-01-21-pm7.38.09.webp',
  '2021-01-22-pm4.44.07.webp',
  '2021-01-23-am5.57.39.webp',
  '2021-01-24-am5.50.21.webp',
  '2021-01-25-am5.53.53.webp',
  '2021-01-25-am8.49.49.webp',
  '2021-01-26-pm12.39.06.webp',
  '2021-01-27-am7.35.11.webp',
  '2021-01-27-pm7.49.30.webp',
  '2021-01-28-am7.02.00.webp',
  '2021-01-28-pm3.36.52.webp',
  '2021-01-29-pm7.52.27.webp',
  '2021-01-30-pm6.10.04.webp',
  '2021-01-31-pm6.26.24.webp',
  '2021-02-01-pm12.53.24.webp',
  '2021-02-02-pm12.17.31.webp',
  '2021-02-03-am8.06.40.webp',
  '2021-02-04-am6.46.31.webp',
  '2021-02-04-pm7.54.31.webp',
  '2021-02-05-am6.49.54.webp',
  '2021-02-05-pm7.38.25.webp',
  '2021-02-06-am6.40.26.webp',
  '2021-02-06-pm7.42.29.webp',
  '2021-02-07-am6.50.25.webp',
  '2021-02-07-pm2.59.19.webp',
  '2021-02-08-am7.26.13.webp',
  '2021-02-08-pm10.05.12.webp',
];

let picArr1 = [
  '1561140.jpg',
  '1561141.jpg',
  '1561142.jpg',
  '1561143.jpg',
  '1561145.jpg',
  '1561147.jpg',
  '1561148.jpg',
  '1561149.jpg',
  '1561150.jpg',
  '1561151.jpg',
  '1561152.jpg',
  '1561153.jpg',
  '1561154.jpg',
  '1561155.jpg',
  '1561156.jpg',
  '1561157.jpg',
  '1561158.jpg',
  '1561159.jpg',
  '1561160.jpg',
  '1561161.jpg',
  '1561162.jpg',
  '1561163.jpg',
  '1561164.jpg',
  '1561165.jpg',
  '1561166.jpg',
  '1561167.jpg',
  '1561168.jpg',
  '1561169.jpg',
  '1561170.jpg',
  '1561171.jpg',
  '1561172.jpg',
  '1561173.jpg',
  '1561174.jpg',
  '1561175.jpg',
  '1561176.jpg',
  '1561185.jpg',
  '1561186.jpg',
  '1561187.jpg',
  '1561188.jpg',
  '1561189.jpg',
  '1561190.jpg',
  '1561191.jpg',
  '1561192.jpg',
  '1561193.jpg',
  '1561194.jpg',
  '1561195.jpg',
  '1561196.jpg',
  '1561197.jpg',
  '1561198.jpg',
  '1561199.jpg',
  '1561200.jpg',
  '1561201.jpg',
  '1561202.jpg',
  '1561203.jpg',
  '1561204.jpg',
  '1561205.jpg',
  '1561206.jpg',
  '1561207.jpg',
  '1561208.jpg',
  '1561209.jpg',
  '1561210.jpg',
  '1561211.jpg',
  '1561212.jpg',
  '1561213.jpg',
  '1561214.jpg',
  '1561254.jpg',
  '1561255.jpg',
  '1561256.jpg',
  '1561257.jpg',
  '1561258.jpg',
  '1561259.jpg',
  '1561260.jpg',
  '1561261.jpg',
  '1561262.jpg',
  '1561263.jpg',
  '1561264.jpg',
  '1561265.jpg',
  '1561266.jpg',
  '1561267.jpg',
  '1561268.jpg',
  '1561269.jpg',
  '1561270.jpg',
  '1561271.jpg',
  '1561272.jpg',
  '1561278.jpg',
  '1561279.jpg',
  '1561280.jpg',
  '1561281.jpg',
  '1561282.jpg',
  '1561283.jpg',
  '1561284.jpg',
  '1561285.jpg',
  '1561286.jpg',
  '1561287.jpg',
  '1561288.jpg',
  '1561289.jpg',
  '1561662.jpg',
  '1561663.jpg',
  '1561664.jpg',
  '1561665.jpg',
  '1561666.jpg',
  '1561667.jpg',
  '1561668.jpg',
  '1561669.jpg',
  '1561671.jpg',
  '1561672.jpg',
  '1561673.jpg',
  '1561674.jpg',
  '1561675.jpg',
  '1561676.jpg',
  '1561677.jpg',
  '1561678.jpg',
  '1561679.jpg',
  '1561680.jpg',
  '1561681.jpg',
  '1561682.jpg',
  '1561683.jpg',
  '1561684.jpg',
  '1561685.jpg',
  '1561686.jpg',
  '1561687.jpg',
  '1561688.jpg',
  '1561689.jpg',
  '1561715.jpg',
  '1561716.jpg',
  '1561717.jpg',
  '1561718.jpg',
  '1561719.jpg',
  '1561721.jpg',
  '1561722.jpg',
  '1561723.jpg',
  '1561724.jpg',
  '1561726.jpg',
  '1561727.jpg',
  '1561728.jpg',
  '1561729.jpg',
  '1561730.jpg',
  '1561731.jpg',
  '1561772.jpg',
  '1561773.jpg',
  '1561774.jpg',
  '1561775.jpg',
  '1561776.jpg',
  '1561778.jpg',
  '1561779.jpg',
  '1561780.jpg',
  '1561781.jpg',
  '1561789.jpg',
  '1561790.jpg',
  '1561791.jpg',
  '1561792.jpg',
  '1561793.jpg',
  '1561794.jpg',
  '1561795.jpg',
  '1561796.jpg',
  '1561799.jpg',
  '1561800.jpg',
  '1561801.jpg',
  '1561802.jpg',
  '1561803.jpg',
  '1561804.jpg',
  '1561805.jpg',
  '1561806.jpg',
];

// initial conditions
let toggle = 0;
let picIdx = 0;
let picArr = picArr0;
let dirStr = 'webp_img';
let startTime;

const cntr = document.getElementById('cont');
let image = document.createElement('img');
cntr.appendChild(image);

function changeBkg() {
  let rndClr = Math.floor(Math.random() * 16777215).toString(16);

  cntr.style.backgroundColor = `#${rndClr}`;
}

function someFunc(timestamp) {
  setTimeout(function () {
    picIdx += 1;
    let len = picArr.length;

    // switches array of images and resets index to 0
    if (picIdx > len - 1) {
      picIdx = 0;

      toggle = toggle ? 0 : 1;
      picArr = toggle ? picArr1 : picArr0;
      dirStr = toggle ? 'dream_img' : 'webp_img';
    }

    // changes the image to be rendered from the proper path and array
    image.src = `${dirStr}/${picArr[picIdx]}`;
    let delta = timestamp - startTime;

    if (delta >= 13000) {
      startTime = timestamp;
      changeBkg();
    }

    requestAnimationFrame(someFunc);
  }, 200);
}

requestAnimationFrame((timestamp) => {
  startTime = timestamp;
  someFunc(timestamp);
});

// Even worse, using setTimeout() or setInterval() to continuously make changes to the user's screen often induces "layout thrashing", the browser version of cardiac arrest where it is forced to perform unnecessary reflows of the page before the user's screen is physically able to display the changes. This is bad -very bad- due to the taxing nature of page reflows, especially on mobile devices where the problem is most apparent, with janky page loads and battery drains.
