class FoodPS{
    constructor(startLoc, startVel, size){
        this.loc = new JSVector(x, y);
        this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2)
        this.rad = 20;
        this.clr = "#1b8f3a";
        this.particles = [];
        this.loadParticles(10);
    }


    update() {
        for (let i = this.particles.length - 1; i > 0; i--) {
          this.particles[i].run();
          if(!this.particles[i].alive) {
            this.particles.splice(i, 1);
            this.particles.push(new food4(this.loc.x, this.loc.y, 10, this.clr));
          }
        }
    }
    
    checkEdges() {
        if(this.loc.x<0){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.x>canvas.width){
          this.vel.x = -this.vel.x;
        }
        if(this.loc.y>canvas.height){
          this.vel.y = -this.vel.y;
        }
        if(this.loc.y<0){
          this.vel.y = -this.vel.y;
        }
    }

    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x, this.loc.y, this.rad, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke();
    }

    loadParticles(n) {
        for(let i = 0; i < n; i++) {
          this.particles[i] = new Particle(this.loc.x, this.loc.y, 10, this.clr, this.ctx1, this.ctx2)
        }
    }

    run() {
        this.update();
        this.checkEdges();
        this.render();
    }
    
}