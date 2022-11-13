class Dog3 {
  constructor(wrld) {
    this.world = wrld;
    this.ctxMain = this.world.ctxMain;
    let x = Math.random() * (700 - 100);
    let y = Math.random() * (600 - 100);
    this.loc = new JSVector(x, y);
    this.vX = Math.random() * (1 - -1) + -1;
    this.vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(this.vX, this.vY);
    this.color = "#00ab66";
    this.hp = 100;
    this.isDead = false;
    this.lifespan = 50;
    this.count = 0;
    this.angle = 0; // anlge of the dog
  }
  run() {
    this.render();
    this.update();
    this.seek();
    this.healthPoints();
    this.checkEdges();
  }
  render() {
    this.ctxMain.save();
    this.ctxMain.beginPath();
    this.ctxMain.translate(this.loc.x, this.loc.y);
    this.ctxMain.fillText(this.hp, -5, -20);
    this.ctxMain.rotate(this.angle);
    this.ctxMain.moveTo(-5, -10);
    this.ctxMain.lineTo(20, 0);
    this.ctxMain.lineTo(-5, 10);
    this.ctxMain.lineTo(0, 0);
    this.ctxMain.closePath();

    this.ctxMain.fillStyle = this.color;
    this.ctxMain.strokeStyle = "black";
    this.ctxMain.fill();
    this.ctxMain.stroke();
    this.ctxMain.restore();
  }
  update() {
    this.loc.add(this.vel);
    this.angle = this.vel.getDirection();
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
          // particles.hp--;
          this.hp = this.hp + particles.hp--;
          if (particles.isDead == true || diff > 10) {
            this.vel.x = this.vX;
            this.vel.y = this.vY;
            this.color = "#00ab66";
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
  checkEdges() {
    let dims = world.dims;
    // if (this.loc.x > dims.right) this.vel.x = -this.vel.x;
    // if (this.loc.x < dims.left) this.vel.x = -this.vel.x;
    // if (this.loc.y > dims.bottom) this.vel.y = -this.vel.y;
    // if (this.loc.y < dims.top) this.vel.y = -this.vel.y;
    //! TEMP delete later &&&&&&&&&&&&&&&&
    if (this.loc.x > 800) this.vel.x = -this.vel.x;
    if (this.loc.x < 0) this.vel.x = -this.vel.x;
    if (this.loc.y > 600) this.vel.y = -this.vel.y;
    if (this.loc.y < 0) this.vel.y = -this.vel.y;
    //! TEMP delete later &&&&&&&&&&&&&&&&
  }
}
