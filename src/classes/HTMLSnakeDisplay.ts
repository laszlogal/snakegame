import { SnakeDisplay } from "../interfaces/SnakeDisplay";

export class HTMLSnakeDisplay implements SnakeDisplay {
    constructor(private ctx: CanvasRenderingContext2D){}
    
    
    refresh(): void {
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(800, 600);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke();
    }
}