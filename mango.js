class Mango{
    constructor(x,y,radius){
       var options={
           isStatic : true
       } 
       this.body = Bodies.circle(x,y,radius,options)
       this.radius = radius
       World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        noStroke();
        
        imageMode(CENTER);
        image(mangoImg, this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}