const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;
const Render=Matter.Render;

function setup(){
    createCanvas(1300,500)
    engine = Engine.create();
	world = engine.world;

    //grounds
    g1=new Ground(550,400,300,10)//(PYRAMID1BASE)
    g2=new Ground(1000,220,200,10)//(PYRAMID2BASE)
    g3=new Ground(650,495,1300,10)//(MAIN GROUND)

    //pyramid1
    //row1#bottom
    
    b1=new Box(460,380,35,40)
    b2=new Box(490,380,35,40)
    b3=new Box(520,380,35,40)
    b4=new Box(550,380,35,40)
    b5=new Box(580,380,35,40)
    b6=new Box(610,380,35,40)
    b7=new Box(640,380,35,40)
    //row#bottom2
  
    b8=new Box(490,360,35,40)
    b9=new Box(520,360,35,40)
    b10=new Box(550,360,35,40)
    b11=new Box(580,360,35,40)
    b12=new Box(610,360,35,40)
    //row#middle
    
    b13=new Box(520,340,35,40)
    b14=new Box(550,340,35,40)
    b15=new Box(580,340,35,40)
    //row#top2
  
    b16=new Box(535,320,35,40)
    b17=new Box(565,320,35,40)
    //row#top
    
    b18=new Box(550,300,35,40)

    //PYRAMID2
    //row#bottom
   
    b19=new Box(960,200,35,40)
    b20=new Box(995,200,35,40)
    b21=new Box(1015,200,35,40)
    b22=new Box(1030,20035,40)
    //row#middle
    
    b23=new Box(995,180,35,40)
    b24=new Box(1015,180,35,40)
    //row#top
  
    b25=new Box(1005,160,35,40)

    //polygon
    p1=new Polygon(100,300,20)

    s1=new String(p1.body,{x:150,y:300})

    var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

      Render.run(render)
      
      Engine.run(engine);

}

function draw(){
    Engine.update(engine)
   background(0)
   g1.display()
   g2.display()
   g3.display()
   fill(224,149,247)
   b1.display()
   b2.display()
   b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display()
   fill(121,235,125);
   b8.display()
   b9.display()
   b10.display()
   b11.display()
   b12.display()
   fill("lightblue")
   b13.display()
   b14.display()
   b15.display()
   fill("yellow")
   b16.display()
   b17.display()
   fill("pink")
   b18.display() 
   fill(121,235,125);
   b19.display()
   b20.display()
   b21.display()
   b22.display()
   fill("pink")
   b23.display()
   b24.display()
   fill("yellow")
   b25.display()
   p1.display()
   s1.display()

}

function mouseDragged(){
    Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    s1.fly()
}

function keyPressed(){
    if(keyCode===32){
    s1.attach(p1.body);
    }
}
