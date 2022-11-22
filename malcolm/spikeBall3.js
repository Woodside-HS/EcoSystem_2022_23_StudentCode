class SpikeBall3 {
  constructor(world) {
    this.ctxMain = world.ctxMain;
    this.loc = new JSVector(200, 200);
    this.vX = Math.random() * (1 - -1) + -1;
    this.vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(this.vX, this.vY);
    this.size = 20;
    this.isDead = false;
    this.hp = 100;
    this.lifespan = Math.random() * (100 - 10) + 10;
    this.angle = 0;
  }
  run() {
    this.render();
    this.update();
  }
  render() {
    this.angle += 0.1;
    this.ctxMain.save();
    this.ctxMain.beginPath();
    this.ctxMain.translate(this.loc.x, this.loc.y);
    this.ctxMain.rotate(this.angle);
    this.ctxMain.arc(0, 0, this.size, 0, 2 * Math.PI, false);
    this.ctxMain.moveTo(30, -10);
    this.ctxMain.lineTo(30, 10);
    this.ctxMain.moveTo(-10, 30);
    this.ctxMain.lineTo(10, 30);
    this.ctxMain.moveTo(-30, 10);
    this.ctxMain.lineTo(-30, -10);
    this.ctxMain.moveTo(-10, -30);
    this.ctxMain.lineTo(10, -30);

    this.ctxMain.closePath();
    this.ctxMain.fillStyle = "blue";
    this.ctxMain.strokeStyle = "black";
    this.ctxMain.fill();
    this.ctxMain.stroke();
    this.ctxMain.restore();
  }
  update() {
    this.loc.add(this.vel);
  }
}
