// preload the font to use textToBounds
// cannot do this with default fonts!!
let font;
function preload() {
  font = loadFont('assets/ubuntu-mono-reg.ttf');
}

// SAMPLE sentence to iterate over
let data = ['the', 'quick', 'fresh', 'reciprocity', 'quadrangle', 'no'];
let i = 0;
let points;
let bounds;

function setup() {
  createCanvas(800, 450);
  background(200);

  frameRate(2.5);
  textAlign(CENTER);
}

function draw() {
  let dataLenArr = [];
  for (let i = 0; i < data.length; i++) {
    dataLenArr.push(data[i].length);
  }

  if (i >= data.length) {
    background(200);
    i = 0;
  }

  // get ith element of data array
  let d = data[i].length;

  // set text color using data
  let fillCol = map(d, min(dataLenArr), max(dataLenArr), 0, 255);
  fill(fillCol, fillCol * sin(fillCol), tan(fillCol));

  // set text size using data
  let s = map(d, 1 - sin(min(dataLenArr)), max(dataLenArr) * 1.5, 15, 125);
  textSize(s);

  // place text at a random place
  text(data[i], random(width), random(height));

  i = i + 1;

  alterText(s);

  // beginShape();
  // translate((-bounds.x * width) / bounds.w, (-bounds.y * height) / bounds.h);
  // for (let i = 0; i < points.length; i++) {
  //   let p = points[i];
  //   vertex(
  //     (p.x * width) / bounds.w +
  //       (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
  //     (p.y * height) / bounds.h
  //   );
  // }
  // endShape(CLOSE);
  // beginShape();
  // translate(
  //   (-bounds.x * random(width)) / bounds.w,
  //   (-bounds.y * random(height)) / bounds.h
  // );
  // for (let i = 0; i < points.length; i++) {
  //   let p = points[i];
  //   vertex(
  //     (p.x * width) / bounds.w +
  //       (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
  //     (p.y * height) / bounds.h
  //   );
  // }
  endShape(CLOSE);
}

function alterText(s) {
  let sentLen = data.length;

  for (let j = 0; j < sentLen; j++) {
    points = font.textToPoints(`${data[j]}`, 0, 0, s, {
      sampleFactor: 5,
      simplifyThreshold: 0,
    });
    bounds = font.textBounds(` ${data[j]} `, 10, 10, s);

    for (let i = 0; i < points.length; i++) {
      beginShape();
      translate(
        (-bounds.x * random(width)) / bounds.w,
        (-bounds.y * random(height)) / bounds.h
      );

      let p = points[i];
      vertex(
        (p.x * width) / bounds.w +
          (sin((20 * p.y) / bounds.h + millis() / 1000) * width) / 30,
        (p.y * height) / bounds.h
      );

      endShape(CLOSE);
    }
  }
}
