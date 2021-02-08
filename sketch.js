const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superman
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
 superman = new Superman(200,200)
 
}

function draw() {
background(0);
Engine.update(engine)
superman.display()
mouseDragged()
}
function mouseDragged() {
Matter.Body.setPosoition(hero.body,{x:mouseX,y:mouseY})

} 
