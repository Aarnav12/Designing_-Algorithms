var fisedRect,movingRect;

function setup() {
  createCanvas(2000,1000);
  fixedRect = createSprite(400,700,70,50);
  movingRect = createSprite(500,600,50,70);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

   movingRect.x =  World.mouseX;
   movingRect.y = World.mouseY;

   if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
     fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red";
   }
   else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
   }

  drawSprites();
}