class Dog3 {
  constructor(wrld) {
    this.world = wrld;
    this.ctxMain = this.world.ctxMain;
    this.loc = new JSVector(100, 100);
    let vX = Math.random() * (1 - -1) + -1;
    let vY = Math.random() * (1 - -1) + -1;
    this.vel = new JSVector(vX, vY);
  }
  run() {
    this.render();
    this.update();
    this.seek();
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

    this.ctxMain.fillStyle = "#bd04bd";
    this.ctxMain.strokeStyle = "black";
    this.ctxMain.fill();
    this.ctxMain.stroke();
    this.ctxMain.restore();
  }
  update() {
    this.loc.add(this.vel);
  }
  seek() {
    // for (let i = 0; i < world.entities.length; i++) {
    //   let dist = new JSVector.subGetNew(this.loc, world.entities[i].);
    // }
  }
}
