"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameContext = void 0;
const Snake_js_1 = require("./Snake.js");
const Direction_js_1 = require("./Direction.js");
class GameContext {
    constructor(_width, _height, _options) {
        this._width = _width;
        this._height = _height;
        this._options = _options;
        this.snake = new Snake_js_1.Snake([_width / 2, _height / 2], 3, Direction_js_1.Direction.DOWN);
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
    snakeLeft() {
        this.snake.turnLeft();
    }
}
exports.GameContext = GameContext;
//# sourceMappingURL=GameContext.js.map