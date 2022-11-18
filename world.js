//All creatures and food items are added to entities array

class World {

  //  Commit 1: 221109
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
    //  set up dimensions for cells
    this.numCols = 100;
    this.numRows = 100;
    this.cellWidth = Math.floor(this.dims.width / this.numCols);
    this.cellHeight = Math.floor(this.dims.height / this.numRows);
    this.grid = [];
    this.loadGrid();
    this.entities = [];
    this.loadEntities(90, this.ctxMain, this.dims.width, this.dims.height);

  }

  run() {
    // run the world in animation
    this.ctxMain.fillStyle = 'rgb(0, 0, 55)';//  color of outer border on Main canvas
    this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas
    //+++++++++++++++++++++++++++ Draw all entities
    this.ctxMain.save();

    
    //update and render cells
    for(let row = 0; row < this.grid.length; row++){
      for( let col = 0; col < this.grid[row].length; col++){
          this.grid[col][row].run();
      }
    }
    this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
    //update and render entities
    for (let i = 0; i < this.entities.length; i++) {//  All food and creatures
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
  //  create a grid of cell objects
  loadGrid() {
    for (let i = 0; i < this.numCols; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.numRows; j++) {
        this.grid.push(new Cell(this, i, j));
      }
    }
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
      let x = Math.random() * (this.dims.width - 20) - (this.dims.width / 2 - 10);
      let y = Math.random() * (this.dims.height - 20) - (this.dims.height / 2 - 10);
      let loc = new JSVector(x, y);
      this.entities.push(
        new Food(loc,
          new JSVector(0, 0),
          6,
          this)
      );
    }
  }//++++++++++++++++++++++++++++  load entities


}//++++++++++++++++++++++++++++++  end world constructor








