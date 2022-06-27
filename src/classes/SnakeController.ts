import { GameContext } from "./GameContext";
import { Snake, SnakeBlock } from "./Snake";

export class SnakeController {
    constructor(private snake: Snake,
         private game: GameContext) {
            this.game.placeFruit();
         }
    move() {
        if (!this.game.isInGame()) {
            return;
        }
        const head = this.snake.head();
        let newHead = this.snake.newHead();
        if (this.isSnakeOutOfTable(head)) {
            console.log("Crash: out of table");
            this.game.stop();
        } else if (this.snake.contains(newHead)) {
            console.log("Crash: Snake is connected!");
            this.game.stop();
        } else if (this.isFruitHit(newHead)) {
                this.snake.grow();
                this.game.placeFruit();
                this.game.makePoint();
            } else {
                this.snake.move();    
            }
            
    }
    
    isFruitHit(newHead: SnakeBlock): boolean {
        const fruit = this.game.getFruit();  
        return newHead[0] == fruit[0] && newHead[1] == fruit[1];
    }
    
    isSnakeOutOfTable(head: SnakeBlock) {
        return head[0] === 0 || head[0] === this.game.options.columns 
            || head[1] === 0 || head[1] === this.game.options.rows;
    }
}