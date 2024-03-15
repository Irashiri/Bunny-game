//variables
var bunny;
var bunny_image;
var background;
var back_image;
var red;
var orange;
var carrot;
var cImage;
var oImage;
var rImage;

function preload(){
bunny_image = loadImage("rabbit.png");
back_image = loadImage("garden.png");
cImage = loadImage("carrot.png");
rImage = loadImage("redLeaf.png");
oImage = loadImage("orangeLeaf.png");
}


function setup(){
  createCanvas(600,600);

background = createSprite(300,300,600,600);
background.addImage("garden image",back_image);
background.scale = 1.5;

bunny = createSprite(300,430,30,30);
bunny.addImage("will show rabbit",bunny_image);
bunny.scale = 0.08;



}

//function draw
function draw(){
  
  bunny.x = World.mouseX;

  
spawnFood();
  drawSprites();


}

function spawnFood(){

//create carrot---------------------
  if(frameCount % 60 === 0){

    carrot = createSprite(500,1,30,30);
    carrot.addImage(cImage);
    carrot.scale = 0.2;
    carrot.velocityY = 3;

    carrot.x = Math.round(random(600,1));

    bunny.depth = carrot.depth;

      bunny.depth = bunny.depth+1;
  }

  //create red leaf--------------------
    if(frameCount % 60 === 0){

      red = createSprite(500,1,30,30);
      red.addImage(rImage);
      red.scale = 0.2;
      red.velocityY = 3.5;
      red.scale = 0.05;
      red.x = Math.round(random(600,1));
      bunny.depth = red.depth;

      bunny.depth = bunny.depth+1;
    }

      //create orange leaf-------------------
      if(frameCount % 60 === 0){

        orange = createSprite(500,1,30,30);
        orange.addImage(oImage);
        orange.scale = 0.08;
        orange.velocityY = 3.4;
        orange.x = Math.round(random(600,1));

        bunny.depth = orange.depth;

         bunny.depth = bunny.depth+1;
  }
  }


  




 


