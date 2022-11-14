class Creature2 {
    constructor(ctx) {
        this.loc = new JSVector(100, 100);
        this.vel = new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2);
        this.acc = new JSVector(0, 0);
        this.rad = 70;
        this.ctx = ctx;
    }

    run() {
        this.render();
        this.update();
        //this.checkEdges();
    }

    update() {
        this.loc.add(this.vel);
    }

    render() {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.translate(this.loc.x, this.loc.y);
        this.ctx.rotate(this.vel.getDirection());
        this.ctx.moveTo(this.rad, 0);
        this.ctx.lineTo(0, this.rad / 2);
        this.ctx.lineTo(this.rad - 50, 0);
        this.ctx.lineTo(0, -this.rad / 2);
        this.ctx.strokeStyle = this.clr;
        this.ctx.fillStyle = this.clr;
        this.ctx.fill();
        this.ctx.stroke()
        this.ctx.closePath();
        this.ctx.restore();
    }
}
