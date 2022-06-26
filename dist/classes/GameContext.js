export class GameContext {
    constructor(_options, snake) {
        this._options = _options;
        this.snake = snake;
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
//# sourceMappingURL=GameContext.js.map