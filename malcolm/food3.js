class Food3 {
  // properties
  constructor(loc, vel, sz, wrld) {
    this.particles = [];
    this.loadParticles(5);
    this.loc = loc;
    this.vel = vel;
    this.size = sz;
    this.ctx = wrld.ctxMain;
  }
  //  methods
  loadParticles(n) {
    // loads particles
    for (let i = 0; i < n; i++) {
      this.addParticle();
    }
  }

  addParticle(){
    this.particles.push()
  }

  run() {
    this.update();
    this.render();
  }

  update() {
    for (let i = 0; i < this.particle.length; i++) {
      if (this.particle[i].isDead === true) {
        this.particle.splice(i, 1);
      }
    }
  }

  render() {
    for (let i = 0; i < this.particle.length; i++) {
      this.particle[i].run();
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
