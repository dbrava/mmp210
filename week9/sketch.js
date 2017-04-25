var r, g, b;
var x, y, w, h;
var angle = 0;
function setup(){
	createCanvas(720, 360);
	rectMode(CENTER);
	r = random(0, 255);
	g = random(0, 255);
	b = random(0, 255);
}
function draw(){
	background("black");
	fill(r, g, b);
	/* the button */
	x = width - 60;
	y = 35;
	w = 100;
	h = 50;
	rect(x, y, w, h);
	
	/* rotating another shape */
	push();
	translate(width/2, height/2);
	rotate(angle);
	rect(0, 0, 200, 200);
	pop();
}
function mousePressed() {
	if ( mouseX > x - w/2 && mouseX < x + w/2 && mouseY > y - h/2 && mouseY < y + h/2 ) {
		angle += 0.1;
	}
}
