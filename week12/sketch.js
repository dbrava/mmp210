//Final Project



var bkgMusic;
var canvasWidth = 600;
var canvasHeight = 400;
var score = 0;
var player = {
	color : "#FFF",
	x : 280,
	width : 40,
	y : 355,
	height: 40,
	draw : function(){
		image(img_player, 
              this.x, 
              this.y, 
              this.width, 
              this.height);
	}
}

var bullets = [];
function Bullet(I){
	I.active = true;
	I.x = player.x + player.width/2;
	I.y = player.y +  player.height/2;
	I.width = 10;
	I.height = 10;
	I.yVelocity = 3;
	I.inBounds = function(){
		return I.x >= 0 && I.y >= 0 && I.x < canvasWidth - I.width && I.y < canvasHeight - I.height;
	}
	I.update = function(){
		I.active  = I.active && I.inBounds();
		I.y -= I.yVelocity;
	}
	I.draw = function(){
		image(img_bullet, I.x, I.y, I.width, I.height);
	}
	return I;
}

var enemies  = [];
function Enemy(I){
	I.active = true;
	I.x = Math.random() * canvasWidth;
	I.y = 0;
	I.width = 30;
	I.height = 30;
	I.yVelocity = 2;
	I.inBounds = function(){
		return I.x >= 0 && I.y >= 0 && I.x < canvasWidth - I.width && I.y < canvasHeight - I.height;
	}
	I.draw = function(){
		image(img_enemy, I.x, I.y, I.width, I.height);
	}
	I.update= function(){
		I.active = I.active && I.inBounds();
		I.y += I.yVelocity;
	}
	return I;
}


function collision(enemy, bullet){
	return bullet.x + bullet.width >= enemy.x && bullet.x < enemy.x + enemy.width &&
			bullet.y + bullet.height >= enemy.y && bullet.y < enemy.y + enemy.height;
}
//canvas functions 
var img_enemy, img_player, img_bullet;
function preload(){
    
	img_enemy = loadImage("images/enemy2.png");
	img_player = loadImage("images/bee.png");
	img_bullet = loadImage("images/bullet.png");
    img_background = loadImage("images/bg2.png");
    bkgMusic = loadSound("music.mp3");
    
    }

function setup(){
	createCanvas(canvasWidth, canvasHeight);
	noCursor();
    bkgMusic.play();
}
function draw(){
	fill(255);
	clear();
	background(img_background);
	text("score : " + score, 10, 10);
	fill(player.color);
	if(keyIsDown(LEFT_ARROW)){
		if(player.x-5 >= 0)
			player.x -= 5;
		else
			player.x = 0;
	}
	if(keyIsDown(RIGHT_ARROW)){
		if(player.x + 5 <= canvasWidth-player.width)
			player.x += 5;
		else
			player.x = canvasWidth - player.width;
	}
	if(keyIsDown(32)){
		bullets.push(Bullet({}));
	}
	player.draw();


	bullets = bullets.filter(function(bullet){
		return bullet.active;
	});
	bullets.forEach(function(bullet){
		bullet.update();
		bullet.draw();
	});

	if(Math.random()<0.05){
		enemies.push(Enemy({}));
	}
	enemies = enemies.filter(function(enemy){
		return enemy.active;
	});
	enemies.forEach(function(enemy){
		enemy.update();
		enemy.draw();
	});

	bullets.forEach(function(bullet){
		enemies.forEach(function(enemy){
			if(collision(enemy, bullet)){
				enemy.active = false;
				bullet.active = false;
				score++;
			}
		});
	});

	enemies.forEach(function(enemy){
		if(collision(enemy, player)){
			enemy.active = false;
			noLoop();
            stroke('black'); 
            fill('black');
			textSize(40);
			text("GAME OVER", 180, 200);
            
            
		}
	});
}