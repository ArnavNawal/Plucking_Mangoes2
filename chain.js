class Chain{
    constructor(bodyA,pointB)
    {
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.005,
            length : 10
        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        if(this.chain.bodyA){
            stroke("black")
        strokeWeight(10)
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }
    fly(){
        this.chain.bodyA=null
    }
}