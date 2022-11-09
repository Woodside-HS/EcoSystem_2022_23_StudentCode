class Food3 {
  // properties
  constructor(loc, vel, sz, wrld) {
    this.particle = [];
    this.loadParticles(5, loc, sz, wrld);
    // this.loc = loc;
    // this.size = sz;
    // this.ctx = wrld;
  }
  //  methods
  loadParticles(n, loc, sz, wrld) {
    // loads particles
    for (let i = 0; i < n; i++) {
      this.particle[i] = new Particle(loc, sz, wrld);
    }
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
