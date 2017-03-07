


function setup(){
    createCanvas(600, 400);
   
    
  
    frameRate(30);
    textSize(80);
    textSize(100);
    textAlign(CENTER);
}

function draw() {
  background("black");
  text(frameCount, width/2, height/2)
    
    
  if (frameCount < width/3) {
        fill ("white");
    }else{ 
        fill("red");
    }   
   

    
    textSize(50);
text("Tick", width/2, 130);
fill(0, 102, 153);
text("Tack", 200, 160);
fill(0, 102, 153, 151);
text("Tick", 100, 190);

    
}
