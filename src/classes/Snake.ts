import { SnakeDisplay } from "../interfaces/SnakeDisplay";
import { Direction } from "../classes/Direction.js";


type SnakeBlock = [number, number];
export {SnakeBlock, Snake}
class Snake {
            
    private body: SnakeBlock[] =[];
    constructor(
        private tailBlock: SnakeBlock,
        private length: number,
        private direction: Direction) {
            this.createSnake(tailBlock, length);
    }

    createSnake(tailBlock: SnakeBlock, length: number) {
        switch(this.direction) {
            case Direction.LEFT:
                this.createLeft(length, tailBlock);
                break;
            case Direction.RIGHT:
                this.createRight(length, tailBlock);
                break;
            case Direction.DOWN:
                this.createDown(length, tailBlock);
                break;
            case Direction.UP:
                this.createUp(length, tailBlock);
        };
    }

    private createLeft(length: number, tailBlock: SnakeBlock) {
        for (let i = 0; i < length; i++) {
            this.body.push([tailBlock[0] - i, tailBlock[1]]);
        }
    }

    

    private createRight(length: number, tailBlock: SnakeBlock) {
        for (let i = 0; i < length; i++) {
            this.body.push([tailBlock[0] + i, tailBlock[1]]);
        }
    }

    private createDown(length: number, tailBlock: SnakeBlock) {
        for (let i = 0; i < length; i++) {
            this.body.push([tailBlock[0], tailBlock[1] + i]);
        }
    }

    
    private createUp(length: number, tailBlock: SnakeBlock) {
        for (let i = 0; i < length; i++) {
            this.body.push([tailBlock[0], tailBlock[1] - i]);
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
        this.body.shift();
        this.grow();
    }

    
    grow() {
        this.body.push(this.newHead())
    }

    newHead() : SnakeBlock {
        let result: SnakeBlock = [this.head()[0], this.head()[1]];
        switch (this.direction) {
            case Direction.LEFT:
                result[0]--;
                break;
            case Direction.RIGHT:
                result[0]++;
                break;
            case Direction.DOWN: 
                result[1]++;
                break;
            case Direction.UP:
                result[1]--; 
                break;                         
         }
         return result;
     }
     
    turnLeft() {
        if (this.direction != Direction.RIGHT) {
            this.direction = Direction.LEFT;
        }
    }

    turnRight() {
        if (this.direction != Direction.LEFT) {
            this.direction = Direction.RIGHT;
        }
    }

    turnUp() {
       if (this.direction != Direction.DOWN) {
        this.direction = Direction.UP;
       };
    }    
    
    turnDown() {
        if (this.direction != Direction.UP) {
         this.direction = Direction.DOWN;
        };
     }

     contains(block: [number, number]): boolean {
        for (let i = 0; i < this.body.length; i++) {
            if (block[0] === this.body[i][0] && block[1] === this.body[i][1]) {
                return true;
            }
        }
        return false;
    }

    
   reset() {
    this.body = [];
    this.direction = Math.floor(Math.random() * 4);
    this.createSnake(this.tailBlock, this.length);
 }
} 