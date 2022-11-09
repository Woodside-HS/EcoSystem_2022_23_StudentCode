class Particle {
  constructor(loc, sz, wrld) {
    // this.loc = loc;
    let x = Math.random() * 600 - 100;
    let y = Math.random() * 600 - 100;
    this.loc = new JSVector(x, y);
    let vX = Math.random() * (1 - -1) + -1;
    let vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(vX, vY);

    this.size = sz;
    this.maxSize = sz;
    console.log(sz);
    // this.size = 20;
    // this.maxSize = 20;
    this.ctx = wrld;
    this.hp = 100;
    this.count = 0;
    this.isDead = false;
    this.lifespan = Math.random() * (10 - 10) + 10;
  }

  run() {
    this.render();
    this.update();
    this.healthPoints();
    this.makeMore();
  }
  render() {
    let ctxMain = world.ctxMain;
    ctxMain.save();
    ctxMain.beginPath();
    ctxMain.fillText(this.hp, this.loc.x - 5, this.loc.y - 30);
    ctxMain.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    ctxMain.fillStyle = "black";
    ctxMain.strokeStyle = "black";
    ctxMain.fill();
    ctxMain.stroke();
    ctxMain.restore();
  }

  update() {
    // this.loc.add(this.vel);
    this.size = (this.hp * this.maxSize) / 100; // sets the size compared to the hp
    if (this.size <= 1) {
      this.size = 1;
      this.isDead = true;
    }
  }

  healthPoints() {
    if (this.hp <= 0) {
      this.isDead = true;
    }

    if (++this.count >= this.lifespan) {
      this.hp--;
      this.count = 0;
    }
  }

  makeMore() {
    if (this.hp < 50) {
      food3.particle.push(new Particle(this.loc, this.size, this.ctx));
    }
  }
}
