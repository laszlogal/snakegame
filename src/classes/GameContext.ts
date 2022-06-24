import { Snake } from "./Snake.js";
import { SnakeDisplay } from "../interfaces/SnakeDisplay.js";

export class GameContext {
    public get height(): number {
        return this._height;
    }

    public get width(): number {
        return this._width;
    }

    
    
    private snake: Snake; 
    constructor(private _width: number, private _height: number){
        this.snake = new Snake([_width / 2, _height / 2], 3);
    }

    showSnake(display: SnakeDisplay) {
        this.snake.show(display);
    }
}