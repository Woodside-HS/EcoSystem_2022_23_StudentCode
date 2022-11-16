class FoodParticleSystemT {
    // properties
    constructor(loc, sz, wrld) {
        //        super(loc, sz, wrld)
        this.loc = loc;//particle system is updatingfor some reason
        this.rad = sz;
        this.ctx = wrld.ctxMain;
        this.with = wrld.dims.width;
        this.hight = wrld.dims.height;
        this.clr = this.getRandomColor();
        this.yummy = [];
        this.id = "fdPrtcl";
        this.spawnInterval = 0;
    }
    //  methods
    run() {
        if(this.spawnInterval >= 5){
            this.yummy.push(new FoodParticleT(this.loc, new JSVector(Math.random() * 2.5 - 1.25, Math.random() *2.5 - 1.25 ), this.getRandomColor(), 5, Math.random() * 100 + 100));
            this.spawnInterval = 0;
        } else {
            this.spawnInterval++;
        }
        for (let i = this.yummy.length - 1; i >= 0; i--) {
            this.yummy[i].run();
            if (this.yummy[i].isDead) {//splices out dead food
                this.yummy.splice(i, 1);
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