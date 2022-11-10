
class Particle {
    constructor(loc, ctx) {
        let x = loc.x + Math.random() * 150 - 75;
        let y = loc.x + Math.random() * 150 - 75;
        this.loc = new JSVector(x, y);
        this.ctx = ctx;
        this.vel = new JSVector(Math.random() * .1 - .05, Math.random() * .1 - .05);
        this.lifespan = 1100;
        this.lifeLeft = this.lifespan;
        this.sz = 6;
        this.isDead = false;
        this.alpha = 1;
        this.strkClr = "rgba(1, 1, 1, 1)";
        this.fillClr = "rgba(20, 240, 160, " + this.alpha + ")";
    }

    run() {
        this.update();  // base class method
        this.render();  // sub class method
    }

    update() {
        this.lifeLeft--;
        this.alpha = this.lifeLeft / this.lifespan;
        this.strkClr = "rgba(1, 1, 1, " + this.alpha + ")";
        this.fillClr = "rgba(20, 240, 160, " + this.alpha + ")";
        this.loc.add(this.vel);
        ;
        if (this.lifeLeft < 0) {
            this.isDead = true;
        }
    }

    // Render the PointingParticle, which points in the direction of its velocity
    render() {
        let ctx = this.ctx;
        let alpha = this.lifeLeft / this.lifespan;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.strokeStyle = "rgba(1, 1, 1," + alpha + ")";
        ctx.fillStyle = "rgba(10, 200, 120," + alpha + ")";
        ctx.save();
        ctx.translate(this.loc.x, this.loc.y);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.sz * 2, -this.sz);
        ctx.lineTo(-this.sz * 1.5, 0);
        ctx.lineTo(-this.sz * 2, this.sz);
        ctx.closePath();

        ctx.rotate(Math.PI / 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.sz * 2, -this.sz);
        ctx.lineTo(-this.sz * 1.5, 0);
        ctx.lineTo(-this.sz * 2, this.sz);
        ctx.closePath();

        ctx.rotate(Math.PI / 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.sz * 2, -this.sz);
        ctx.lineTo(-this.sz * 1.5, 0);
        ctx.lineTo(-this.sz * 2, this.sz);
        ctx.closePath();

        ctx.rotate(Math.PI / 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(-this.sz * 2, -this.sz);
        ctx.lineTo(-this.sz * 1.5, 0);
        ctx.lineTo(-this.sz * 2, this.sz);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();

    }
}




