var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup,bulletGroup
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var gun , bullet , toygunImage , toybulletImage,red
var score = 0;
var play=1;
var end=0;
var gameState

function preload(){
  
  backgroundImage = loadImage("background0.png");
  toybulletImage = loadImage("bullet.png");
  toygunImage = loadImage("toygun.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}


function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  gun = createSprite(355,220,20,50);
  gun.addImage(toygunImage); 
  gun.scale = 0.4;

  
  
  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  bulletGroup= new Group();  
}

function draw() {
 background(0);
  // moving ground
  

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //moving bow
  
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createBullet();  
  }
  
  //creating continous enemies
  var balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (balloon == 1) {
      redBalloon();
    } else if (balloon == 2) {
      greenBalloon();
    } else if (balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
    
      gun.y = World.mouseY

    

  if (bulletGroup.isTouching(redB)) {
    
    redB.destroyEach();
    bulletGroup.destroyEach();
    score=score+6;
  }

  if (bulletGroup.isTouching(greenB)) {
    greenB.destroyEach();
    bulletGroup.destroyEach();
    score=score+5;
  }

  if (bulletGroup.isTouching(blueB)) {
    blueB.destroyEach();
    bulletGroup.destroyEach();
    score=score+4;
  }

  if (bulletGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    bulletGroup.destroyEach();
    score=score+3;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  bullet.addImage(toybulletImage);
  bullet.x = 360;
  bullet.y=gun.y;
  bullet.velocityX = -4;
  bullet.lifetime = 100;
  bullet.scale = 0.06;
  
  
  bulletGroup.add(bullet);
 
   
}
