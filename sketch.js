
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof(width/2,100,400,15);
	
	//bob1= new Bob(100,300,50);
	rope1=new Rope(bob1.body,roof.body,bob1/2,0);

	bob3= new Bob(300,300,50);
	rope3=new Rope(roof.body,bob3.body,25,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);s
  background("black");

  bob3.display();
  roof.display();
  rope3.display();
  //bob1.display();
  //rope1.display();
  console.log(rope3)
  
  drawSprites();
 
}