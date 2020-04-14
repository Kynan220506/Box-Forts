const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constrait = Matter.Constrait;

var engine,world;
var box1;
var log1;

var box1Img;
var box2Img;

var bg = "images/bg.png";

function preload() {
  getBackgroundImg();
  box1Img = loadImage("images/wood1.png");
  box2Img = loadImage("images/wood2.png");
}

function setup(){
  var canvas = createCanvas(400,1200);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150,305,300,170);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);

  log3 = new log(810,180,300,PI/2);

  box5 = new Box(810,160,70,70);
  log4 = new Log(760,120,150, PI/7);
  log5 = new Log(870,120,150, -PI/7);

  function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    log1.display();

    box3.display();
    box4.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour<=06 && hour>=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}  
}