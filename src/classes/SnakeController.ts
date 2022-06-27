import { Info } from "../interfaces/Info";
import { GameContext } from "./GameContext";
import { Snake, SnakeBlock } from "./Snake";

export class SnakeController {
    constructor(private snake: Snake,
        private game: GameContext,
        private info: Info) {
            this.game.placeFruit();
         }
    move() {
        if (!this.game.isInGame()) {
            return;
        }
        const head = this.snake.head();
        let newHead = this.snake.newHead();
        if (this.isSnakeOutOfTable(head)) {
            this.crashOutOfTable();
        } else if (this.snake.contains(newHead)) {
            this.crashConnected();
        } else if (this.isFruitHit(newHead)) {
            this.eatFruit();
        } else {
            this.moveSnake();    
        }
            
    }
    
    private moveSnake() {
        this.info.clear();
        this.snake.move();
    }

    private crashConnected() {
        this.info.show("Crash: Snake is connected!");
        this.game.stop();
    }

    private crashOutOfTable() {
        this.info.show("Crash: out of table");
        this.game.stop();
    }

    private eatFruit() {
        this.snake.grow();
        this.game.placeFruit();
        this.game.makePoint();
        this.info.show("Hmm...Fruit!!!");
    }

    isFruitHit(newHead: SnakeBlock): boolean {
        const fruit = this.game.getFruit();  
        return newHead[0] == fruit[0] && newHead[1] == fruit[1];
    }
    
    isSnakeOutOfTable(head: SnakeBlock) {
        return head[0] < 0 || head[0] === this.game.options.columns 
            || head[1] < 0 || head[1] === this.game.options.rows;
    }

    getInfo() {
        return this.info;
    }

    reset() {
        this.snake.reset();
        this.game.reset();
        this.info.show("Get ready!");
    }
}