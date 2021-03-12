
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var bobDiameter;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var world;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof=new Roof(680,50,550,20);

    bobDiameter=40;

	bob1=new Bob(400,400,40);
	bob2=new Bob(450,400,40);
	bob3=new Bob(500,400,40);
	bob4=new Bob(550,400,40);
	bob5=new Bob(600,400,40);
	
	
	var render = Render.create({
		element: document.body,
        engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});





	rope1=new Rope(bob1.body, roof.body,-bobDiameter*1,0);
	rope2=new Rope(bob2.body, roof.body,-bobDiameter*4,0);
	rope3=new Rope(bob3.body, roof.body,-bobDiameter*2,0);
	rope4=new Rope(bob4.body, roof.body,-bobDiameter*3,0);
	rope5=new Rope(bob5.body, roof.body,-bobDiameter*0,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
