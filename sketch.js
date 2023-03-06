
var bg,bgImg
var player,playerImg
var bullet,bulletImg
var enemy1,enemy1Img,enemy2,enemy2Img,enemy3,enemy3Img,enemy4,enemy4Img,enemy5,enemy5Img;
var base1,base2,base3,base4,baseImg;

function preload(){
    bgImg=loadImage("Spacebackgroun.jpeg");
    playerImg=loadImage("Player.png")
    enemy1Img=loadImage("enemy1.png")
    enemy2Img=loadImage("enemy2.png")
    enemy3Img=loadImage("enemy3.png")
    enemy4Img=loadImage("enemy4.png")
    enemy5Img=loadImage("enemy5.png")
    baseImg=loadImage("Base.png")
}

function setup(){
    createCanvas(1000,800);
   
    
    player= createSprite(500,740);
    player.addImage(playerImg)
    player.scale=0.15
    
   // enemy1=createSprite()

   base1= createSprite(200,620)
   base1.addImage(baseImg)
   base1.scale=0.7;
   base2= createSprite(400,620)
   base2.addImage(baseImg)
   base2.scale=0.7;
   base3= createSprite(600,620)
   base3.addImage(baseImg)
   base3.scale=0.7;
   base4= createSprite(800,620)
   base4.addImage(baseImg)
   base4.scale=0.7;
    

}

function draw(){
    
    background("black");   
    if(keyDown(RIGHT_ARROW)){
        player.x=player.x+7
    }
    if(keyDown(LEFT_ARROW)){
        player.x=player.x-7
    }
    if(keyWentDown("space")){
        shoot()
        
    }

   

    drawSprites();
}   

function shoot(){
  bullet=createSprite(player.x,740,5,13)
  bullet.shapeColor="white"
 
  bullet.velocityY=-15;

}