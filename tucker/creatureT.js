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
            eyeSight: 100
        }
    }
    run() {
        this.checkBorder();
        this.eatYummy();
        this.update();
        this.render();
        this.NrgDrain();
    }
    NrgDrain() {
        this.statBlock.Nrg--;
        if(this.statBlock.Nrg>1000){
            this.statBlock.Nrg = 1000;
        }
        if(this.statBlock.Nrg<=0){
            for(let i = world.entities.length; i>0;i--){
                if(this == world.entities[i]){
                    world.entities.splice(i,1);
                }
            }
        }
    }
    update() {
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed);
        this.loc.add(this.vel)
    }
    checkBorder() {
        if (this.loc.x > world.dims.width) {
            this.loc.x = 0
        }
        if (this.loc.x < 0) {
            this.loc.x = world.dims.width;
        }
        if (this.loc.y > world.dims.height) {
            this.loc.y = 0;
        }
        if (this.loc.y < 0) {
            this.loc.y = world.dims.height;
        }
    }
    eatYummy() {
        let eatDist = this.statBlock.eyeSight * this.statBlock.eyeSight;
        for (let i = 0; i < world.entities.length; i++) {
            console.log(typeof world.entities[i]);
            if (world.entities[i].id == "fdPrtcl") {//checks to make sure it is a food particle system
                //below eats the particle
                let fPSys = world.entities[i].yummy;
                for (let j = 0; j < fPSys.length; j++) {
                    let dis = this.loc.distanceSquared(fPSys[j].loc);
                    if (dis <= eatDist) {
                        this.attract(fPSys[j].loc);
                        if (dis <= eatDist / 2) {
                            this.ctx.beginPath();
                            this.ctx.moveTo(this.loc.x, this.loc.y);
                            this.ctx.lineTo(fPSys[j].loc.x, fPSys[j].loc.y);
                            this.ctx.stroke();
                            this.consume(i, j);
                        }


                    }
                }
            }
        }
    }
    consume(particleSysNum, particleNum) {
        this.statBlock.Nrg++;
        world.entities[particleSysNum].yummy[particleNum].lifeSpan--;
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
        c.fillText(this.statBlock.Nrg,this.loc.x,this.loc.y-this.size);
        c.arc(this.loc.x, this.loc.y, this.size, 0, Math.PI * 2);
        c.fillStyle = "black";
        c.fill();
    }
}