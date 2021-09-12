var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,5));
  
  if (World.frameCount %45 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2) {
      greenBalloon();
    } if (select_balloon ==3) {
      blueBalloon();
    } if (select_balloon == 4) {
      pinkBalloon();
    }
  }
    

  drawSprites();
  text("Score"+score,270,30)
  score=score+Math.round(frameCount/60)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var b = createSprite(0,Math.round(random(20, 370)), 10, 10);
 b.addImage(blue_balloonImage);
b.velocityX = 3;
b.lifetime = 150;
 b.scale = 0.1;
}

function greenBalloon() {
  var g = createSprite(0,Math.round(random(20, 370)), 10, 10);
  g.addImage(green_balloonImage);
  g.velocityX = 3;
 g.lifetime = 150;
  g.scale = 0.1;
}

function pinkBalloon() {
  var p= createSprite(0,Math.round(random(20, 370)), 10, 10);
  p.addImage(pink_balloonImage);
  p.velocityX = 3;
 p.lifetime = 150;
 p.scale = 1.1;
}
