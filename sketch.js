var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb;
var coin; 
var energyDrink;
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png")
  coinImg = loadImage("coin.png")
  energyDrinkImg=loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
   
bomb= createSprite(80,200,30,30);
bomb.scale=0.10
bomb.addImage("bomb.png",bombImg);
 
coin=createSprite(200,100,30,30);
coin.scale = 0.5;
coin.addImage("coin.png",coinImg)

energyDrink = createSprite(300,150,30,30);
energyDrink.scale = 0.10;
energyDrink.addImage("energyDrink.png",energyDrinkImg)

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;



rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = width/2;
  }



if(path.y > 400 ){path.y =width /2;}
  
  drawSprites();
}
