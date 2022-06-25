import { Snake } from "./Snake.js";
import { Direction } from "./Direction.js";
export class GameContext {
    constructor(_width, _height, _options) {
        this._width = _width;
        this._height = _height;
        this._options = _options;
        this.snake = new Snake([_width / 2, _height / 2], 3, Direction.DOWN);
    }
    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    get options() {
        return this._options;
    }
    showSnake(display) {
        this.snake.show(display);
    }
    moveSnake() {
        this.snake.move();
    }
}
