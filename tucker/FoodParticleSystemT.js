class FoodParticleSystemT {
    // properties
    constructor(loc, sz, wrld) {
        //        super(loc, sz, wrld)
        this.loc = loc;
        //this.vel = vel;
        this.rad = sz;
        this.ctx = wrld.ctxMain;
        this.with = wrld.dims.width;
        this.hight = wrld.dims.height;
        this.clr = this.getRandomColor();
        this.yummy = [];
    }
    //  methods
    run() {
        this.yummy.push(new FoodParticleT(this.loc, new JSVector(Math.random() * 4 - 2, Math.random() * 4 - 2), this.getRandomColor(), 5, Math.random() * 100 + 100));
        
        for (let i = this.yummy.length - 1; i >= 0; i--) {
            this.yummy[i].run();
            if (this.yummy[i].isDead = true) {//splices out dead food
                //this.yummy.splice(i, 1);
            }
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