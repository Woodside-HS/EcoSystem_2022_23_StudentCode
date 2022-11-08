
class Particle {
    constructor(loc, ctx) {
        let x = loc.x + Math.random() * 150 - 75;
        let y = loc.x + Math.random() * 150 - 75;
        this.loc = new JSVector(x, y);
        this.ctx = ctx;
        this.vel = new JSVector(Math.random() * .1 - .05, Math.random() * .1 - .05);
        this.lifespan = 1100;
        this.lifeLeft = this.lifespan;
        this.radius = 4;
        this.isDead = false;
        this.alpha = 1;
        this.strkClr = "rgba(1, 1, 1, " + this.alpha + ")";
        this.fillClr = "rgba(20, 200, 120, " + this.alpha + ")";
    }

    run() {
        this.update();  // base class method
        this.render();  // sub class method
    }

    update() {
        this.lifeLeft--;
        this.alpha = this.lifeLeft / this.lifespan;
        this.fillClr = "rgba(20, 200, 120, " + this.alpha + ")";
        this.loc.add(this.vel);
        ;
        if (this.lifeLeft < 0) {
            this.isDead = true;
        }
    }

    // Render the PointingParticle, which points in the direction of its velocity
    render() {
        let ctx = this.ctx;
        ctx.strokeStyle = this.strkClr;
        ctx.fillStyle = this.fillClr;

        ctx.save();

        ctx.translate(this.loc.x, this.loc.y);

        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(this.radius * 2, 0);
        ctx.lineTo(-this.radius * 2, -this.radius);
        ctx.lineTo(-this.radius * 2, this.radius)
        ctx.closePath();

        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(this.radius * 2, 0);
        ctx.lineTo(-this.radius * 2, -this.radius);
        ctx.lineTo(-this.radius * 2, this.radius)
        ctx.closePath();
        ctx.fill();
        // ctx.stroke();

        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(this.radius * 2, 0);
        ctx.lineTo(-this.radius * 2, -this.radius);
        ctx.lineTo(-this.radius * 2, this.radius)
        ctx.closePath();
        ctx.fill();
        // ctx.stroke();

        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(this.radius * 2, 0);
        ctx.lineTo(-this.radius * 2, -this.radius);
        ctx.lineTo(-this.radius * 2, this.radius)
        ctx.closePath();
        ctx.fill();
        // ctx.stroke();

        ctx.rotate(Math.PI / 2);
        ctx.beginPath();
        ctx.moveTo(this.radius * 2, 0);
        ctx.lineTo(-this.radius * 2, -this.radius);
        ctx.lineTo(-this.radius * 2, this.radius)
        ctx.closePath();
        ctx.fillStyle = this.fillClr;
        ctx.fill();
        ctx.restore()
          // Fill path
       
        

    }
}




