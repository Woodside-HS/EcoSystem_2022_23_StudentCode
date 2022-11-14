class FoodParticleT {
    constructor(sLoc,sVel,clr,rad,dday){
        this.loc = new JSVector(sLoc.x,sLoc.y);
        this.loc.x = this.loc.x + Math.random() * 40 - 20;
        this.loc.y = this.loc.y + Math.random() * 40 - 20;  
        this.vel = sVel.copy();
        this.clr = clr;
        this.rad = rad;
        this.isDead = false;
        this.lifeSpan = dday
    }
    run() {
        if(this.lifeSpan <= 0){
            this.isDead = true;
        }
        this.update();
        this.render();
        this.lifeSpan--;
    }
    update(){
        this.loc.add(this.vel);
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