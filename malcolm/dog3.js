class Dog3 {
  constructor(wrld) {
    this.world = wrld;
    this.ctxMain = this.world.ctxMain;
    this.loc = new JSVector(100, 100);
    this.vX = Math.random() * (1 - -1) + -1;
    this.vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(this.vX, this.vY);
    this.color = "#00ab66";
    this.hp = 100;
    this.isDead = false;
    this.lifespan = 50;
    this.count = 0;
  }
  run() {
    this.render();
    this.update();
    this.seek();
    this.healthPoints();
  }
  render() {
    this.ctxMain.save();
    this.ctxMain.beginPath();
    this.ctxMain.translate(this.loc.x, this.loc.y);
    this.ctxMain.moveTo(0, 0);
    this.ctxMain.lineTo(10, 0);
    this.ctxMain.lineTo(10, -10);
    this.ctxMain.lineTo(-10, -10);
    this.ctxMain.lineTo(-10, 10);
    this.ctxMain.lineTo(10, 10);
    this.ctxMain.lineTo(10, 5);
    this.ctxMain.lineTo(0, 5);
    this.ctxMain.closePath();
    this.ctxMain.fillText(this.hp, -5, -20);

    this.ctxMain.fillStyle = this.color;
    this.ctxMain.strokeStyle = "black";
    this.ctxMain.fill();
    this.ctxMain.stroke();
    this.ctxMain.restore();
  }
  update() {
    this.loc.add(this.vel);
  }
  seek() {
    let desiredDist = 50;
    for (let i = 0; i < world.entities[1900].particles.length; i++) {
      let particles = world.entities[1900].particles[i];
      let dist = this.loc.distance(particles.loc);
      if (dist < desiredDist) {
        this.color = "#FF0000";
        let diff = JSVector.subGetNew(particles.loc, this.loc);
        diff.normalize();
        this.vel.add(diff);
        this.vel.limit(2);
        if (dist < 10) {
          this.vel = new JSVector(0, 0);
          particles.hp--;
          this.hp = this.hp + particles.hp;
          if (particles.isDead == true) {
            this.vel.x = this.vX;
            this.vel.y = this.vY;
          }
        }
      }
    }
  }
  healthPoints() {
    if (this.hp === 0) {
      this.isDead = true;
    }
    if (++this.count >= this.lifespan) {
      this.hp--;
      this.count = 0;
    }
  }
}
