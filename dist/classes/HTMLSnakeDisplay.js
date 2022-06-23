export class HTMLSnakeDisplay {
    constructor(ctx) {
        this.ctx = ctx;
    }
    refresh() {
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(800, 600);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
    }
}
