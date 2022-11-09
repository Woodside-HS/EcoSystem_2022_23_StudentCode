class Food1 {
    
    constructor(start, death, ctx, sz) { //start will accept emitter.
    this.loc = new JSVector(start.x, start.y); //recode with JSVector
    this.vel = new JSVector(Math.random()*1-0.5, Math.random()*1-0.5);
    this.acc = 0.0005;
    this.sz = sz; //5
    this.life = Math.random()*2*death+10;
    this.isDead = false;
    this.ctx = ctx;
    this.clr = this.getRandomColor();
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
  
  render(){
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.fillStyle = this.clr;
    ctx.arc(this.loc.x, this.loc.y, this.sz, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  
  bounds() {
    if(this.loc.y>world.dims.bottom || this.loc.y<world.dims.top || this.loc.x>world.dims.right || this.loc.x<world.dims.left){
      this.isDead = true;
    }
  }

  getRandomColor() {
    //  List of hex color values for movers
    let colors = [
        "#25AA34",
        "#18CC2e",
        "#389925",
        "#11AA99",
        "#99CC00",
        "#11FF65"
    ];
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
}