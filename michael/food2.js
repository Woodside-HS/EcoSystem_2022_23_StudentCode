class Food2{
    // properties
    constructor(loc, ctx) {
        this.loc = new JSVector(loc.x,loc.y);
        this.vel = new JSVector(Math.random()*2-1,Math.random()*2-1);
        this.acc = new JSVector(0, .05);
        this.ctx = ctx;
        this.death = 50;
        this.isDead = false;
        this.rad = 15;
        this.transparent = 1;
    }
    //  methods
    run() {
        this.update();
        this.life();
        this.render();
    }

    update() {
        this.loc.add(this.vel);
        this.vel.add(this.acc);
    }

    life () {
        this.death = this.death-1;
        this.transparent = this.transparent - (this.transparent/this.death);
        if(this.death <= 0){ 
            this.isDead = true;
        }
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
        this.ctx.strokeStyle = "black";
        this.ctx.fillStyle = "rgba(230,50,100, " + this.transparent + ")";
        this.ctx.fill();
        this.ctx.stroke()
        this.ctx.closePath();
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