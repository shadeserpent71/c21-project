
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
    var ball_options={
		restitution:0.3,
		density:1.2,
		isStatic:false
	    
	}
	//Create the Bodies Here.
    ball=Bodies.circle(200,50,20,ball_options);
	World.add(world,ball);
    ground=new Ground(width/2,670,width,20);
	leftSide=new Ground(800,600,20,120);
	rightSide=new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 ground.show();
 leftSide.show();
 rightSide.show();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:81,y:-81});
	}
}

