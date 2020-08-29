var fixedRect, movingRect


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(400,800,80,50);
  movingRect.shapeColor = "green"
  fixedRect.debug = true
  movingRect.debug = true
  
  movingRect.velocityY=-3
  fixedRect.velocityY=+3
}

function draw() {
  background(255,255,255); 
  //movingRect.x = World.mouseX
  //movingRect.y = World.mouseY

  
bounceOff(movingRect, fixedRect);


  drawSprites();
}


