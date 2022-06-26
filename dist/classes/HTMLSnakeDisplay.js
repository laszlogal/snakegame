"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLSnakeDisplay = void 0;
class HTMLSnakeDisplay {
    constructor(ctx, game, dimension) {
        this.ctx = ctx;
        this.game = game;
        this.dimension = dimension;
        this.blockWidth = dimension.width / game.width;
        this.blockHeight = dimension.height / game.height;
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
        this.ctx.strokeRect(0, 0, this.dimension.width, this.dimension.height);
        this.ctx.restore;
    }
    drawGrid() {
        this.ctx.save();
        this.ctx.strokeStyle = "grey";
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.game.width; i++) {
            const column = this.blockWidth * i;
            this.ctx.moveTo(column, 0);
            this.ctx.lineTo(column, this.dimension.height);
        }
        for (let i = 0; i < this.game.height; i++) {
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
exports.HTMLSnakeDisplay = HTMLSnakeDisplay;
//# sourceMappingURL=HTMLSnakeDisplay.js.map