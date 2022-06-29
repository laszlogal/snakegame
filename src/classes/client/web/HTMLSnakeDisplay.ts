import { Dimension } from "../../../interfaces/Dimension";
import { Info } from "../../../interfaces/Info";
import { SnakeDisplay } from "../../../interfaces/SnakeDisplay";
import { GameContext } from "../../GameContext";

export class HTMLSnakeDisplay implements SnakeDisplay {
    private blockWidth: number;
    private blockHeight: number;

    constructor(private ctx: CanvasRenderingContext2D,
        private game: GameContext,
        private dimension: Dimension,
        private info: Info){
            this.blockWidth = dimension.width / game.options.columns;
            this.blockHeight = dimension.height / game.options.rows;
            console.log(this.blockWidth + ", " + this.blockHeight);
        }
    showInfo(message: string): void {
        this.info.show(message);
    }
    
    showPoints(points: number): void {
        this.info.points(points);
    }
    
    
    refresh(): void {
        this.drawFrame();
        if (this.game.options.hasGrid) {
            this.drawGrid();
        }

        this.game.showSnake(this);
        this.drawFruit(this.game.getFruit())
      }

    drawFrame() {
        this.ctx.save();
        this.ctx.strokeStyle="green";
        this.ctx.lineWidth = 4;
        this.ctx.clearRect(0, 0, this.dimension.width, this.dimension.height);
        this.ctx.strokeRect(0, 0, this.dimension.width, this.dimension.height);
        this.ctx.restore;
        
    }

    drawGrid(): void {
        this.ctx.save();
        this.ctx.strokeStyle="grey";
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

    drawSnakeBlock(column: number, row: number) {
        this.ctx.lineWidth = 1;
        this.ctx.save();
        this.ctx.fillStyle="blue"; 
        this.ctx.fillRect(column * this.blockWidth, row * this.blockHeight,
        this.blockWidth, this.blockHeight);
        this.ctx.restore();
    }

    drawFruit(fruit: [number, number]): void {
        this.ctx.lineWidth = 1;
         this.ctx.beginPath();
        this.ctx.strokeStyle="yellow"; 
        this.ctx.fillStyle="red"; 
        const margin = 2;
        const radius = this.blockWidth / 2;
        this.ctx.arc(radius + (fruit[0] * this.blockWidth),
         radius + fruit[1] * this.blockHeight,
            radius - 2 * margin, 0, 360);
            this.ctx.stroke();

        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}