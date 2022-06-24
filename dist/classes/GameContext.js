import { Snake } from "./Snake.js";
export class GameContext {
    constructor(_width, _height) {
        this._width = _width;
        this._height = _height;
        this.snake = new Snake([_width / 2, _height / 2], 3);
    }
    get height() {
        return this._height;
    }
    get width() {
        return this._width;
    }
    showSnake(display) {
        this.snake.show(display);
    }
}
