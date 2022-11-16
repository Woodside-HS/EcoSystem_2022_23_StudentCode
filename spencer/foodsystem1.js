class FoodSystem1 extends Entity {
    // properties
    constructor(loc, vel, sz, wrld, death) {
        super(loc, vel, sz, wrld)
        this.id = "psystem";
        this.death = death;
        this.vel.multiply(0);
        this.f_List = [];
        this.addParticle = 0;
    
    }
    //  methods
    run() {
        if(this.addParticle % 50 == 0){
        this.f_List.push(new Food1(this.loc, this.death, this.ctx, this.size));
        }
        this.addParticle++;
        this.pdeath();
        for(let i = 0; i<this.f_List.length; i++){
            this.f_List[i].run();
        }
    }


    pdeath() {
        for(let i = this.f_List.length -1; i>=0; i--){
            if(this.f_List[i].isDead){
                this.f_List.splice(i, 1);
            }
        }
    }


}