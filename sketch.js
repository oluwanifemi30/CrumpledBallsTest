
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function preload(){
dustbinImg= loadImage("dustbin.png")
paperImg= loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	
        ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120); 
	rightSide = new Ground(1270,600,10,120); 
	bottomSide = new Ground(1190,650,150,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  ground.display();
leftSide.display();
rightSide.display();
bottomSide.display();
 imageMode(CENTER);
image(paperImg,ball.position.x,ball.position.y,radius,radius)
image(dustbinImg, 1185, 570, 200,200)
 
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





