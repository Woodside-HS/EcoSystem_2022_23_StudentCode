class Food2ParticleSystem extends Entity {
    constructor(loc, vel, sz, wrld) {
        super(loc, vel, sz, wrld)
        this.particles = [];
    }

    run(){
        this.particles.push(new Food2(loc,wrld));
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