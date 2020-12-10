// **********************************
// what user types appears on canvas
// **********************************

let msg = '';
let msgLen = 0;
let xTxt = 10;
let yTxt = 50;
let isScroll = false;
let fontSize = 16;

let optBtnTime = 0;

let fr = 30; //starting FPS
let txtClr;

function setup() {
  cnv = createCanvas(400, 300);
  cnv.mouseOver(mouseMoved);

  background(200);
  textSize(fontSize);
  fill(255);
  noStroke();

  frameRate(fr); // Attempt to refresh at starting FPS
  txtClr = color(255, 0, 0);
  console.log(text);
}

function draw() {
  background(200);

  if (isScroll) {
    xTxt = xTxt + 1 * (deltaTime / 50);
  }

  if (xTxt >= width) {
    // If you go off screen.
    if (fr === 30) {
      txtClr = color(0, 0, 255);
      fr = 4;
      frameRate(fr); // make frameRate 10 FPS
    } else {
      txtClr = color(255, 0, 0);
      fr = 11;
      frameRate(fr); // make frameRate 30 FPS
    }
    xTxt = -1 * (msgLen * (fontSize - 3));
  }

  // this is very bad glowing letters
  // 1st the background glow
  textSize(fontSize + 3);
  fill(txtClr);
  text(msg, xTxt - 5, yTxt + (fontSize - 15) / 2);
  filter(BLUR, 4);

  // 2nd print the messsage over top
  textSize(fontSize);
  fill(0, 255, 0);
  text(msg, xTxt, yTxt);

  if (optBtnTime > 0) {
    btnClr = color(100, 50, 100);
    optBtnTime = optBtnTime - deltaTime;
    btnClr.setAlpha((51 * optBtnTime) / 1000);
    fill(btnClr);

    rect(13, 13, width - 26, height - 26);
  }
}

function keyPressed() {
  // First check if the key is something we want to type.
  if (key.length == 1 && key.match(/[\S,\ ,\n]/)) {
    msg = msg + key;
    msgLen = msg.length;
    // Otherwise, if it is the backspace key remove one charater.
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    msg = msg.substr(0, msg.length - 1);
    msgLen = msg.length;
    // If it is the enter key, then add a newline.
  } else if (keyCode == ENTER) {
    isScroll = true;
    // message += "\n";
  }
  return false;
}

function mouseClicked() {
  msg = '';
  isScroll = false;
  xTxt = mouseX;
  yTxt = mouseY;
}

function mouseMoved() {
  // optBtnTime = 5000;
}
