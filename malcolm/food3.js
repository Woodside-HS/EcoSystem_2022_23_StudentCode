class Food3 {
  // properties
  constructor(loc, vel, sz, wrld) {
    this.particles = [];
    this.loc = loc;
    this.vel = vel;
    // this.size = sz;
    this.ctx = wrld.ctxMain;
    this.loadParticles(5);
  }
  //  methods
  loadParticles(n) {
    // loads particles
    for (let i = 0; i < n; i++) {
      this.addParticles();
    }
  }

  addParticles() {
    this.particles.push(new Particle(this.loc, this.ctx));
    console.log(this.particles.length);
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      if (
        this.particles[i].hp == 50 &&
        this.particles.length >= 5 &&
        this.particles.length <= 10
      ) {
        this.particles[i].hp--;
        this.addParticles();
      }
    }
    for (let i = 0; i < this.particles.length; i++) {
      if (this.particles[i].isDead === true) {
        this.particles.splice(i, 1);
      }
    }
  }

  render() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].run();
    }
  }

  getRandomColor() {
    //  List of hex color values for movers
    let colors = [
      "#25AA34",
      "#18CC2e",
      "#389925",
      "#11AA99",
      "#99CC00",
      "#11FF65",
    ];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
}
