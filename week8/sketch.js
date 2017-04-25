// midterm - generative pattern
var r, g, b;
function setup() {
    createCanvas(600,400);
 	var x = 10;

	var numSymbols = 20;
	var space = width/numSymbols;
	for (var i = 0; i < numSymbols; i++) {
		var y = random(100, height - 100);
		
		
		x += space;
		
		var r = random(0,1);
		
		if (r < 0.5) {
			ellipse(x, y, 10);
			ellipse(x + 200, y, 10);
			
			
		} else {
			
			rect(x, y, 35, 10);
			rect(x * 2, y * 2, 35, 10);
			
		}
	}
} 
