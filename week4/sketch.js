//systemVariables
function setup() {
    createCanvas(640, 480);
}
   
function draw() {
    background(50);
    
    /*draw a grid */
    stroke("green");
    line(0, height/2, width, height/2);
    line(width/2, 0, width/2, height);
    
    ellipse(mouseX, mouseY, 100,100);
    
    fill("lightblue");
    ellipse(pmouseX, pmouseY, 50, 50);
    
    if (mouseX < width/2) {
        fill ("blue");
    }else{ 
        fill("red");
    }
    
    if (frameCount < width/2){
        ellipseWidth = frameCount;
    } else{ 
        elipseWidth = 0;
    }
    
    fill(frameCount, 0, 255);
    
    console.log(frameCount);
    fill (frameCount, 0, 255);
    
    
    
    
}