let country={
	Hungary:{
		population:9798000,
		growthrate:-0.03,
		height:20,
		color:"#32ff32"
	},
	Slovakia:{
		population:5435000,
		growthrate:0.02,
		height:0,
		color:"#3232ff"

	},
	Czechia:{
		population:10580000,
		growthrate:0.02,
		height:0,
		color:"#ff3232"
	},
	Austria:{
		population:8773000,
		growthrate:0.08,
		height:0,
		color:"#ff6464"
	},
	India:{
		population:1399000000,
		growthrate:0.11,
		height:0,
		color:"#f4e842"
	}

}
let h = 10;

var exc=0;
var d = new Date();

let dat=d.getFullYear();

function setup() {
  createCanvas(1200,600);
  for(let i = 0;i<Object.keys(country).length;i++){
  	if(i!=0){
      if(country[Object.keys(country)[i]].height<=country[Object.keys(country)[i-1]].height){
      	country[Object.keys(country)[i]].height= country[Object.keys(country)[i-1]].height+100;
      }
  }
  }

}
function draw(){
	background(0);
	for(let i = 0;i<Object.keys(country).length;i++){
		
		fill(country[Object.keys(country)[i]].color);
		rect(0,country[Object.keys(country)[i]].height,map(country[Object.keys(country)[i]].population/100000,0,width/2,0,width),50);
		country[Object.keys(country)[i]].population += country[Object.keys(country)[i]].population * country[Object.keys(country)[i]].growthrate;
		fill(255);
		textSize(32);
		text(Object.keys(country)[i]+": "+ Math.round((country[Object.keys(country)[i]].population/1000000)*100)/100,0,country[Object.keys(country)[i]].height+35);
		}
		fill(255);
		textSize(32);
	text(dat,width *0.9,height*0.9);
	if(frameCount%365 ==0){
		dat++;
	}
	

}
