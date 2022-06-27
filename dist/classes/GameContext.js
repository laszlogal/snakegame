export class GameContext {
    constructor(_options, snake) {
        this._options = _options;
        this.snake = snake;
        this.inGame = false;
        this.fruit = [-1, -1];
        this.points = 0;
    }
    isInGame() {
        return this.inGame;
    }
    get options() {
        return this._options;
    }
    start() {
        this.inGame = true;
    }
    stop() {
        this.inGame = false;
    }
    showSnake(display) {
        this.snake.show(display);
    }
    placeFruit() {
        this.fruit = [-1, -1];
        while (this.isIvalidFruit()) {
            this.fruit = [Math.floor(Math.random() * this.options.columns),
                Math.floor(Math.random() * this.options.rows)];
        }
    }
    isIvalidFruit() {
        return this.fruit[0] === -1 || this.snake.contains(this.fruit);
    }
    getFruit() {
        return this.fruit;
    }
    makePoint() {
        this.points += 5;
    }
    getPoints() {
        return this.points;
    }
    toggle() {
        if (this.inGame) {
            this.stop();
        }
        else {
            this.start();
        }
    }
}
//# sourceMappingURL=GameContext.js.map