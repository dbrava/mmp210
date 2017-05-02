//spaceships and arrays
var numSpaceships = 20;
var xPositions = [];
var yPositions = [];
var spaceshipSize = [];
var spaceshipSpeed = [];

function setup() {
	createCanvas(700, 400);
	
	for (var i = 0; i < numSpaceships; i++){
		xPositions[i] = random(0, width);
		yPositions[i] = random(0, height);
		spaceshipSize[i] = random(10, 50);
		spaceshipSpeed[i] = random (0.1, 22);
	}
}

function draw(){
	background('black');
	
	for (var i = 0; i < numSpaceships; i++){
		ellipse(xPositions[i], yPositions[i], spaceshipSize[i]);
		xPositions[i] += spaceshipSpeed[i];
		if (xPositions[i] > width + spaceshipSize[i]/2){
			xPositions[i] = -spaceshipSize[i]/2;
			yPositions[i] = random (0, height);
			
	}
  }
}