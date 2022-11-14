class Food4 extends Entity {
    // properties
    constructor(loc, vel, sz, wrld) {
        super(loc, vel, sz, wrld);
        this.loc = loc;
        this.vel = vel;
        this.world = wrld;
        this.size = sz;
        this.alive = true;
        this.clr = clr;
        this.health = Math.random() * (10000-1000) + 1000;
        
    
    }
   
    run() {
        this.update();
        this.render();
        this.lifespan();
    }

    update() {
        this.loc.add(this.vel);
        this.health--;
        this.lifespane(this.alive);
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke();    
    }

    lifespan(health){
        this.life = health;
        if (this.life <= 0) {
            this.alive = false;
        }
    }

    getRandomColor() {
        //  List of hex color values for movers
        let colors = [
            rgba(37,170,52,1),
            rgba(24,204,46,1),
            rgba(56,153,37,1),
            rgba(17,170,153,1),
            rgba(153,204,0,1),
            rgba(17,255,101,1)
        ];
        let index = Math.floor(Math.random() * colors.length);
        return colors[index];
    }

}