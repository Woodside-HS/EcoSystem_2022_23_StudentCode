class Creature1 extends Creature{

constructor(loc, vel, sz, wrld){
    super(loc, vel, sz, wrld);
    this.maxSpeed = 2;
    this.speedWait;
}

run(){
    super.run();
    this.speedWait--;
    if(this.speedWait == 1){
        this.vel.multiply(100);
    }
    this.eat();
}

render(){
    let context = this.ctx;
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection());
    context.beginPath(); 
    context.moveTo(20, 0);
    context.lineTo(-20, 10);
    context.lineTo(-10, 0);
    context.lineTo(-20, -10);
    context.strokeStyle = "black"; 
    context.fillStyle = this.clr; 
    context.fill(); 
    context.restore();
    context.stroke(); 
}


eat(){
    for(let i = 0; i<world.entities.length; i++){
        if(world.entities[i].id == "psystem"){
            //if(this.loc.distance(foodSystem1) < 500){
                this.attract(world.entities[i]);
                for(let j = 0; j<world.entities[i].f_List.length; j++){
                    if(this.loc.distance(world.entities[i].f_List[j].loc) <= 25){
                        world.entities[i].f_List[j].die();
                    }
                }
            //}
        }
    }

}

attract(fsystem){
    let closest = 500000;
    let index = -1;
    for(let k = 0; k<fsystem.f_List.length; k++){
        if(this.loc.distance(fsystem.f_List[0].loc, this.loc)<closest){
            index = k;
            closest = this.loc.distance(fsystem.f_List[0].loc, this.loc);
        }
    }
    if(closest<=25){
        this.vel.multiply(0.01);
        fsystem.f_List[index].vel.limit(0.01);
        this.speedWait = fsystem.f_List[index].life;
        

    }
    else if(index != -1){
    console.log("Fsystem:" + fsystem.f_List[index].loc);
    console.log("Creature: " + this.loc);
    this.acc = JSVector.subGetNew(fsystem.f_List[index].loc, this.loc);
    this.acc.normalize();
    this.acc.multiply(0.2);
    }
}



}

