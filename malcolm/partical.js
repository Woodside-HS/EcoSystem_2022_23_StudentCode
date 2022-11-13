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
  }

  run() {
    this.render();
    this.update();
    this.healthPoints();
    this.flock();
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
  flock() {
    let count = 0;
    let csq = 200 * 200; // desiredCoh squard
    let sum = new JSVector(0, 0);
    let steer = new JSVector(0, 0);
    let cohesionForce = new JSVector();
    // let world.entities[1900].particles[] = particles;
    // console.log(world.entities[1900].particles);

    // for (let i = 0; i < world.entities[1900].particles; i++) {
    //   let particles.
    // }
  }
}
