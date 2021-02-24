class rope{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    length:10,
    stifness:0.01
    
    }
    this.pontB=pointB
    this.rope=Matter.Constraint.create(options)
    World.add(world,this.rope)
   

    
    }
    attach(body){

this.rope.bodyA=body



    }
    fly () {

        this.rope.bodyA=null
        
        
            }
    display(){
        if (this.rope.bodyA){
            var pointA=this.rope.bodyA.position
            var pointB=this.pontB
            strokeWeight(4)
            line (pointA.x,pointA.y,pointB.x,pointB.y)
             
        }
    
    }
    
    }