class Creatures3 {
  constructor(wrld) {
    this.world = wrld;
    this.dogs3 = [];
    this.spikeBall3 = [];
    this.loadDogs(5);
    this.loadSpikes(2);
  }
  loadDogs(n) {
    for (let i = 0; i < n; i++) {
      this.addDogs();
    }
  }
  loadSpikes(n) {
    for (let i = 0; i < n; i++) {
      this.addSpikes();
    }
  }
  addDogs() {
    this.dogs3.push(new Dog3(this.world));
  }
  addSpikes() {
    this.spikeBall3.push(new SpikeBall3(this.world));
  }
  run() {
    this.render();
    this.update();
  }
  render() {
    for (let i = 0; i < this.dogs3.length; i++) {
      // this.dogs3[i].run(); //! commented this out while i make a new creature
    }

    for (let i = 0; i < this.spikeBall3.length; i++) {
      this.spikeBall3[i].run();
    }
  }
  update() {
    for (let i = 0; i < this.dogs3.length; i++) {
      if (this.dogs3[i].isDead) {
        this.dogs3.splice(i, 1);
      }
    }
  }
}
