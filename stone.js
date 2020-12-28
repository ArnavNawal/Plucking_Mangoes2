class Stone{
  constructor(x,y,radius){
      var options={
          isStatic : false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
  this.body = Bodies.circle(x,y,radius,options)
  this.radius = radius
  World.add(world, this.body)
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    noStroke();
    
    imageMode(CENTER);
    image(stoneImg, this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
  }
}