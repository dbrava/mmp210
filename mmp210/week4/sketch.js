


function setup(){
    createCanvas(600, 400);
    //background
    background("black");

    
}

function draw() {
  
    stroke(255);
    frameRate(20);

var x= width/2;
var y= 100;
  
  text(frameCount, width/2, height/2)
    if (frameCount < width/2) {
        fill ("white"); 
    }else{ 
        fill("red"); 
    }   

textSize(120);
noStroke();
text("Tick", x, 100);

fill(0, 102, 153);
text("Tick", x + 10 , y * 3);

fill(0, 102, 153, 151);
text("Tack", x / 8, y * 2);




//ellipse

ellipse(mouseX, mouseY, 100,100,100);

}
