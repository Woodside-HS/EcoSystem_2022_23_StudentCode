class Creature2 {
    constructor(ctx) {
        this.loc = new JSVector(100, 100);
        this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
        this.acc = new JSVector(0, 0);
        this.rad = 30;
        this.ctx = ctx;
    }

    run() {
        this.render();
        this.update();
    }

    update() {
        this.loc.add(this.vel);
        for(let i = 0;i<world.entities.length;i++)
            this.acc = JSVector.subGetNew(world.entities[3].loc,this.loc);
            this.acc.normalize();
            this.acc.multiply(.5);
            this.vel.limit(3);
            this.vel.add(this.acc);
    }

    render() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.translate(this.loc.x, this.loc.y);
        this.ctx.rotate(this.vel.getDirection());
        this.ctx.moveTo(this.rad, 0);
        this.ctx.lineTo(0, this.rad / 2);
        this.ctx.lineTo(this.rad - 20, 0);
        this.ctx.lineTo(0, -this.rad / 2);
        this.ctx.strokeStyle = "green";
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.stroke()
        this.ctx.closePath();
        this.ctx.restore();
    }
}
