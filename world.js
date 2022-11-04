//All creatures and food items are added to entities array

class World {
  constructor() {
    this.cnvMain = document.getElementById('cnv1');
    this.ctxMain = this.cnvMain.getContext('2d');
    this.cnvMainLoc = new JSVector(0, 0);
    this.dims = {
      top: -1500,
      left: -2000,
      bottom: 1500,
      right: 2000,
      width: 4000,
      height: 3000
    }
    this.entities = [];
    this.loadEntities(900, this.ctxMain, this.dims.width, this.dims.height);
    this.entities.push(new Creature(new JSVector(0, 0),
      new JSVector(1, 1),
      10,
      this)
    );
  }

  run() {
    // run the world in animation
    this.ctxMain.fillStyle = 'rgb(0, 0, 55)';//  color of outer border on Main canvas
    this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas
    this.ctxMain.save();
    //  move the main canvas inside of the world
    this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);

    for (let i = 0; i < this.entities.length; i++) {
      this.entities[i].run();
    }

    this.ctxMain.restore();
    // translate cnvMain according to the location of the canvas in the world
    this.ctxMain.save();
    this.ctxMain.translate(this.cnvMainLoc.x * (-1), this.cnvMainLoc.y * (-1));
    //bounds of the world in cnvMain
    this.ctxMain.strokeStyle = "rgba(0, 255, 0, 1)"
    this.ctxMain.beginPath();
    this.ctxMain.lineWidth = 12;
    this.ctxMain.strokeRect(this.dims.left, this.dims.top, this.dims.width, this.dims.height);
    this.ctxMain.stroke();
    this.ctxMain.restore();
  }
  //Load mover array
  loadEntities(numEntities, ctx1, w, h) {

    //  generic entities
    for (let i = 0; i < numEntities; i++) {
      let diam = 3;
      let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
      let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let vel = new JSVector(dx, dy);
      this.entities.push(new Entity(loc, vel, diam, this));
    }
    //  generic creatures
    for (let i = 0; i < 500; i++) {
      let x = Math.random() * this.dims.width - this.dims.width / 2;
      let y = Math.random() * this.dims.height - this.dims.height / 2;
      let loc = new JSVector(x, y);
      this.entities.push(
        new Creature(loc,
          new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2),
          6,
          this)
      );
    }
    //  generic food
    for (let i = 0; i < 500; i++) {
      let x = Math.random() * (this.dims.width-20) - (this.dims.width / 2 - 10);
      let y = Math.random() * (this.dims.height-20) - (this.dims.height / 2 - 10);
      let loc = new JSVector(x, y);
      this.entities.push(
          new Food(loc,
          new JSVector(0, 0),
          6,
          this)
      );
    }
  }
}//++++++++++++++++++++++++++++++  end world constructor








