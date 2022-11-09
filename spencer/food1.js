class Food1 {
    
    constructor(start, death, ctx, sz) { //start will accept emitter.
    this.loc = new JSVector(start.x, start.y); //recode with JSVector
    this.vel = new JSVector(Math.random()*4-2, Math.random()*4-2);
    this.acc = 0.05;
    this.sz = sz; //5
    this.life = Math.random()*5*death+10;
    this.isDead = false;
    this.ctx = ctx;
    this.clr = "red";
  }
  
  run() {
    this.render();
    this.update();
    this.bounds();
  }
  
  update() {
    if(this.life<=0){
      this.isDead = true;
    }
    else{
    this.loc.add(this.vel);
    this.vel.y+=this.acc;
    this.life--;
    }
  }
  
  render( ){
     this.ctx.beginPath();
     this.ctx.arc(this.loc.x, this.loc.y, this.sz, 0, Math.PI*2);
     this.ctx.closePath();
     this.ctx.strokeStyle = this.clr;
     this.ctx.fillStyle = this.clr;
     this.ctx.fill();
     this.ctx.stroke();
  }
  
  bounds() {
    if(this.loc.y>world.dims.bottom || this.loc.y<world.dims.top || this.loc.x>world.dims.right || this.loc.x<world.dims.left){
      this.isDead = true;
    }
  }
}