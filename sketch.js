const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, base1, base2, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, hitter;
var slingShot;
var score = 0;

function setup() {
  createCanvas(1400,550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(700,height,1400,20);
  base1 = new Ground(720,350,300,20);
  base2 = new Ground(1170,197,300,20);
  box1 = new Box(615,300,70,70);
  box2 = new Box(685,300,70,70);
  box3 = new Box(755,300,70,70);
  box4 = new Box(825,300,70,70);
  box5 = new Box(650,235,70,70);
  box6 = new Box(720,235,70,70);
  box7 = new Box(790,235,70,70);
  box8 = new Box(685,170,70,70);
  box9 = new Box(755,170,70,70);
  box10 = new Box(720,105,70,70);
  box11 = new Box(1135,170,70,70);
  box12 = new Box(1205,170,70,70);
  box13 = new Box(1172,105,70,70);
  hitter = new Paper(100,400,30,30);
  slingShot = new SlingShot(hitter.body,{x:200,y:200});
}

function draw() {
  background(0,150,260);  
  Engine.update(engine);
  ground.display();
  base1.display();
  base2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  hitter.display();
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hitter.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
    Matter.Body.setPosition(hitter.body, {x:200,y:200})
		slingShot.attach(hitter.body);
	}
}