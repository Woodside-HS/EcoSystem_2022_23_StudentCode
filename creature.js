class Creature extends Entity {
   constructor(loc, vel, sz, wrld) {
      super(loc, vel, sz, wrld)
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
      this.statBlock = {//  properties 
         health: 100,
         isDead: false,
         nurishment: 100,
         lifeSpan:30000,
         age:0,
         mate:false,
         pregnant: false,
         numOffspring:1,
         predRank: 5, //  predatory rank 0-10
         herbavor: false,
         maxSpeed: 1,
         scentValue: 100,
         sightValue: 100,
      };
   }//++++++++++++++++++++++++++++++++ end creature constructor

   //++++++++++++++++++++++++++++++++ creature methods
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
      let ctx = this.ctx;
      ctx.beginPath();
      ctx.fillStyle = this.clr;
      ctx.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI, false);
      ctx.fill();
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
}