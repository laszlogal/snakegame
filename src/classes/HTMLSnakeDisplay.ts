import { Dimension } from "../interfaces/Dimension";
import { SnakeDisplay } from "../interfaces/SnakeDisplay";
import { GameContext } from "./GameContext";

export class HTMLSnakeDisplay implements SnakeDisplay {
    private blockWidth: number;
    private blockHeight: number;

    constructor(private ctx: CanvasRenderingContext2D,
        private game: GameContext,
        dimension: Dimension){
            this.blockWidth = dimension.width / game.width ;
            this.blockHeight = dimension.height / game.height;
            console.log(this.blockWidth + ", " + this.blockHeight);
        }
    
    
    refresh(): void {
        this.game.showSnake(this);
        this.drawFood(5, 8);
    }

    drawSnakeBlock(column: number, row: number) {
        this.ctx.save();
        this.ctx.fillStyle="blue"; 
        this.ctx.fillRect(column * this.blockWidth, row * this.blockHeight,
        this.blockWidth, this.blockHeight);
        this.ctx.strokeStyle="black"; 
        this.ctx.strokeRect(column * this.blockWidth, row * this.blockHeight,
            this.blockWidth, this.blockHeight);
        this.ctx.restore();
    }

    drawFood(column: number, row: number): void {
        this.ctx.beginPath();
        this.ctx.strokeStyle="yellow"; 
        this.ctx.fillStyle="red"; 
        const margin = 2;
        const radius = this.blockWidth / 2;
        this.ctx.arc(radius + (column * this.blockWidth), radius + row * this.blockHeight,
            radius - 2 * margin, 0, 360);
            this.ctx.stroke();

        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}