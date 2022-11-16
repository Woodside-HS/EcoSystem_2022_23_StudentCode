// A system of particles

class FoodPS1 {
    constructor(loc, ctx) {
        this.loc = loc;
        this.ctx = ctx;
        this.count = 333;
        this.particles = [];    // list of particles
    }

    addParticle() {
        // pick a random particle generator for this particle
        this.particles.push(new Particle(this.loc, this.ctx));
    }

    run() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].run();
            if (this.particles[i].isDead) {
                this.particles.splice(i, 1); // remove this particle
            }
        }
        if (++this.count % 111 === 0 && this.particles.length < 15) {
            this.addParticle(this.loc, this.ctx); // new particle each time
            this.count = 0;
        }

    }
}



