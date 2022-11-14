class Food2ParticleSystem{
    constructor(loc, ctx) {
        this.ploc = loc;
        this.ctx = ctx;
        this.particles = [];
    }

    run(){
        this.particles.push(new Food2(this.ploc,this.ctx));
        for(let i = 0;i<this.particles.length;i++){
            this.particles[i].run();
        }
        this.isDead();
    }

    isDead(){
        for(let i = this.particles.length-1;i>=0;i--){
            if(this.particles[i].isDead == true){
                this.particles.splice(i,1);
            }
        }
    }

}