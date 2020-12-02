
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(100,350);
	ground=new Ground(400,670);
	dust1=new Dustbin(500,609,20,100);
	dust2=new Dustbin(700,609,20,100);
	dust3=new Dustbin(600,650,180,20);

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");	
  Engine.update(engine);
  rectMode(CENTER);
  fill("white");	
  paper.display();
  fill("brown");
  ground.display();
  fill("blue");
  dust1.display();
  dust2.display();
  dust3.display();
  drawSprites();
 
}




