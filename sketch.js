
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bob;
var rope;
var rope2, rope3,rope4,rope5;
var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var platform; 
var bobDiameter;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	roof = new Roof(400,40,640,50);
	bob1 = new Bob(320,456,70,71);
	bob2 = new Bob(320,456,70,71);
	bob3 = new Bob(320,456,70,71);
	bob4 = new Bob(320,456,70,71);
	bob5 = new Bob(320,456,70,71);
	
	rope = new Rope(bob1.body,{x:240,y:40});
	rope2 = new Rope(bob2.body,{x:310,y:40});
	rope3 = new Rope(bob3.body,{x:380,y:40});
	rope4 = new Rope(bob4.body,{x:450,y:40});
	rope5 = new Rope(bob5.body,{x:520,y:40});

    
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background("turquoise");
  	  roof.display();
      bob1.display(); 
	  bob2.display(); 
	  bob3.display(); 
	  bob4.display(); 
	  bob5.display(); 
	  rope.display();
	  rope2.display();
	  rope3.display();
	  rope4.display();
	  rope5.display();

	
	  drawSprites();
}

function mouseDragged(){
   
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    bob1.fly();
    //gameState = "launched";
}
function keyPressed(){
	if(keyCode === 38){
		bob1.trajectory = [];
        Matter.Body.setPosition(bob1.body, {x: 200, y:50});
       
	}


}