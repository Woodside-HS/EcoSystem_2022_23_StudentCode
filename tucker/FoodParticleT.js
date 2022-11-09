class FoodParticleT {
    constructor(sLoc,sVel,clr,rad,dday){
        this.loc = sLoc;
        this.vel = sVel;
        this.clr = clr;
        this.rad = rad;
        this.isDead = false;
        this.lifeSpan = dday
    }
    run() {
        this.update();
        this.render();
        this.lifeSpan--;
        if(lifeSpan <= 0){
            this.isDead = true;
        }
    }
    update(){
        this.loc.add(this.vel);
        if(this.vel.getMagnitude()>0){
            this.vel.setMagnitude(this.vel.getMagnitude()-1);
        } else if(this.vel.getManitude()<0){
            this.vel.setMagnitude(0)
        }
    }
    render(){
        let ctx = world.ctxMain;
        ctx.beginPath();
        ctx.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.fill();
        ctx.stroke();
    }
}