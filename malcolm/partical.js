class Particle {
  constructor(loc, sz, wrld) {
    this.loc = loc;
    this.size = sz;
    this.ctx = wrld;
    console.log("still here");
  }

  run() {
    this.render();
  }
  render() {}
}
