class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.visibility=255;
        World.add(world,this.body)
        
    }

    display(){

        if(this.body.speed<4){
            var pos=this.body.position;
            var ang=this.body.angle
            push()
            translate(pos.x,pos.y)
            rotate(ang)
            rectMode(CENTER);
            rect(0,0,this.width,this.height)
            pop()
          }
          else{
            World.remove(world,this.body)
            push()
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
            pop()
          }

    }

}