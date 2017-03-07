function setup(){
    
   createCanvas(640, 480);
  
    var back = color(255,255,255);
    var pink = color(255, 27, 231);
    var lens = color(255, 233, 68);
    var water = color(31, 0, 178);
    var copa = color(211,211,211);
    var black= color(0,0,0);
    
    background(back);
    
   
    fill(pink);
    stroke(copa);
    rect(150, 150, 500, 700);
    
  	//square1
    fill(water);
    rect(200, 200, 400, 300);
    
 
      
    //square2
    fill(copa);
    rect(150, 90, 80, 60);
     
    //square3
    fill(lens);
    rect(170, 100, 60, 30);
	
    
    var lensX = 400;
    var lensY = 350;
   
    
    //lens
    fill(black);
    ellipse(lensX, lensY, 150, 150);
     
    //lens4
    fill(lens);
    ellipse(lensX, lensY, 120, 120);

}