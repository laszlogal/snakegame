import { Snake } from "./Snake.js";
import { SnakeDisplay } from "../interfaces/SnakeDisplay.js";
import { SnakeOptions } from "../interfaces/SnakeOptions.js";

export class GameContext {
    reset() {
        this.stop();
        this.fruit = [-1, -1];
        this.points = 0;
    }

    private inGame: boolean = false;
    isInGame() : boolean {
       return this.inGame;
    }
    
    private fruit: [number, number] = [-1, -1];
    private points: number = 0;
    public get options(): SnakeOptions {
        return this._options;
    }
    
    constructor(private _options: SnakeOptions,
        private snake: Snake){
    }

    start() {
        this.inGame = true;
        this.placeFruit();
    }

    stop() {
        this.inGame = false;
    }
    
    showSnake(display: SnakeDisplay) {
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

    getFruit(): [number, number] {
        return this.fruit;
    }

    makePoint() {
        this.points += 5;
    }

    getPoints() : number {
        return this.points;
    }

    toggle() {
        if (this.inGame) {
           this.stop();
        } else {
           this.start();}
     }
 
}