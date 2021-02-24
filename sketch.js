
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
treeimg=loadImage("tree.png")	
boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground1=new ground(400,680,800,10)
stone1=new stone(200,200,20)
rope1=new rope(stone1.body,{x:100,y:595})
mango1=new mango(400,400,50,50)
mango2=new mango(500,300,50,50)
mango3=new mango(600,300,50,50)
mango4=new mango(600,400,50,50)
mango5=new mango(500,400,50,50)
mango6=new mango(700,350,50,50)
mango7=new mango(660,400,50,50)
mango8=new mango(700,450,50,50)
mango9=new mango(750,450,50,50)
mango10=new mango(750,400,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(treeimg,350,240,450,450)
  image(boyimg,70,570,150,150)
  ground1.display()
  
  rope1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  stone1.display()
  detectcollision(mango1,stone1)
  detectcollision(mango2,stone1)
  detectcollision(mango3,stone1)
  detectcollision(mango4,stone1)
  detectcollision(mango5,stone1)
  detectcollision(mango6,stone1)
  detectcollision(mango7,stone1)
  detectcollision(mango8,stone1)
  detectcollision(mango9,stone1)
  detectcollision(mango10,stone1)

  drawSprites();
 
}
function mouseDragged(){

  Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY})


}
function mouseReleased(){

  rope1.fly()
}
function detectcollision(Mango,Stone){
var distance=dist(Mango.body.position.x,Mango.body.position.y,Stone.body.position.x,Stone.body.position.y)
if(distance<=Mango.width+Stone.radius){

  Matter.Body.setStatic(Mango.body, false)


}

}

function keyPressed(){

if (keyCode===32){

  Matter.Body.setPosition(stone1.body, {x:100,y:595})
  rope1.attach(stone1.body)

}

}