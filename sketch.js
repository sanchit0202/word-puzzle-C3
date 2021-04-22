const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    s = new Box(200,100,30,30,"Images/s.png");
    a = new Box(250,100,30,30,"Images/a.png");
    n = new Box(300,100,30,30,"Images/n.png");
    c = new Box(350,100,30,30,"Images/c.png");
    h = new Box(400,100,30,30,"Images/h.png");
    i = new Box(450,100,30,30,"Images/i.png");
    t = new Box(500,100,30,30,"Images/t.png");
    upperGround = new Ground(400,height/3,1000,20)
    lowerGround = new Ground(400,height,1000,20)

    canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    options={
        mouse : canvasMouse
    }
    
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);
}

function draw(){
    background(0);
    Engine.update(engine);
    s.display();
    a.display();
    n.display();
    c.display();
    h.display();
    i.display();
    t.display();
    upperGround.display();
    lowerGround.display();
}


/*
function mouseDragged(){
    Matter.Body.setPosition(s.body, {x:mouseX, y:mouseY});

}

*/

















   