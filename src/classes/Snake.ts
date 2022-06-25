import { SnakeDisplay } from "../interfaces/SnakeDisplay";
import { Direction } from "../classes/Direction";
export type SnakeBlock = [number, number];

export class Snake {
    private body: SnakeBlock[] =[];
    constructor(
        tailBlock: SnakeBlock, length: number,
        private direction: Direction) {
            for (let i = 0; i < length; i++) {
                this.body.push([tailBlock[0], tailBlock[1] + i]);
            }
    }

    head(): SnakeBlock {
        return this.body[this.body.length - 1];
    }

    tail(): SnakeBlock {
        return this.body[0];
    }
    
    show(display: SnakeDisplay) {
        this.body.forEach(block => {
            display.drawSnakeBlock(block[0], block[1]);
        })
    }

    move() {
        this.body.shift;
        this.body.push(this.newHead())
        
    }

    newHead() : SnakeBlock {
        let result: SnakeBlock = [this.head()[0], this.head()[1]];
        switch (this.direction) {
            case Direction.DOWN: 
                result[1]++;
                break;
            case Direction.UP:
                result[1]++; 
                 break;                         
         }
         return result;
     }

} 