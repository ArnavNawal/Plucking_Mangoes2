
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,treeImg,stoneImg,mangoImg 

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
	treeImg = loadImage("Plucking mangoes/tree.png")
	stoneImg = loadImage("Plucking mangoes/stone.png")
	mangoImg = loadImage("Plucking mangoes/mango.png")
}

function setup() {
	createCanvas(1500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
    ground = new Ground(750,1100,1500,20)
	//tree = new Tree(1000,650,950,1000)
	
	
	
	mango1 = new Mango(800,350,80)
	mango2 = new Mango(900,550,80)
	mango3 = new Mango(650,450,80)
	mango4 = new Mango(1055,380,80)
	mango5 = new Mango(1200,450,80)
	mango6 = new Mango(1400,550,80)
	mango7 = new Mango(1150,250,80)
	mango8 = new Mango(950,250,80)
	stone = new Stone(150,1000,30)
	chain = new Chain(stone.body,{x:250,y:900})
    Engine.run(engine);
}


function draw() {
	//Engine.update(engine)
  //rectMode(CENTER);
  background(0, 255, 246);
  //tree.display();
  ground.display();
  
 
  image(boyImg,320,1000,250,400)
  
  chain.display();
  
  image(treeImg,1000,650,950,1000)
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //drawSprites();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){
	chain.fly();
}
function detectCollision(lstone,lmango){
   mangoBodyPosition = lmango.body.position
   stoneBodyPosition = lstone.body.position

   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   //console.log("Distance is " + distance)  
   if(distance <= lmango.radius+lstone.radius){
	   console.log("Hi")
	   Matter.Body.setStatic(lmango.body,false)
	   console.log("Done")

   }
}
