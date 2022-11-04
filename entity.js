class Entity {
  constructor(loc, vel, sz, wrld) {
    //mover properties
    this.loc = loc;
    this.vel = vel;
    this.acc = new JSVector(0, 0);
    this.clr = this.getRandomColor();
    this.size = sz;
    this.maxSpeed = 1;
    this.ctx = wrld.ctxMain;
    this.wWidth = wrld.dims.width;
    this.wHeight = wrld.dims.height;
  }//++++++++++++++++++++++++++++++++ end Entity constructor

  //++++++++++++++++++++++++++++++++ Entity methods
  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.loc.add(this.vel);
  }

  checkEdges() {
    if (this.loc.x >= world.dims.width / 2 || this.loc.x <= -world.dims.width / 2) {
      this.vel.x *= -1;
    }
    if (this.loc.y >= world.dims.height / 2 || this.loc.y < -world.dims.height / 2) {
      this.vel.y *= -1;
    }
  }

  render() {
    //  render balls in world
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.fillStyle = this.clr;
    ctx.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  getRandomColor() {
    //  List of hex color values for movers
    let colors = [
      "#FFFFFF",
    ];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

}//###############################################  end Entity class
