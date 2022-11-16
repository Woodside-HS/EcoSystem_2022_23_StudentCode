class Food1 {
    
    constructor(start, death, ctx, sz) { //start will accept emitter.
    this.loc = new JSVector(start.x + Math.random()*200-100, start.y + Math.random()*200-100); //recode with JSVector
    this.vel = new JSVector(Math.random()*0.5-0.25, Math.random()*0.5-0.25);
    this.acc = 0;
    this.sz = sz; //5
    this.life = Math.random()*30*death+30;
    this.isDead = false;
    this.ctx = ctx;
    this.clr = this.getRandomColor();
    this.dying = false;
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

  die(){
    this.clr = "black";
    if(!this.dying){
      this.life = this.sz;
      this.dying = true;
    }
    this.sz = this.life;
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