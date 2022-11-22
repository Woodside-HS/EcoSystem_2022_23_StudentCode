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
    this.showGrid = true;
    this.numRows = 30;
    this.numCols = 40;
    this.rowHeight = this.dims.height / this.numRows;
    this.colWidth = this.dims.width / this.numCols;
   //  calculate the rows and cols of the grid that we want to render
    this.cnvMainRow = (this.cnvMainLoc.y -  this.dims.top)/this.rowHeight;
    this.cnvMainCol = (this.cnvMainLoc.x -  this.dims.left)/this.colWidth;
    this.rowRange = Math.floor(this.cnvMain.height/this.rowHeight);
    this.colRange = Math.floor(this.cnvMain.width/this.colWidth);;

    this.grid = [];
    for (let row = 0; row < this.numRows; row++) {
      this.grid[row] = [];
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row][col] = new Cell(this, this.ctxMain, row, col);
      }
    }

    this.entities = {
      entityB:[],
      entityO:[],
      entityP:[],
      entityG:[]
    };
    // performance -- change the number of entities to see the effect on framerate
    this.loadEntities(1500, this.ctxMain, this.dims.width, this.dims.height);

    // performance
    this.framerate = 60;
    this.framecount = 0;
    // every second (250 ms), see how many times that world.run() has
    // executed.
    setInterval(
      function () {
        world.framerate = world.framecount;
        world.framecount = 0;
      },
      1000
    )

  }

  run() {
    // performance
    this.framecount++;
    // run the world in animation
    this.ctxMain.fillStyle = 'rgb(0, 0, 55)';//  color of outer border on Main canvas
    this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas
    // //+++++++++++++++++++++++++++ Draw all entites
    this.ctxMain.save();

    //  move the main canvas inside of the world
    this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
    //  draw all of the cells
    for (let row = 0; row < this.numRows; row++) {
      for (let col = 0; col < this.numCols; col++) {
        this.grid[row][col].render();
      }
    }
    //  draw the entities
    for (let i = 0; i < this.entities.entityB.length; i++) {//  All food and creatures
      this.entities.entityB[i].run();
    }

    for (let i = 0; i < this.entities.entityO.length; i++) {//  All food and creatures
      this.entities.entityO[i].run();
    }

    for (let i = 0; i < this.entities.entityP.length; i++) {//  All food and creatures
      this.entities.entityP[i].run();
    }

    for (let i = 0; i < this.entities.entityG.length; i++) {//  All food and creatures
      this.entities.entityG[i].run();
    }
    this.ctxMain.restore();

    // // translate cnvMain according to the location of the canvas in the world
    this.ctxMain.save();
    this.ctxMain.translate(this.cnvMainLoc.x * (-1), this.cnvMainLoc.y * (-1));
    //bounds of the world in cnvMain
    this.ctxMain.strokeStyle = "rgba(0, 140, 240, 1)"
    this.ctxMain.beginPath();
    this.ctxMain.lineWidth = 12;
    this.ctxMain.strokeRect(this.dims.left, this.dims.top, this.dims.width, this.dims.height);
    this.ctxMain.stroke();
    this.ctxMain.restore();

    // // performance  show framerate
    this.ctxMain.font = "20px  bold";
    this.ctxMain.fillStyle = "orange";
    let fps = this.framerate + " FPS";  // frames per second
    this.ctxMain.fillText(fps, 20, this.cnvMain.height - 105);
    this.ctxMain.fillText("Rows = " + this.numRows, 20, this.cnvMain.height - 130);
    this.ctxMain.fillText("Cols = " + this.numCols, 20, this.cnvMain.height - 155);
    let numEnts = this.entities.entityB.length + this.entities.entityP.length + this.entities.entityO.length+ this.entities.entityG.length;
    this.ctxMain.fillText("Ents = " + numEnts, 20, this.cnvMain.height - 85);
  }

  //Load mover array
  loadEntities(numEntities, ctx1, w, h) {

    //  Blue entities
    for (let i = 0; i < numEntities; i++) {
      let diam = 3;
      let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
      let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let vel = new JSVector(dx, dy);
      this.entities.entityB.push(new EntityB(loc, vel, diam, this));
    }
  //  Orange entities
    for (let i = 0; i < numEntities; i++) {
      let diam = 3;
      let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
      let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let vel = new JSVector(dx, dy);
      this.entities.entityO.push(new EntityO(loc, vel, diam, this));
    }
  //  Pink entities
    for (let i = 0; i < numEntities; i++) {
      let diam = 3;
      let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
      let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let vel = new JSVector(dx, dy);
      this.entities.entityP.push(new EntityP(loc, vel, diam, this));
    }
  //  Green entities
    for (let i = 0; i < numEntities; i++) {
      let diam = 3;
      let x = Math.random() * (this.dims.width - 2 * diam) + diam - this.dims.width / 2;
      let y = Math.random() * (this.dims.height - 2 * diam) + diam - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 2 - 1;
      let dy = Math.random() * 2 - 1;
      let vel = new JSVector(dx, dy);
      this.entities.entityG.push(new EntityG(loc, vel, diam, this));
    }
    
  }//++++++++++++++++++++++++++++  load entities


}//++++++++++++++++++++++++++++++  end world constructor
