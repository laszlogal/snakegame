import { Snake } from "./Snake.js";
import { SnakeDisplay } from "../interfaces/SnakeDisplay.js";
import { SnakeOptions } from "../interfaces/SnakeOptions.js";

export class GameContext {
  
    public get options(): SnakeOptions {
        return this._options;
    }

    
    constructor(private _options: SnakeOptions,
        private snake: Snake){
    }

    showSnake(display: SnakeDisplay) {
        this.snake.show(display);
    }

    moveSnake() {
        this.snake.move();
    }

    snakeLeft() {
        this.snake.turnLeft();
    }
}