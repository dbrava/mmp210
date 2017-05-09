//background 

var bg;
var y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage("curves.png");
  createCanvas(720, 400);
}

function draw() {
  background(bg);
  y++;
  if (y > height) {
    y = 0;
  }
}