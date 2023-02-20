

class Cell {
    constructor(wrld, r, c) {
        this.width = wrld.cellWidth;
        this.height = wrld.cellHeight;
        let x = c * this.width;
        let y = r * this.height;
        this.loc = new JSVector(x, y);
        this.r = r;
        this.c = c;
    }

    run() {
        this.render();
    }

    render() {
        let ctx = game.ctx;
        if (this.isPath) {
            ctx.fillStyle = "burlywood";
            ctx.fillRect(this.loc.x, this.loc.y, this.width, this.height);
        }
        //render cell
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        ctx.stroke();
    }
}//+++++++++++++++++++++  end of Cell class