class Particle {
  constructor(loc, wrld) {
    // this.loc = loc;
    let x = Math.random() * (800 - 0) + -0;
    let y = Math.random() * (600 - 0) + -0;
    this.loc = new JSVector(x, y);
    let vX = Math.random() * (1 - -1) + -1;
    let vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(vX, vY);

    this.size = 1;
    this.maxSize = 20;
    this.ctx = wrld;
    this.hp = Math.floor(Math.random() * (100 - 50) + 50); //health points
    this.count = 0;
    this.isDead = false;
    this.lifespan = Math.random() * (100 - 10) + 10;

    this.maxSpeed = 2;
    this.maxForce = 2;
    this.flockMult = 2;
  }

  run() {
    this.render();
    this.update();
    this.healthPoints();
    this.flock();
    this.checkEdges();
  }
  render() {
    let ctxMain = world.ctxMain;
    // ctxMain.save();
    ctxMain.beginPath();
    ctxMain.fillText(this.hp, this.loc.x - 5, this.loc.y - 30);
    ctxMain.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    ctxMain.fillStyle = "black";
    ctxMain.strokeStyle = "black";
    ctxMain.fill();
    ctxMain.stroke();
  }

  update() {
    // this.vel.add(this.flock());
    this.loc.add(this.vel);
    // console.log(this.flock());
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
  flock() {
    let count = 0;
    let DcSq = 200 * 200; // desiredCoh squard
    let sum = new JSVector(0, 0);
    let steer = new JSVector(0, 0);
    let cohesionForce = new JSVector(0, 0);
    // let world.entities[1900].particles[] = particles;
    let particles = world.entities[1900].particles;
    // console.log(world.entities[1900].particles);

    for (let i = 0; i < particles.length; i++) {
      let other = particles[i];
      let dist = other.loc.distanceSquared(this.loc);
      if (this !== other && dist < DcSq) {
        let diff = JSVector.subGetNew(other.loc, this.loc);
        diff.normalize();
        sum.add(diff);
        count++;
      }
      if (count > 0) {
        sum.normalize();
        sum.multiply(this.maxSpeed);
        let steer = JSVector.subGetNew(sum, this.vel);
        steer.limit(this.maxForce);
        cohesionForce = steer;
        // console.log(steer);
      }
    }
    return cohesionForce;
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
