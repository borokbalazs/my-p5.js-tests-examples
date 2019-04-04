let Px;
let Py;

let vel;
let gravity;

let Pspeed=9;

let O=[];
let U=[];
let speed;

let score;
let speedIncrease;
let gap;


function setup(){
  rectMode(CENTER);
  createCanvas(1280,720);
  score=0;
  speed=7;
  O=[
  [width/1,70,true],
  [width/2,70,true]
  ];
  Py=height/2;
  vel=0;
  gravity=1;
  Px=width/5;

  U=[
  [width/2,70,true]
  ]

  O[0][1]=random(40,500);
  O[1][1]=random(40,500);

  gap=250;

  speedIncrease=0.1;


}
function draw(){
    background(150,150,255);
    fill(255,100,100);
    for(var i = 0;i<2;i++){
      rect(O[i][0],height-O[i][1]/2,70,O[i][1]);
      O[i][0]-=speed;
      if(O[i][0]<0){
        O[i][2]=true;
        O[i][0]=width;
        O[i][1]=random(50,600);
        speed+=speedIncrease;
      }
      if(O[i][0]<Px){
        if(O[i][2]==true){
        score++;
        O[i][2]=false;}
      }
      if(Px+20>=O[i][0]-35&&Px-20<=O[i][0]+35&&Py+20>=height-O[i][1]){
        reset();
      }
      
    }
    if(height-O[1][1]-U[0][1]<=gap){
      	O[1][1]=O[1][1]-gap+height-O[1][1]-U[0][1];
      	print(height-O[1][1]-U[0][1]);
      }

      rect(U[0][0],U[0][1]/2,70,U[0][1]);
      U[0][0]-=speed;
      if(U[0][0]<0){
        U[0][2]=true;
        U[0][0]=width;
        U[0][1]=random(40,500);  
      }
      if(Px+20>=U[0][0]-35&&Px-20<=U[0][0]+35&&Py-20<=U[0][1]){
      	reset();
      }

    fill(0,255,0);
    rect(Px,Py,40,40);
    Py+=vel;
    if(!onGround()){
      vel+=gravity;
    }else{
      vel=0;
      Py= height-20;
    }
    Py=constrain(Py,15,height-20);

    if(keyIsDown(39)){
      Px+=Pspeed;
    }if(keyIsDown(37)){
      Px-=Pspeed;
    }
    fill(0);
    textSize(100);
    text(score,10,100);

}
function onGround(){
  if(Py<height){
    return false;
  }else{
    return true;
  }
}
function keyPressed(){
  if(key==" "){
    vel=-20;
  }
}
function reset(){
	score=0;
  speed=7;
  O=[
  [width/1,70,true],
  [width/2,70,true]
  ];
  Py=height/2;
  vel=0;
  gravity=1;
  Px=width/5;
  U=[
  [width/2,70,true]
  ]

}
