function setup() {
    createCanvas(640, 480);
    background(50);
    noStroke();
    
    
    fill("lightblue");
    var size = (2000 / 5);
    ellipse(350, 320, size);
    
    var x = (300);
    var y = (250);
    

    fill(0,0,0);
    
    //eyes
    ellipse (450, 250, 50);
    ellipse(x, y, 50);
    
    //mouth
    ellipse(x, 350, 100,50);

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("Monaco");
    text("Nice work!", 65, 110);
}