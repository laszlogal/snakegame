import { Direction } from "./classes/Direction.js";
import { GameContext } from "./classes/GameContext.js";
import { Snake } from "./classes/Snake.js";
import { SnakeController } from "./classes/SnakeController.js";
import { GameFactory } from "./interfaces/GameFactory.js";
import { Loop } from "./interfaces/Loop.js";
import { SnakeDisplay } from "./interfaces/SnakeDisplay.js";
import { SnakeOptions } from "./interfaces/SnakeOptions.js";

export class GameBuilder {
    private options: SnakeOptions = {rows: 30, columns: 30, hasGrid: true};
    private snake: Snake;
    private game: GameContext; 
    private controller: SnakeController;
    private display: SnakeDisplay;
    private loop: Loop;

    constructor(factory: GameFactory) {
        this.snake = this.createSnake(this.options.columns, this.options.rows);
        this.game = new GameContext(this.options, this.snake); 
        this.controller = new SnakeController(this.snake, this.game, factory.createInfo());
        this.display = factory.createDisplay(this.game);
        this.loop = factory.createLoop(()  => {
            if (this.game.isInGame()) {
                this.controller.move();
                this.display.refresh();
            } else {
              // info.show("Press any key to start!")
            }
        });
        
    }

    start() {
        this.game.start();
        this.loop.start();
    }
    
    createSnake(columns: number, rows: number) : Snake {
        return new Snake([columns / 2,rows / 2], 3, Direction.LEFT);
    }
}
