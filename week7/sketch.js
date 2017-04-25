
//window
function setup(){
   createCanvas(400,600);

}
   
function draw(){
   background(183,158,200); //purple

   

   var windowWidth = width/5; // window width
   var windowHeight = height/3; // window height
 
   //variables
	var x = 10;
	var y = 10;	
	var x1 = 150;
	var y1 = 150;
	for (var i = 0; i < 4; i++) {
    for (var h = 0; h < 2; h++) {
            nova(x + x1 * i, y + y1 * h, windowWidth, windowHeight);
			nova(x + x1 * i, y * 30 + y1 * h, windowWidth/2, windowHeight/2);
        }
   
  	}
}
	

//name new function nova
function nova(x, y, windowWidth, windowHeight) {
var Trim = color(237,235,216);// window trim

   var windowWidth = width/4; // window width
   var windowHeight = height/3; // window height
 
   var Trim = color(237,235,216);// window trim
   
   for ( var x = windowWidth/4; x < width; x+=windowWidth) {
   for (var y = windowHeight/4; y < height; y+=windowHeight) {
   

   fill(Trim);
   stroke(Trim);    
   rect(x-5, y-5 , windowWidth/2 +10, windowHeight/2+10 );
       
 
   fill(122, 123, 92);
   rect(x, y , windowWidth/2, windowHeight/2);
   
   fill(95,96,74);
   noStroke();  
   rect(x, y, windowWidth/2, windowHeight/28);
       
   noFill();
   stroke(Trim);
   strokeWeight(2);
       
   //down window    
   stroke(186,191,164);
   strokeWeight(2.5);
   rect(x, y + windowWidth/2,windowWidth/2, windowHeight/4 );
   rect(x, y + windowWidth/2,windowWidth/2, windowHeight/8 );
 
   rect(x + windowWidth/6, y + windowWidth/2,windowWidth/6, windowHeight/4 );
     
   //upper window
   noFill();
   stroke(Trim);
   strokeWeight(2);
   rect(x, y, windowWidth/6, windowHeight/4);
   rect(x, y,windowWidth/3, windowHeight/4);
   rect(x, y, windowWidth/2, windowHeight/8);

   rect(x, y, windowWidth/2, windowHeight/4);
       
   
 }

   rect(x, y, windowWidth/2, windowHeight/4);      
 }
   }


function drawWindow(x,y,windowWidth,windowHeight){
   fill("Trim");
        rect(x,y,windowWidth/2,windowHeight/2);
           
       fill("#5F2847 ");
       stroke("#F2F1D2 ");  
       
       strokeWeight(6);
   
           
       rect(x, y + windowWidth/2,windowWidth/2, windowHeight/4 );
       rect(x, y + windowWidth/2,windowWidth/2, windowHeight/8 );

       rect(x + windowWidth/6, y + windowWidth/2,windowWidth/6, windowHeight/4 );
       
       //up
       fill("#823864 ");
       
           
       rect(x, y, windowWidth/2, windowHeight/4);
       rect(x, y,  windowWidth/2, windowHeight/8);
       rect(x, y+windowWidth/3,  windowWidth/2, windowHeight/8);
 
     
   
}

