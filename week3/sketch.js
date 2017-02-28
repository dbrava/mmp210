//logo
function setup(){
    createCanvas(700, 480);
    background(160, 248, 230);
    
    
   //logo 
   noFill();
    strokeWeight(2);
    stroke("black");
    
    //vertex
    var w = 257.5;
    
    
    
    beginShape(TRIANGLE_FAN);
vertex(w, 250);
vertex(w, 215);
vertex(292, 250);
vertex(w, 285);
vertex(222, 250);
vertex(w, 215);
endShape();
    
   
    // ts means text size
    var ts = 70;
    var lineNumber = 1;
    
    
    textSize(ts);
    textFont("Georgia");
    textAlign(CENTER);
    
    //rect (320, 240, 70, 12);
    
    var y = 300;
    var x = 300;
    
    fill(240, 75, 7);
    strokeWeight(6);
    stroke("white");
    textStyle("Italics");
    text("C", x + 18, y + ts*lineNumber);
    lineNumber = lineNumber ;
    text("R", x + 18, y, +ts*lineNumber);
    lineNumber = lineNumber + 1;
    
}