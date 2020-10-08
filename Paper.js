class Paper {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:0.2
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
       var rad = this.body.radius;
      ellipse(pos.x,pos.y,rad);
    }
}