
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}
groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100, 600, 20, 120);

function setup() {
	createCanvas(800, 700);

	var ball; 

	var ball_options={
		isStatic:false, 
		restituation : 0.3, 
		friction : 0, 
		destiny : 1.2 
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
Matter.Body.applyForce 
	}
}
groundObj=new ground(width/2,670,width,20);
leftSide = new ground(1100, 600, 20, 120);

Matter.bodies.circle(50, 120, 80, 1, 8)