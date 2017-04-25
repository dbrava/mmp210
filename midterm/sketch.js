// midterm - generative pattern
function setup() {
    createCanvas(600,400);
    stroke('green');
    y = height * 0.5;
    
}

var rr = 6;
var d = 10;
var x = 10;
var r = 225, g = 200, b = 100;
var numberOfDots = 100;
var columns = Math.sqrt(numberOfDots);
var rows = Math.sqrt(numberOfDots);
var w = width / columns;
    var h = height / rows;

for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            

            // flowers
            if ( y > height * 3/4) {
                //dots
                ellipse(x, y, w, h);
                //stems
                fill(
                    random(0, 50),
                    random(150, 255),
                    random(0, 100)
                );
                rect(x, y, w/8, h);
                //inside 
                fill(
                    random(0, 255),
                    random(0, 100),
                    random(100, 200)
                );
                ellipse(x, y, w/2, h/2);
            } else {
                // rain & grass
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }




function draw() {
    background('white');
    textSize(40);
    textFont("Arial");
    
    if(y > 5){
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    fill(r, g, b);
    text("Morse Code", 50, 50);
    
    
    
  y = y - 4;
  if (y < 0) {
    y = height;
  }
   
    //dots
    ellipse(x, y, d, d);
    ellipse(x+50, y, d, d);
    ellipse(x+100, y, w, h);
    ellipse(x, y/2, d, d);
	ellipse(x+ 700, y/5, d, d);
    ellipse(x+500, y, d, d);
    ellipse(x+700, y, d, d);
      
    //dash
    rect(x+10, y, 25, rr);
    rect(x+40, y+30, 25, rr);
    rect(x+ 100, y+30, 25, rr);
    rect(x+120, y+50, 25, rr);
    rect(x+300, y+50, 25, rr);
	rect(x+500, y+200, 25, rr);
}

if (x > 200) {
	x = width;
	
	
}
 


