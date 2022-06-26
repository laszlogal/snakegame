import { Snake, SnakeBlock } from "./Snake";

export class SnakeController {
    private inGame: boolean = true;
    constructor(private snake: Snake,
         private columns: number,
         private rows: number) {}
    move() {
        if (!this.inGame) {
            return;
        }
        const head = this.snake.head();
        if (this.isSnakeOutOfTable(head)) {
            console.log("Crash: out of table");
            this.inGame = false;
        } else {
            this.snake.move();
        
        }
    }  
    
    isSnakeOutOfTable(head: SnakeBlock) {
        return head[0] === 0 || head[0] === this.columns || head[1] === 0 || head[1] === this.rows;
    }
}