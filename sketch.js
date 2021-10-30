
var player;
var score=0;
var wormGroup;
function preload(){
  wormImage=loadImage("images/worm.png");
  playerImage=loadImage("images/frog.png");
  swampImage=loadImage("images/swampImg.png");
}
function setup() {
createCanvas(600,600);
swamp=createSprite(300,300);
swamp.scale=2.5;
swamp.addImage(swampImage);

player = createSprite(40,550,30,30); 
player.addImage(playerImage);
player.scale=0.5;
wormGroup= new Group();
}

function draw() {
background("black");  
stroke("red")
noFill();
ellipse(100,350,40,30);
player.x= mouseX;
player.y= mouseY;

if(player.x<150 && player.x>90 && player.y<380 && player.y>320 ){
  text("NO CHEATING!!",200,200);
  player.x=30;
  player.y=30;
}
generateWorms();

for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  drawSprites();
  textSize(20);
  text("Worms destroyed: "+score,350,50);
}

function generateWorms(){

if(frameCount % 20===0){
  var worm = createSprite(random(40,380),random(290,380),40,5);
  worm.scale=random(0.1,0.2);
  worm.addImage(wormImage);
  console.log(frameCount);

  worm.shapeColor="green"
  worm.velocityX=random(-6,6);
  worm.velocityY=random(-6,6);
  wormGroup.add(worm);
  }
}
