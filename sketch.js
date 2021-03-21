var rocket, rocketImg;
var asteroid,asteroidImg;
var Background, BackgroundImg;
var lazer,lazerImg;

function preload() {
  BackgroundImg = loadImage("images/star background 4.jpg");
  rocketImg = loadImage("images/Rocket.png");
  lazerImg = loadImage("images/LAZER.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  Background = createSprite(displayWidth/2,displayHeight/2);
  Background.addImage("Scene", BackgroundImg);
  Background.scale = 4.6;
  Background.y = Background.height/2;

  //create rocket

  rocket = createSprite(displayWidth/2,displayHeight - 150);
  rocket.addImage("player", rocketImg);
  rocket.scale = 0.4;

}

function draw() {
  background("Blue"); 
  
  //moving background

  Background.velocityY = 3;

 if (Background.y > (displayHeight - 300)) {
    Background.y = Background.height/2;
 }
  Rocket();
  
  drawSprites();
}