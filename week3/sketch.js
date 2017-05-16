//logo
function setup(){
    createCanvas(600, 500);
    background(160, 248, 230);
    
    
   //logo 
   noFill();
    strokeWeight(2);
    stroke("black");
    
    //vertex
    var w = 500;
    
    
    
    beginShape(TRIANGLE_FAN);
vertex(w, 500);
vertex(w, 215);
vertex(500, 400);
vertex(w, 400);
vertex(100, 300);
vertex(w, 215);
endShape();
    
   
    // ts means text size
    var ts = 140;
    var lineNumber = 1;
    
    
    textSize(ts);
    textFont("Georgia");
    textAlign(CENTER);
    
    //rect (320, 240, 70, 12);
    
    var y = 200;
    var x = 300;
    
    fill(240, 75, 7);
    strokeWeight(6);
    stroke("white");
    textStyle("Italics");
    text("Creative", x, y + ts*lineNumber);
    lineNumber = lineNumber ;
    text("Rawr", width/2, y, +ts*lineNumber);
    lineNumber = lineNumber + 1;
    
}