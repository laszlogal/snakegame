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
    }

    drawSnakeBlock(column: number, row: number) {
        this.ctx.fillStyle="blue"; 
        this.ctx.fillRect(column * this.blockWidth, row * this.blockHeight,
        this.blockWidth, this.blockHeight);
        this.ctx.strokeStyle="black"; 
        this.ctx.strokeRect(column * this.blockWidth, row * this.blockHeight,
            this.blockWidth, this.blockHeight);
            
    }
}