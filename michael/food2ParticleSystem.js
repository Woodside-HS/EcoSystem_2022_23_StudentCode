class Food2ParticleSystem{
    constructor(loc, ctx) {
        this.ploc = loc;
        this.ctx = ctx;
        this.particles = [];
        this.count = 1000;
    }

    addParticle(){
        this.particles.push(new Food2(this.ploc,this.ctx));
    }

    run(){
        for(let i = 0;i<this.particles.length;i++){
            this.particles[i].run();
        }
        this.isDead();
        if(++this.count%50 === 0 &&  this.particles.length < 10){
            this.addParticle(this.loc, this.ctx); // new particle each time
            this.count = 0;
        }
    }

    isDead(){
        for(let i = this.particles.length-1;i>=0;i--){
            if(this.particles[i].isDead == true){
                this.particles.splice(i,1);
            }
        }
    }

}