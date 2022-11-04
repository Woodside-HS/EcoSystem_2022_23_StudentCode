class Food extends Entity {
    // properties
    constructor(loc, vel, sz, wrld) {
        super(loc, vel, sz, wrld)
        this.loc = loc;
        this.clr =  this.getRandomColor();
        this.ctx = wrld.ctxMain;
        this.size = sz;
        this.wWidth = wrld.dims.width;
        this.wHeight = wrld.dims.height;
        this.statBlock = {//  properties 
           health: 100,
           nurishment: 100,
        };
    }
    //  methods
    run() {
        this.update();
        this.render();
     }

     update() {
       
            
     }
     
     render() {
        let ctx = this.ctx;
        ctx.save();
            ctx.translate(this.loc.x, this.loc.y);
            ctx.rotate( -Math.PI ); //offset 90 degrees
            ctx.beginPath();
                ctx.strokeStyle = this.clr;
                ctx.fillStyle = this.clr;
                ctx.moveTo(0, -this.size);
                ctx.lineTo(-this.size, this.size);
                ctx.lineTo(0, 0);
                ctx.lineTo(this.size, this.size);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        ctx.restore();
     }
  
     getRandomColor() {
        //  List of hex color values for movers
        let colors = [
           "#25AA34",
           "#58CC2e",
           "#3S8FF25"
        ];
        let index = Math.floor(Math.random() * colors.length);
        return colors[index];
     }

}