class creatureT {
    constructor(loc, vel, obesity, wrldCTX) {
        //movement vectors
        this.loc = loc.copy();
        this.vel = vel.copy();
        this.acc = new JSVector(0, 0);
        this.maxSpeed = 1;
        //drawing vectors
        this.size = obesity;
        this.ctx = wrldCTX;

        //statblock, has info the keeps the creature alive
        this.statBlock = {
            Hp: 1000,
            Nrg: 1000,
            PredNature: 5,
            FlmBrth: 50,
            LMAOamIdeadHaHaYesIAm: false,
            eyeSight: 50
        }
    }
    run() {
        this.checkBorder();
        this.eatYummy();
        this.update();
        this.render();
    }
    update() {
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed);
        this.loc.add(this.vel)
    }
    checkBorder() {
        if (this.loc.x > world.cnvMain.width) {
            this.loc.x = 0
        }
        if (this.loc.x < 0) {
            this.loc.x = world.cnvMain.width;
        }
        if (this.loc.y > world.cnvMain.height) {
            this.loc.y = 0;
        }
        if (this.loc.y < 0) {
            this.loc.y = world.cnvMain.height;
        }
    }
    eatYummy() {
        let eatDist = this.statBlock.eyeSight * this.statBlock.eyeSight;
        for (let i = 0; i < world.entities.length; i++) {
            console.log(typeof world.entities[i]);
            if (world.entities[i].id == "fdPrtcl") {//checks to make sure it is a food particle system
                //below eats the particle
                let fPSys = world.entities[i].yummy;
                for (let i = 0; i < fPSys.length; i++) {
                    let dis = this.loc.distanceSquared(fPSys[i].loc);
                    if (dis <= eatDist) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(this.loc.x,this.loc.y);
                        this.ctx.lineTo(fPSys[i].loc.x,fPSys[i].loc.y);
                        this.ctx.stroke();
                        this.attract(fPSys[i].loc);
                    }
                }
            }
        }
    }
    attract(food) {
        let tempAcc = JSVector.subGetNew(food, this.loc);
        tempAcc.normalize();
        tempAcc.setMagnitude(0.05);
        this.acc.add(tempAcc);
    }
    render() {
        let c = this.ctx;
        c.beginPath();
        c.arc(this.loc.x, this.loc.y, this.size, 0, Math.PI * 2);
        c.fillStyle = "black";
        c.fill();
    }
}