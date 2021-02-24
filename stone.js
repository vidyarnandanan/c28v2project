class stone{
    constructor(x,y,radius){
    var options={
       restitution:.5,
       density:1,
    friction:1
    }
    this.body=Matter.Bodies.circle(x, y, radius, options)
    this.image=loadImage("stone.png")
    this.radius=radius
   
    World.add(world,this.body)
    }
    
    display(){
        push ()
        //this.body.position.x=mouseX
        //this.body.position.y=mouseY
     imageMode(CENTER)
       
     image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2)
    
    
    }
    
    }