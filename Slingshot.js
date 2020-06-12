class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1img = loadImage("./sprites/sling1.png");
        this.sling2img = loadImage("./sprites/sling2.png");
        this.sling3img = loadImage("./sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1img,200,20);
        image(this.sling2img,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke(49,23,8);
            if(pointA.x<200){
            line(pointA.x-25, pointA.y, pointB.x-15, pointB.y-30);
            line(pointA.x-25, pointA.y, pointB.x+20, pointB.y-40);
            image(this.sling3img,pointA.x-28, pointA.y-5,20,15);
        }else{
            line(pointA.x+25, pointA.y, pointB.x-15, pointB.y-30);
            line(pointA.x+25, pointA.y, pointB.x+20, pointB.y-40);
            image(this.sling3img,pointA.x+28, pointA.y-5,20,15);
        }
    }
        
 
    }
    
}