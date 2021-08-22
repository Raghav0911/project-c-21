
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 
var groundobj;
var left;
var right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2 
	}
    ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
 groundobj = new Ground(400,550,800,10);
 left = new Ground(500,500,10,100)
 right = new Ground(600,500,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);
  groundobj.display();
  left.display();
  right.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:57,y:-50})
}


}

