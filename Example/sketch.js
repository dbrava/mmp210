// final 

var explosion;
var numCars = 10;
var cars = [];
var displayCars = true;
var hero;
var bg;
var score = 0;

function preload() {
	 explosion = loadSound('Laser_Shoot.wav');
     bkgMusic = loadSound("music.mp3");
}

function setup() { 
    hero = loadImage('images/bee.png');
    
    bg = loadImage('images/bg.png');
    
    bkgMusic.play();
    
    createCanvas(720, 360);
    for (var i = 0; i < numCars; i++) {
        cars.push( new Cars(
            random(0,width), 
            random(0,height) 
        ) );   
    }
}

function draw() {
    background(bg);
    for (var i = 0; i < numCars; i++) {
        if (cars[i].alive) {
            cars[i].display();
            cars[i].update();
        } else {
            cars[i].explode();
            
        }
    }
}

function mousePressed() {
    
    
    //displayCars = !displayCars;
    for (var i = 0; i < numCars; i++) {
        cars[i].collide(mouseX, mouseY);
    }
}

function Cars(x, y) {
    this.color = color(random(0,255), random(0,255), random(0, 255));
    this.size = random(40, 100);
    this.speed = random(1,20);
    this.x = x;
    this.y = y;
    this.alive = true;
    this.display = function() {
        fill(this.color);
       car(this.x, this.y, this.size);
        // collider
//        noFill();
//        stroke(0,255,0);
//        ellipse(this.x + this.size/2, this.y, this.size/2);
//        noStroke();
    }
    this.explode = function() {
        fill("white");
        ellipse(this.x + this.size/2, this.y, random(10, 50));
        
    }
    this.update = function() {
        if (this.x < width + this.size) {
            this.x += this.speed;
        } else {
            this.x = -this.size;
            this.y = random(0, height);
        }
    }
    this.collide = function(otherX, otherY) {
        var d = dist(otherX, otherY, this.x + this.size/2, this.y);
        if (d < this.size/2) {
            this.alive = false;
            explosion.play();
        }
    }
}


function car(x, y, carWidth) {
    var carHeight = carWidth/4;
    var carWing = carWidth/3;
    var wingMargin = carWidth/10;
    var cockpitWidth = carWidth/3;
        
    // wing 1
    rect(x, y, carWing +20,carHeight);
     
    // body
    rect(x, y, carWidth, carHeight);
    
    // cockpit
    ellipse(x/2 + carWidth + cockpitWidth/4, y + carHeight/4, carHeight/4);
    
    // window 
    ellipse(x + carWidth + cockpitWidth/4, y + carHeight/4, carHeight/2);
}