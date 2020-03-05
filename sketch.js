var Engine=Matter.Engine,World=Matter.World,Bodies=Matter.Bodies,engine,world,boxes=[],ground,gSlider,v;
function setup() {
createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
Engine.run(engine);
gSlider=createSlider(0,100,50);
gSlider.position(600,130);
gSlider.input=map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
var options={isStatic: true,restitution: 10,friction: 2}
ground=Bodies.rectangle(600,550,1200,10,options);
World.add(world,ground);}
function mousePressed() {
if (mouseY<550&&mouseY>90) {
boxes.push(new Box(mouseX,mouseY,random(15, 50),random(20,55)));}}
function draw() {
background(25);
var fVal=gSlider.value();
for (var i=0;i<boxes.length;i++){
boxes[i].show();}
noFill();
fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,width,10);
fill(225);
textSize(20);
text("Gravity : "+fVal+" %",575,60);}
function Box(x,y,w,h,options){
var options={friction:0.3,restitution:0.6}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
World.add(world,this.body);
this.show=function () {
var pos=this.body.position;
var angle=this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
strokeWeight(2);
stroke(225);
fill(225,178,102);
rect(0,0,this.w,this.h);
pop();}}
