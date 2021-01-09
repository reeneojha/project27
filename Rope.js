class Rope{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={

            bodyA:body1,
            bodyB:body2,
            //stiffness:0.04,
            //length:10,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        }

        this.rope=Constraint.create(options);
        World.add(world,this.rope);

        //console.log(options)
    }

    
    display(){

        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        var anchor1=this.pointB+this.offsetX;
        var anchor2=this.pointB+this.offsetY
        

        stroke("white");
        strokeWeight(3);
        line(pointA.x, pointA.y,anchor1,anchor2);

     }
    


}