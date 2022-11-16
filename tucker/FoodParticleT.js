class FoodParticleT {
    constructor(sLoc,sVel,clr,rad,dday){
        this.loc = new JSVector(sLoc.x,sLoc.y);
        this.loc.x = this.loc.x + Math.random() * 40 - 20;
        this.loc.y = this.loc.y + Math.random() * 40 - 20;  
        this.vel = sVel.copy();
        this.clr = this.getRandomColor();
        this.rad = rad;
        this.isDead = false;
        this.lifeSpan = dday;
        Math.floor(this.lifeSpan);
        
    }
    run() {
        if(this.lifeSpan <= 0){
            this.isDead = true;
        }
        this.update();
        this.render();
        this.lifeSpan--;
        Math.floor(this.lifeSpan);
    }
    update(){
        this.loc.add(this.vel);
    }
    render(){
        let ctx = world.ctxMain;
        ctx.beginPath();
        ctx.font = '12px serif';
        ctx.fillText(this.lifeSpan,this.loc.x,this.loc.y);
        ctx.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
        ctx.fillStyle = this.clr;
        ctx.strokeStyle = this.clr;
        ctx.fill();
        ctx.stroke();
    }
    getRandomColor() {
        //  List of hex color values for movers
        let colors = [
            "#25AA34",
            "#18CC2e",
            "#389925",
            "#11AA99",
            "#99CC00",
            "#11FF65"
        ];
        let index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }
}