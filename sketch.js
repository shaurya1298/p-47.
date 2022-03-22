var char, charImg
var obstacle;
var obstacle1,obstacle2,obstacle3;
var ground,groundImg

function preload()
{
charImg = loadImage("character.png.png");
obstacle1 = loadImage("wave 1.png")
obstacle2 = loadImage("wave 2.png")
obstacle3 = loadImage("wave 3.png")
groundImg = loadImage("newGround.png")


}


function setup()

{
    createCanvas(600, 500);
    char = createSprite(81,350,20,50)
    char.addImage(charImg)
    char.scale=0.2;

    ground = createSprite(200,450,width,20)
    ground.addImage(groundImg)
    ground.x = ground.width/2
    ground.velocityX=-10

   
    

    

}
function draw()
{
background(0)  

text(mouseX +" " +mouseY,mouseX,mouseY)

if(keyDown("space")){
    char.velocityX=0
   char.velocityY=-15
    }
  

    char.velocityY = char.velocityY + 0.8

    if (ground.x < 0){
        ground.x = ground.width/2;
      }

      char.collide(ground)
spawnObstacles()
drawSprites()
}

function spawnObstacles()
{

    if(frameCount % 60 === 0) {
        var obstacle = createSprite(600,370,10,40);
        //obstacle.debug = true;
        obstacle.velocityX =-6
        obstacle.scale=0.2
        //generate random obstacles
        var rand = Math.round(random(1,3));
        switch(rand) {
          case 1: obstacle.addImage(obstacle1);
                  break;
          case 2: obstacle.addImage(obstacle2);
                  break;
          case 3: obstacle.addImage(obstacle3);
                  break;
}
 }
}

