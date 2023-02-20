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
    this.timeCount = 0;
    this.startTime;
    this.endTime;
    this.entities = {
      creature1: [],
      creature2: [],
      food1: [],
      food2: [],
      ps: [],
      flocks: [],
    }
    this.numCols = 10;
    this.numRows = 10;
    this.colWidth = this.dims.width/this.numCols;
    this.rowHeight = this.dims.height/this.numRows;
    this.loadCells();
    this.loadEntities(90, this.ctxMain, this.dims.width, this.dims.height);
  }

  run() {

    // run the world in animation
    this.ctxMain.fillStyle = 'rgb(0, 0, 55)';//  color of outer border on Main canvas
    this.ctxMain.clearRect(0, 0, this.cnvMain.width, this.cnvMain.height);//  clear the canvas
    //+++++++++++++++++++++++++++ Draw all entites
    this.ctxMain.save();
    //  move the main canvas inside of the world
    this.ctxMain.translate(-this.cnvMainLoc.x, -this.cnvMainLoc.y);
    for (let i = 0; i < this.entities.creature1.length; i++) {//  All food and creatures
      this.entities.creature1[i].run();
    }

    for (let i = 0; i < this.entities.food1.length; i++) {//  All food and creatures
      this.entities.food1[i].run();
    }

    for (let i = 0; i < this.entities.ps.length; i++) {//  All food and creatures
      this.entities.ps[i].run();
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

  loadCells(){
    
  }

  //Load mover array
  loadEntities(numEntities, ctx1, w, h) {
    //++++++++++++++++++++++++++  Generic Creatures
    for (let i = 0; i < numEntities; i++) {
      let x = Math.random() * this.dims.width - this.dims.width / 2;
      let y = Math.random() * this.dims.height - this.dims.height / 2;
      let loc = new JSVector(x, y);
      let dx = Math.random() * 4 - 2;
      let dy = Math.random() * 4 - 2;
      let vel = new JSVector(dx, dy);
      this.entities.creature1.push(new Creature(loc, vel, 9, this.ctxMain, this));
      //++++++++++++++++++++++++++  Simple Food 
      x = Math.random() * this.dims.width - this.dims.width / 2;
      y = Math.random() * this.dims.height - this.dims.height / 2;
      loc = new JSVector(x, y);
      this.entities.food1.push(new Food(loc, 12, this.ctxMain, this));
    }
    //++++++++++++++++++++++++++  Food ps
    let location = new JSVector(300, 300);
    this.entities.ps.push(new FoodPS1(location, this.ctxMain, this));
  }//++++++++++++++++++++++++++++  load entities
}//++++++++++++++++++++++++++++++  end world constructor








