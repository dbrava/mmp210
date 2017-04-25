
//dom button
var r = 255, g = 255, b = 255;
var rot = 0;
function setup(){
	createCanvas(640, 480);
	
	var button = createButton("Rotate the rectangle");
	button.mousePressed(rotateRect);
}

function draw(){
	background('black');
	translate(width/2, height/2);
	rotate(rot);
	rect(0, 0, 50, 50);
}

function rotateRect() {
	rot += 0.1
}