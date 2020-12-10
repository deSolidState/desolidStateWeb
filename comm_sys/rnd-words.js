let data = ['the', 'quick', 'fresh', 'reciprocity', 'quadrangle', 'no'];
let i = 0;

function setup() {
  createCanvas(800, 450);
  frameRate(2.5);
  textAlign(CENTER);
}

function draw() {
  let dataLenArr = [];
  for (let i = 0; i < data.length; i++) {
    dataLenArr.push(data[i].length);
  }

  if (i >= data.length) {
    background(225);
    i = 0;
  }

  console.log('i', i);
  // get ith element of data array
  // console.log('dataI', data[i]);
  let d = data[i].length;
  console.log('d', d);

  // set text color using data
  let fillCol = map(d, min(dataLenArr), max(dataLenArr), 0, 255);
  fill(fillCol, fillCol * sin(fillCol), tan(fillCol));

  // set text size using data
  let s = map(d, 1 - sin(min(dataLenArr)), max(dataLenArr) * 1.5, 15, 125);
  textSize(s);

  // place text at a random place
  text(data[i], random(width), random(height));

  i = i + 1;
}
