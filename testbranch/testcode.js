class Tester {
    constructor(ctx) {
        this.nums = [];
        this.objs = [];
        this.objs2 = {
            creatures: [],
            food: [],
            ps: []
        }
        this.startTime = new Date();
        this.endTime = new Date();
        this.ctx = ctx;
        this.loadObjects2();
    }



    loadNumbers() {
        console.log("start = " + this.startTime);
        for (let i = 0; i < 100000000; i++) {
            this.nums[i] = i;
        }
        this.startTime = new Date().getTime();
        for (let i = 0; i < 100000000; i++) {
            if (this.nums[i] === this.nums.length - 1) {
                break;
            }
        }
        this.endTime = new Date().getTime();
        console.log("end = " + this.endTime);
        console.log("diff = " + ((this.endTime - this.startTime)) + "  milliseconds");
    }

    loadObjects() {
        let num = 1000000
        console.log("arrayLength =  " + num);
        console.log("start = " + new Date().getTime());
        for (let i = 0; i < num; i++) {
            let loc = new JSVector(100, 100);
            this.objs[i] = new Particle(loc, this.ctx);
        }
        this.startTime = new Date().getTime();
        for (let i = 0; i < num; i++) {
            if (this.objs[i] === this.objs[this.objs.length - 1]) {
                console.log(this.objs[i]);
            }
        }
        this.endTime = new Date().getTime();
        console.log("end = " + this.endTime);
        console.log("diff = " + ((this.endTime - this.startTime)) + "  milliseconds");
    }


    loadObjects2() {
        let numLimit = 1000000
        console.log("arrayLength =  " + numLimit);
        console.log("start = " + new Date().getTime());
        //find three random chunks that add to numLimit
        let n1 = Math.floor(Math.random() * numLimit);
        numLimit = numLimit - n1;
        let n2 = Math.floor(Math.random() * numLimit);
        numLimit = numLimit > n2 ? numLimit - n2 : n2 - numLimit;
        let n3 = numLimit;

        for (let i = 0; i < n1; i++) {
            let loc = new JSVector(100, 100);
            this.objs2.creatures.push(new Particle(loc, this.ctx )) ;
        }
        for (let i = 0; i < n2; i++) {
            let loc = new JSVector(100, 100);
            this.objs2.food.push(new Particle(loc, this.ctx )) ;
        }
        for (let i = 0; i < n3; i++) {
            let loc = new JSVector(100, 100);
            this.objs2.ps.push(new FoodPS1(loc, this.ctx )) ;
        }

  
        this.endTime = new Date().getTime();
        console.log("end = " + this.endTime);
        console.log("diff = " + ((this.endTime - this.startTime)) + "  milliseconds");
    }

    findObject(obj, key){
            let retObject = obj;
            if(key === 'creatures'){

            }else if(key === 'food'){

            }else if(key === 'ps'){
                
            }
    }
}//#############################################  Tester Class

