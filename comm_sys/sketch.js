// **********************************
// what user types appears on canvas
// **********************************

let message = '';
let xTxt = 10;
let yTxt = 50;
let isScroll = false;

let fr = 30; //starting FPS
let clr;

function setup() {
  createCanvas(400, 300);
  background(200);
  textSize(16);
  fill(255);
  noStroke();

  frameRate(fr); // Attempt to refresh at starting FPS
  clr = color(255, 0, 0);
}

function draw() {
  background(200);

  if (isScroll) {
    xTxt = xTxt + 1 * (deltaTime / 50);
  }

  text(message, xTxt, yTxt);

  if (xTxt >= width) {
    // If you go off screen.
    if (fr === 30) {
      clr = color(0, 0, 255);
      fr = 10;
      frameRate(fr); // make frameRate 10 FPS
    } else {
      clr = color(255, 0, 0);
      fr = 30;
      frameRate(fr); // make frameRate 30 FPS
    }
    xTxt = -400;
  }
  fill(clr);
}

function keyPressed() {
  // First check if the key is something we want to type.
  if (key.length == 1 && key.match(/[\S,\ ,\n]/)) {
    message = message + key;
    // Otherwise, if it is the backspace key remove one charater.
  } else if (keyCode == BACKSPACE || keyCode == DELETE) {
    message = message.substr(0, message.length - 1);
    // If it is the enter key, then add a newline.
  } else if (keyCode == ENTER) {
    isScroll = true;
    // message += "\n";
  }
  return false;
}

function mouseClicked() {
  message = '';
  isScroll = false;
  xTxt = mouseX;
  yTxt = mouseY;

  // if (value === 0) {
  //   value = 255;
  // } else {
  //   value = 0;
  // }
}
