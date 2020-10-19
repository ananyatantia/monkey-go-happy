
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,200) 
monkey = createSprite(40,150,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
  ground = createSprite(200,190,6000,10);
    ground.x= ground.width / 2;
  ground.velocityX = - 6 
  
  obstacleGroup = new Group()
  FoodGroup = new Group()
  
}


function draw() {
  background("white")
  if(frameCount % 60 === 0) {
banana = createSprite(560,90,10,10)
  banana.addImage(bananaImage)
  banana.scale = 0.08
    banana.velocityX = -4 
    FoodGroup.add(banana)
    banana.lifetime= 600
  }
  if(frameCount % 100 === 0) {
obstacle = createSprite(560,175,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.scale = 0.08
    obstacle.velocityX = -4 
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 600
  }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space")  ){
     monkey.velocityY = -4
     }

  //monkey.velocityY = monkey.velocityY+0.3
  
  if(monkey.isTouching(obstacle)){
  obstacleGroup.destroyEach()
  }
   if(monkey.isTouching(banana)){
  foodGroup.destroyEach()
  }
  
  text("score "+score,40,40)
  score = score + Math.round(getFrameRate()/60);
    monkey.collide(ground)
  drawSprites()
}






