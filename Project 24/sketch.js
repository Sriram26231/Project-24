
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var ball;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ball = new Ball(420,240,70,70);

	box1 = new Box(100,100,50,50)
	box2 = new Box(200,200,50,50)
	box3 = new Box(300,300,50,50)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ball.display();
  box1.display();
  box2.display();
  box3.display();


  
  drawSprites();
 
}



