class Ground{
constructor(x,y,w,h) {
var options = {isStatic: true}
this.body=Bodies.rectangle(x,y,w,h,options);
this.w=600; 
this.h=50;
World.add(world, this.body);}
display(){
var pos =this.body.position;
rectMode(CENTER);
fill(0);
rect(pos.x, pos.y, this.w,this.h);
noFill();
fill("brown");
rectMode(CENTER);
rect(ground.position.x, ground.position.y, width, 10);}};