var toyota
var wall
var weight
var toyotaWeight;
var speed;
var score;
function setup() {
  createCanvas(800,400);
  toyota=createSprite(200,200,10,10);
  toyota.shapeColor="blue";

  wall=createSprite(500,200,20,100);
  wall.shapeColor="black";
}

function draw() {
  background(255,255,255);  
  toyotaWeight=weight;
  weight= Math.round(random(100,1000));
speed=Math.round(random(3,10));
toyota.velocityX=speed;
if(myIsTouching(wall,toyota)){
score=(0.5*toyotaWeight*speed*speed)/22500;
console.log(score);
}
//myIsTouching();
  drawSprites();
}



function myIsTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
 
  return(true);
}
else {
  //ob1.shapeColor = "green";
  //ob2.shapeColor = "green";
  return(false);
}
}

