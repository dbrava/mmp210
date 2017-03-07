
function setup() {
   createCanvas(640,480);
}

function draw() {
   background(220);
   
 
   
   var ww = width/4; //window width
   var wh = height/3; //window height
   
   for(var x =ww/4; x<width; x+=ww){
       for(var y =wh/4; y<height; y+=windowHeight){
           
         fill(167,82,54);   
         rect(x,y,windowWidth,windowHeight);
         
         fill("black");
           
   }
       
   }
}