//logo
function setup(){
    createCanvas(700, 480);
    background(225, 185, 169);
    
    
   //logo 
   noFill();
    strokeWeight(2);
    stroke("white");
    
   
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