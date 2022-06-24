export class HTMLSnakeDisplay {
    constructor(ctx, game, dimension) {
        this.ctx = ctx;
        this.game = game;
        this.blockWidth = dimension.width / game.width;
        this.blockHeight = dimension.height / game.height;
        console.log(this.blockWidth + ", " + this.blockHeight);
    }
    refresh() {
        this.game.showSnake(this);
        this.drawFood(5, 8);
    }
    drawSnakeBlock(column, row) {
        this.ctx.save();
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(column * this.blockWidth, row * this.blockHeight, this.blockWidth, this.blockHeight);
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(column * this.blockWidth, row * this.blockHeight, this.blockWidth, this.blockHeight);
        this.ctx.restore();
    }
    drawFood(column, row) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "yellow";
        this.ctx.fillStyle = "red";
        const margin = 2;
        const radius = this.blockWidth / 2;
        this.ctx.arc(radius + (column * this.blockWidth), radius + row * this.blockHeight, radius - 2 * margin, 0, 360);
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}
