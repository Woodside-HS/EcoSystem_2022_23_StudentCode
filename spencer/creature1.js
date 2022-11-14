class Creature1 extends Creature{

constructor(loc, vel, sz, wrld){
    super(loc, vel, sz, wrld);
    this.maxSpeed = 4;
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
    for(let i = 0; i<World.entities.length; i++){
        if(typeof(entities[i]) == FoodSystem1){
            if(this.loc.distance(foodSystem1) < 500){
                attract(entities[i]);
                for(let j = 0; j<entities[i].f_list.length; j++){
                    if(this.loc.distance(entities[i].f_list[j]) == 20){
                        entities[i].clr = "red";
                        entities[i].f_list[i].life = 5;
                    }
                }
            }
        }
    }

}

attract(fsystem){
    this.acc = JSVector.subGetNew(fsystem.loc, this.loc);
    this.acc.normalize().multiply(0.05);
}


}

