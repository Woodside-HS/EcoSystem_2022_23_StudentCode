class Creatures3 {
  constructor(wrld) {
    this.world = wrld;
    this.dogs3 = [];
    this.loadDogs(5);
  }
  loadDogs(n) {
    for (let i = 0; i < n; i++) {
      this.addDogs();
    }
  }
  addDogs() {
    this.dogs3.push(new Dog3(this.world));
  }
  run() {
    this.render();
    this.update();
  }
  render() {
    for (let i = 0; i < this.dogs3.length; i++) {
      this.dogs3[i].run();
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
