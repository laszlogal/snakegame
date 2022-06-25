import { Snake } from "./Snake.js";
import { SnakeDisplay } from "../interfaces/SnakeDisplay.js";
import { SnakeOptions } from "../interfaces/SnakeOptions.js";
import { Direction } from "./Direction.js";

export class GameContext {
    public get height(): number {
        return this._height;
    }

    public get width(): number {
        return this._width;
    }

    
    public get options(): SnakeOptions {
        return this._options;
    }

    
    private snake: Snake; 
    constructor(private _width: number, private _height: number,
        private _options: SnakeOptions){
        this.snake = new Snake([_width / 2, _height / 2], 3, Direction.DOWN);
    }

    showSnake(display: SnakeDisplay) {
        this.snake.show(display);
    }

    moveSnake() {
        this.snake.move();
    }
}