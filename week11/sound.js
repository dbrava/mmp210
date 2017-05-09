// sound
var explosion;
function preload() {
	 explosion = loadSound('Laser_Shoot.wav');
}
function setup() { 
	createCanvas(400,200);
}
function draw() {
	background('black');
}
function mousePressed() {
	explosion.play();
}
 