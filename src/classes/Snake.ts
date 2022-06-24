import { SnakeDisplay } from "../interfaces/SnakeDisplay";

export class Snake {
    private body: [number, number][] =[];
    constructor(private head: [number, number], length: number) {
        this.body.push(head);
        for (let i = 1; i < length; i++) {
            this.body.push([head[0], head[1] + i]);
        }
    }

    show(display: SnakeDisplay) {
        this.body.forEach(block => {
            display.drawSnakeBlock(block[0], block[1]);
        })
    }
} 