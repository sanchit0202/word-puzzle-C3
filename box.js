class Box {
  constructor(x, y, width, height, imageName) {
    /*
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    */
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width+20;
    this.height = height+20;
    this.image = loadImage(imageName);
    World.add(world, this.body);
  }

  /*
  mouseMove(body){
    Matter.Body.setPosition(body, {x:mouseX, y:mouseY})
  }

  */
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image,pos.x, pos.y, this.width, this.height);
    //pop();
  }
};
