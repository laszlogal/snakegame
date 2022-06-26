export class HTMLSnakeDisplay {
    constructor(ctx, game, dimension) {
        this.ctx = ctx;
        this.game = game;
        this.dimension = dimension;
        this.blockWidth = dimension.width / game.options.columns;
        this.blockHeight = dimension.height / game.options.rows;
        console.log(this.blockWidth + ", " + this.blockHeight);
    }
    refresh() {
        this.drawFrame();
        if (this.game.options.hasGrid) {
            this.drawGrid();
        }
        this.game.showSnake(this);
        this.drawFood(5, 8);
    }
    drawFrame() {
        this.ctx.save();
        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth = 4;
        this.ctx.clearRect(0, 0, this.dimension.width, this.dimension.height);
        this.ctx.strokeRect(0, 0, this.dimension.width, this.dimension.height);
        this.ctx.restore;
    }
    drawGrid() {
        this.ctx.save();
        this.ctx.strokeStyle = "grey";
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.game.options.columns; i++) {
            const column = this.blockWidth * i;
            this.ctx.moveTo(column, 0);
            this.ctx.lineTo(column, this.dimension.height);
        }
        for (let i = 0; i < this.game.options.rows; i++) {
            const row = this.blockHeight * i;
            this.ctx.moveTo(0, row);
            this.ctx.lineTo(this.dimension.width, row);
        }
        this.ctx.stroke();
        this.ctx.restore();
    }
    drawSnakeBlock(column, row) {
        this.ctx.lineWidth = 1;
        this.ctx.save();
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(column * this.blockWidth, row * this.blockHeight, this.blockWidth, this.blockHeight);
        this.ctx.restore();
    }
    drawFood(column, row) {
        this.ctx.lineWidth = 1;
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
//# sourceMappingURL=HTMLSnakeDisplay.js.map