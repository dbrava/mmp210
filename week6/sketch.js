//animation
var r = 0;
var x = 210;
var x1 = 290;
var y = 220;
var a1 = 350;
var a = 150;
var rot = 0;

var r, g, b;

function setup(){
    createCanvas(640, 480);
	//random colors
	r = random(255);
  	g = random(255);
  	b = random(255);
}

function draw() {   
    background('lightblue');
	
    
	
	fill(r, g, b);
	stroke("black");

	
	//face
    ellipse(250, 250, 250);
    
    fill('black');
	//left eye
    ellipse(210, 230, 55, 55);
	//right eye
    ellipse(290, 230, 55, 55);
    
	
	//nose
    ellipse(250, 240, 10, 10);
    
    fill('red');
	//mouth
    ellipse(250, 260, 20, 20);
  
    
    fill('black');
    stroke("black");
	//right ear
    arc(a1, 150, 60, 60, 0, PI, OPEN);

	//left ear
	push();
	translate(a,60);
	rotate(rot);
	rot += 0.01;
    arc(a, 150, 60, 60, 0, PI, OPEN);
	pop();
	
	

	
    fill('white');
	noStroke();
	//right pupil
	push();
	translate(x1, y);
	rotate(r);
	r += 0.01;
    ellipse(10, 10, 20, 20);
	pop();
	
	//left pupil
	push();
	translate(x, y);
	rotate(r);

    ellipse(10, 10, 20, 20);
	pop();
}

function mousePressed() {
 
// Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
    
}
    


