class Food2 extends Entity {
    // properties
    constructor(loc, wrld) {
        this.loc = loc;
        this.vel = new JSVector(Math.random()*2-1,Math.random()*2-1);
        this.acc = new JSVector(0, .05);
        this.wrld = wrld;
        this.death = 255;
        this.isDead = false;
        this.rad = 5;
    }
    //  methods
    run() {
        this.update();
        this.render();
        this.life();
    }

    update() {
        this.loc.add(this.vel);
        this.vel.add(this.acc);
    }

    life () {
        this.death = this.death-2;
        if(this.death <= 0){
            this.isDead = true()
        }
    }

    render() {
        this.wrld.beginPath();
        this.wrld.arc(this.loc.x,this.loc.y,this.rad,0,Math.PI*2);
        this.wrld.strokeStyle = this.clr;
        this.wrld.fillStyle = this.clr;
        this.wrld.fill();
        this.wrld.stroke()
        this.wrld.closePath();
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