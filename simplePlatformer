let Px;
let Py;

let gravity;
let vel;

let speed;

function setup(){
  createCanvas(1280,720);
  noStroke();
  rectMode(CENTER);
  Px=width/8;
  Py=height/2;

  speed=3;

  gravity = 1;
  vel=0;
}
function draw(){
  background(0);
  fill(100);
  rect(Px,Py,30,30);

  Py+=vel;

  if(!onGround()){
    vel+=gravity;
  }else{
    Py=height-15;
    vel=0;
  }

  if(keyIsDown(39)){
    Px+=speed;
  }if(keyIsDown(37)){
    Px-=speed;
  }

  Py=constrain(Py,0+15,height);

}
function onGround(){
  if(Py+15>=height){
    return true;
  }else{
    return false;
  }
}
function keyPressed(){
  if(key==" " && onGround()){
    vel=-25;
  }
}
