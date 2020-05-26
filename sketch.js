const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var Dustbin1,ball;

function setup() {
  createCanvas(800,400);

  Dustbin1 = new Dustbin(700,320,70,110);
  ball = new Ball(100,100);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  Dustbin1.display();
  ball.display();  
  drawSprites();
}