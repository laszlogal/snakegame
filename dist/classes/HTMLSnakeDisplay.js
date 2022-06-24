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
    }

    drawSnakeBlock(column, row) {
        this.ctx.fillStyle = "blue";
        const blockX = column * this.blockWidth;
        const blockY = row * this.blockHeight;
        this.ctx.fillRect(blockX, blockY, this.blockWidth, this.blockHeight);
        this.ctx.strokeStyle = "black";
        this.ctx.strokeRect(blockX, blockY, this.blockWidth, this.blockHeight);
    }
}
