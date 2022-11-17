class Cell {
    constructor(wrld, ctx, r, c) {
        this.wrld = wrld;
        this.ctx = ctx;
        this.row = r;
        this.col = c;
        let x = (wrld.rowHeight * this.col) + wrld.dims.left;
        let y = (wrld.colWidth * this.row) + wrld.dims.top;
        this.loc = new JSVector(x, y);
        this.width = wrld.colWidth;
        this.height = wrld.rowHeight;
    }

    render() {
        let ctx = this.ctx;
        ctx.strokeStyle = "lightblue";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.rect(this.loc.x, this.loc.y, this.width, this.height);
        ctx.stroke();
    }
}//++++++  end cell