class Box {
  constructor(x,y,width,height){
      var options = {
           isStatic:false,
          'restitution':0.8,
          'friction':0.5,
          'density':0.3
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 6){
      var pos = this.body.position;
      push();
      fill("Green");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity-5;
      tint(255,this.Visiblity);
      pop();
    }
  }
}