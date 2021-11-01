
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density: 1.2

	}
	ball= Bodies.circle(260, 100, 40, ball_options);
	World.add(world,ball);

	g1= new Ground(width/2, 670, width, 20);
	leftg= new Ground(1100,600,20,120);
	rightg= new Ground(1350,600,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40,40);
  g1.display();
  leftg.display();
  rightg.display();

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:90,y:-90})
	}

}



