class Entity {

  constructor(loc, vel, d, ctx1, worldWidth, worldHeight) {
    //mover properties
    this.loc = loc;
    this.vel = vel;
    this.acc = new JSVector(0, 0);
    this.clr = this.getRandomColor();
    this.diam = d;
    this.ctx1 = ctx1;
    this.wWidth = worldWidth;
    this.wHeight = worldHeight;
  }//++++++++++++++++++++++++++++++++ end mover constructor

  //++++++++++++++++++++++++++++++++ mover methods
  run() {
    this.update();
    this.checkEdges();
    this.render();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(3);
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
    let ctx1 = this.ctx1;
    ctx1.beginPath();
    ctx1.fillStyle = this.clr;
    ctx1.arc(this.loc.x, this.loc.y, this.diam, 0, 2 * Math.PI, false);
    ctx1.fill();
    //  render balls in mini map

  }

  getRandomColor() {
    //  List of hex color values for movers
    let colors = [
      "#7102AB",
      "#ab0256",
      "#0285ab",
      "#02ab1a",
      "#ab5302",
      "#773e26",
      "#ab0256",
      "#257874",
      "#78254e",
      "#787725"
    ];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

}//###############################################  end Entity class
